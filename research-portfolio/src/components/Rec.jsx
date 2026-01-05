import React from "react";
import "./Rec.css";

export default function Rec({
  name,
  title,
  organization,
  experience,
  description,
  photo,
  pdfLink
}) {
  return (
    <div className="rec-card">
      {/* Left photo */}
      <div className="rec-photo">
        <img src={photo} alt={name} />
      </div>

      {/* Right content */}
      <div className="rec-content">
        <h3 className="rec-title">
          <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            Letter of Recommendation – {name}
          </a>
        </h3>

        <p className="rec-meta">
          <strong>{name}</strong><br />
          {title} — {organization}<br />
          {experience}
        </p>

        <p className="rec-description">
          {description}
        </p>
      </div>
    </div>
  );
}
