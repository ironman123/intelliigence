import React from "react";
import FeatureRow from "./FeatureRow";
import { SECTIONS_DATA } from "../data/sectionsData"; // Make sure to save the data array from step 1
import "../styles/features.css";

export default function FeaturesLayout()
{
    return (
        <section className="feature-section-wrapper">
            {SECTIONS_DATA.map((item) => (
                <FeatureRow
                    key={item.id}
                    step={item.step}
                    eyebrow={item.eyebrow}
                    title={item.title}
                    description={item.description}
                    imageSrc={item.image} // Assumes you add image paths to data if needed
                    gradient={item.gradient} // Passing the gradient prop
                />
            ))}
        </section>
    );
}

