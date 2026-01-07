import React from "react";

export default function Footer() {
  return (
    <footer style={{ padding: "2rem", textAlign: "center", opacity: 0.6 }}>
      © {new Date().getFullYear()} Luke Lopez
    </footer>
  );
}
