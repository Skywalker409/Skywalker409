import React from "react";

export default function PaperCard({ title, abstract, link }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "6px" }}>
      <h3>{title}</h3>
      <p>{abstract}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Paper
        </a>
      )}
    </div>
  );
}
