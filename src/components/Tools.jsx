import React from "react";
import { TOOLS_DATA } from "../data/tools";
import "../styles/tools.css";

export default function Tools()
{
    return (
        <section className="tools-section">
            <div className="tools-header">
                <h3 className="tools-title">Powered by Modern Infrastructure</h3>
            </div>

            <div className="marquee-wrapper">
                {/* Render the track twice to create the infinite loop illusion */}
                <div className="marquee-track">
                    {TOOLS_DATA.map((tool, index) => (
                        <ToolItem key={`a-${index}`} tool={tool} />
                    ))}
                </div>

                {/* Second copy follows immediately after the first */}
                <div className="marquee-track" aria-hidden="true">
                    {TOOLS_DATA.map((tool, index) => (
                        <ToolItem key={`b-${index}`} tool={tool} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Sub-component for individual items
function ToolItem({ tool })
{
    const Icon = tool.icon;
    return (
        <div className="tool-item">
            <Icon size={24} className="tool-icon" strokeWidth={1.5} />
            <span className="tool-name">{tool.name}</span>
        </div>
    );
}

