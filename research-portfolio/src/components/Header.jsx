import React from "react";
import seal from "../assets/seal.png";

export default function Header() {
  return (
    <header style={{ padding: "1rem 2rem", borderBottom: "1px solid #ccc" }}>
      <h1 style={{ margin: 0 }}>Luke Lopez</h1>
      <nav style={{ marginTop: "0.5rem" }}>
        <a href="/" style={{ marginRight: "1rem" }}>Home</a>
       {/*  <a href="/papers" style={{ marginRight: "1rem" }}>Projects</a> */}
        <a href ="/lr" > Letters of Recomendation</a>
      </nav>
    </header>
  );
}
