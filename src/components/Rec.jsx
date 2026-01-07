import React from "react";
import { Link } from "react-router-dom";
import "./Rec.css";

export default function Rec({
  name,
  title,
  organization,
  experience,
  description,
  photo,
  pdfLink,
  routeLink // <-- NEW (optional)
}) {
  const TitleLink = () => {
    if (routeLink) {
      // Internal navigation (React Router)
      return (
        <Link to={routeLink} className="rec-link">
          {name}
        </Link>
      );
    }

    // Default / existing behavior (PDF or file)
    return (
      <a
        href={pdfLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rec-link"
      >
         {name}
      </a>
    );
  };

  return (
    <div className="rec-card">
      {/* Left photo */}
      <div className="rec-photo">
        <img src={photo} alt={name} />
      </div>

      {/* Right content */}
      <div className="rec-content">
        <h3 className="rec-title">
          <TitleLink />
        </h3>

        <p className="rec-meta">
          <strong>{name}</strong><br />
          {title} — {organization}<br />
          {experience}
        </p>

        <p className="rec-description">{description}</p>
      </div>
    </div>
  );
}
