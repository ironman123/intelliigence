import { useEffect } from "react";

export default function ChatWidget()
{
    useEffect(() =>
    {
        // Prevent duplicate scripts if the user navigates back and forth
        if (document.getElementById("bp-inject")) return;

        // 1. Create the Main Engine Script
        const script1 = document.createElement("script");
        script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js"; // Use stable v2.2 or v2.0
        script1.async = true;
        script1.id = "bp-inject"; // Tag it so we can check for it later

        // 2. ONLY Load Configuration AFTER Main Engine is Done
        script1.onload = () =>
        {
            const script2 = document.createElement("script");
            // Your specific configuration file
            script2.src = "https://files.bpcontent.cloud/2026/01/10/05/20260110050901-S2Z3L5PN.js";
            script2.async = true;
            script2.id = "bp-config"; // Tag it
            document.body.appendChild(script2);
        };

        document.body.appendChild(script1);

        // Cleanup: Don't actually remove the scripts on unmount.
        // Botpress is global; removing the scripts usually breaks the chat 
        // if the user navigates away and comes back. 
        // Better to leave them in the DOM.

    }, []);

    return null;
}