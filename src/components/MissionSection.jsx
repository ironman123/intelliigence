import React from "react";
import "../styles/mission.css";

const MissionSection = () =>
{
    return (
        <section className="mission-section">

            {/* Background Layer */}
            <div className="mission-bg-layer">
                <div className="mission-glow-center" />
                <div className="mission-grid-pattern" />
            </div>

            <div className="mission-container">

                {/* The Clean Badge */}
                <div className="mission-badge">
                    <span className="badge-pulse">
                        <span className="badge-dot-inner" />
                    </span>
                    <span className="badge-text">SYSTEM_OBJECTIVE</span>
                </div>

                {/* The Heading */}
                <h2 className="mission-heading">
                    Turning Raw Data into <br />
                    <span className="mission-gradient-text">
                        Real-World Action.
                    </span>
                </h2>

                {/* The One-Liner */}
                <p className="mission-subtext">
                    We bridge the gap between abstract algorithms and concrete utility.
                    From data pipelines to autonomous agents, we engineer the connections
                    that allow your company to think, predict, and act.
                </p>

            </div>
        </section>
    );
};

export default MissionSection;