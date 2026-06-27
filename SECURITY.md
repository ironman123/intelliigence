# Security Audit — Entropic System

Ranked by severity. Items 1–2 are the ones to act on before going live.

---

## 1. CRITICAL — verify the Supabase key in the browser is the *anon* key, and lock down the table with RLS

`ProjectModal.jsx` creates a Supabase client in the browser:

```js
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
```

Anything in a `VITE_`-prefixed variable is **compiled into the JavaScript bundle and shipped to every visitor.** Open devtools on the live site and you can read it. Two cases:

- **If `VITE_SUPABASE_KEY` is the `anon` / publishable key** → this is acceptable *by design*, BUT only if Row-Level Security (RLS) is enabled on the `leads` table. Without RLS, the anon key can read, update, and delete every row in your database from the browser console. Right now there is no evidence RLS is configured.
- **If it is the `service_role` key** → emergency. That key bypasses RLS entirely and grants full read/write to your whole database. Rotate it immediately in the Supabase dashboard and never put it in a `VITE_` var.

**Fix — run this in the Supabase SQL editor** (enables RLS and allows the public form to INSERT a lead but never read/modify anything):

```sql
-- 1. Turn on Row-Level Security for the leads table
alter table public.leads enable row level security;

-- 2. Allow anonymous visitors to INSERT a lead (and nothing else)
create policy "anon can submit a lead"
  on public.leads
  for insert
  to anon
  with check (true);

-- 3. Do NOT add select/update/delete policies for anon.
--    With RLS on and no select policy, the anon key cannot read leads back.
--    Read them from the Supabase dashboard or a server-side admin client only.
```

**Better fix (recommended) — move the write to the server** so the browser never holds DB credentials at all. In framework mode this is a route `action`. Sketch:

```js
// src/routes/api.lead.js  (a resource route — no default export = no UI)
import { createClient } from "@supabase/supabase-js";
import { send } from "@emailjs/browser";

export async function action({ request }) {
  const form = await request.formData();
  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  // ...validate, then write with a SERVER-ONLY key (process.env, NOT VITE_)...
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
  const { error } = await supabase.from("leads").insert([{ name, email, /* ... */ }]);
  if (error) return Response.json({ ok: false }, { status: 500 });
  return Response.json({ ok: true });
}
```

Then `ProjectModal` submits via `useFetcher()` to `/api/lead` instead of calling Supabase directly. Server-only env vars (no `VITE_` prefix) are never sent to the browser. *(This refactor is part of the component pass — flagged here, not yet wired.)*

---

## 2. HIGH — the contact form is an open spam/abuse relay

`ProjectModal` calls EmailJS and inserts to Supabase directly from the client with no abuse protection. Anyone can script thousands of submissions, flooding your inbox and database, and burning your EmailJS quota.

Mitigations (do at least the first two):
- **EmailJS dashboard:** enable the allowed-domains restriction (lock sends to `entropicsystem.com`) and rate limiting.
- **Add a CAPTCHA** (Cloudflare Turnstile is free and unobtrusive) or a honeypot field, validated in the server `action` above.
- **Rate-limit** by IP in the action.

Note: the EmailJS *public key* itself being in the bundle is fine — it is designed to be public. The problem is the lack of a gate, not the key.

---

## 3. MEDIUM — third-party chat script injected into every page

`ChatWidget.jsx` and `BotpressChat.jsx` both inject Botpress scripts (and you have two copies pointing at different versions — v2.2 and v3.5). Third-party scripts get full access to your page DOM. Recommendations:
- Keep only ONE chat widget (delete the unused `BotpressChat.jsx` or `ChatWidget.jsx`).
- Load it lazily after first interaction / idle, not on initial render, so it can't block paint or read the contact form fields before the user engages.
- Consider a Content-Security-Policy header allowlisting only the Botpress and EmailJS/Supabase origins.

---

## 4. LOW — housekeeping

- Run `npm audit` after the dependency changes and address anything high/critical.
- Confirm `.env` is in `.gitignore` (it appears to be a top-level file in your tree — make sure it was never committed; if it was, rotate those keys).
- Add a `.env.example` with the variable *names* only, so collaborators know what's needed without seeing values.
