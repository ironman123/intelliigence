// src/components/BotpressChat.jsx
"use client";
import { useEffect } from "react";

export default function BotpressChat()
{
    useEffect(() =>
    {
        // 1. Inject the main script
        const script1 = document.createElement("script");
        script1.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
        script1.async = true;
        document.body.appendChild(script1);

        // 2. Inject the config script (your specific bot)
        const script2 = document.createElement("script");
        script2.src = "https://files.bpcontent.cloud/2026/01/10/05/20260110050901-S2Z3L5PN.js";
        script2.defer = true;
        document.body.appendChild(script2);

        // Cleanup function (optional: removes scripts on unmount)
        return () =>
        {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []);

    return null; // This component doesn't render any visible UI itself
}