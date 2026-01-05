import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PaperCard from "../components/PaperCard";

export default function Papers() {
  const papers = [
    {
      title: "FM Transmitter Design Basics",
      abstract: "Notes and experiments on low-power FM transmitters.",
      link: "/assets/FM-Transmitter-Notes.pdf"
    },
    {
      title: "Antenna Efficiency Experiments",
      abstract: "Comparing antenna lengths and reception quality.",
      link: "/assets/Antenna-Experiments.pdf"
    }
  ];

  return (
    <div>
      <Header />
      <main style={{ maxWidth: "900px", margin: "auto", padding: "2rem" }}>
        <h2>Research Papers & Notes</h2>
        {papers.map((p, i) => (
          <PaperCard key={i} title={p.title} abstract={p.abstract} link={p.link} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
