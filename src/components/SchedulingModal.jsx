"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SchedulingModal({ isOpen, onClose })
{
    const dialogRef = useRef(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);

    // 1. Manage Modal State (Open/Close & Scroll Lock)
    useEffect(() =>
    {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen)
        {
            dialog.showModal();
            document.body.style.overflow = "hidden"; // Stop background scrolling
        } else
        {
            dialog.close();
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <dialog
            ref={dialogRef}
            onClick={(e) =>
            {
                // Close when clicking the dark backdrop outside the modal
                const rect = dialogRef.current.getBoundingClientRect();
                if (
                    e.clientX < rect.left ||
                    e.clientX > rect.right ||
                    e.clientY < rect.top ||
                    e.clientY > rect.bottom
                )
                {
                    onClose();
                }
            }}
            // 2. DIALOG STYLES: Reset everything to zero to prevent inheritance issues
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "90vw",              // 90% of screen width
                maxWidth: "1200px",         // Cap width at 1200px
                height: "90vh",             // 90% of screen height
                maxHeight: "1000px",
                margin: 0,
                padding: 0,
                border: "none",
                outline: "none",
                backgroundColor: "transparent", // Remove default white background
                zIndex: 2147483647,             // Max Z-Index
                overflow: "hidden"              // Prevent double scrollbars
            }}
            // Tailwind class just for the backdrop dimming
            className="backdrop:bg-black/80 backdrop:backdrop-blur-sm"
        >
            {/* 3. MAIN CARD CONTAINER */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#09090b", // Deep Black/Zinc background
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    overflow: "hidden",
                    color: "white",
                    fontFamily: "sans-serif"
                }}
            >
                {/* 4. HEADER SECTION (Fixed Height) */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px 24px",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                        backgroundColor: "#09090b",
                        flexShrink: 0 // Prevent header from shrinking
                    }}
                >
                    <span style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        padding: "4px 12px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        borderRadius: "99px"
                    }}>
                        Discovery Session
                    </span>

                    <button
                        onClick={onClose}
                        style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "none",
                            color: "white",
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "background 0.2s"
                        }}
                        onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.15)"}
                        onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.05)"}
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* 5. IFRAME AREA (Takes all remaining space) */}
                <div style={{ position: "relative", flex: 1, width: "100%", height: "100%" }}>

                    {/* Loading Spinner */}
                    {!iframeLoaded && (
                        <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1
                        }}>
                            <div className="animate-spin" style={{
                                width: "32px",
                                height: "32px",
                                border: "3px solid rgba(255,255,255,0.1)",
                                borderTop: "3px solid white",
                                borderRadius: "50%",
                                marginBottom: "16px"
                            }} />
                            <p style={{ color: "#71717a", fontSize: "0.9rem" }}>Loading availability...</p>
                        </div>
                    )}

                    {/* The Cal.com Iframe */}
                    <iframe
                        src="https://cal.com/rajul-yadav-hzdgd9/30min?theme=dark&layout=column_view"
                        title="Book a call"
                        onLoad={() => setIframeLoaded(true)}
                        style={{
                            position: "absolute", // <--- THE CRITICAL FIX
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: "none",
                            opacity: iframeLoaded ? 1 : 0,
                            transition: "opacity 0.5s ease"
                        }}
                    />
                </div>
            </div>
        </dialog>
    );
}

