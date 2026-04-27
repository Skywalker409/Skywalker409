import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rec from "../components/Rec";

export default function Papers() {
  const personal = [
{
      name: "Radio-based tracker",
      title: "Personal",
      organization: "Luke Lopez",
      experience:
        "PCB, RF, Analog Simulations",
      description:
        "By using capacitors as timer, it calculates the position of a emitter based off the time it takes for a radio signal to travel.  ",
      photo: "RFTracker2.png",
      routeLink : "/lr",
    },

  ]

  const school = [
    {
      name: "Transistor Characteristics",
      title: "ECEN 474",
      organization: "Texas A&M University",
      experience:
        "Cadience",
      description:
        "Measuring parameters of a transistor, how the size change can influence its properties. This information can be later used for calculations in the future. ",
      photo: "cmos.png",
      pdfLink: "./474_1.pdf",
    },

 {
      name: "CMOS Layout design and Simulation",
      title: "ECEN 474",
      organization: "Texas A&M University",
      experience:
        "Cadience, ADEL, ADEXL, Spectre",
      description:
        "Using layout techniques to ensure optimal functionaliy requardless of outside factors such as heat, noise and position. ",
      photo: "layout.png",
      pdfLink: "./474_2.pdf",
    },
     {
      name: "Transconductor Amplifier",
      title: "ECEN 474",
      organization: "Texas A&M University",
      experience:
        "Cadience, ADEL, ADEXL, Spectre",
      description:
        "Amplifiyng the transconductance of a incoming signal or supply. ",
      photo: "transamp.png",
      pdfLink: "./474_8.pdf",
    },

     {
      name: "Simple Logic design",
      title: "ECEN 454",
      organization: "Texas A&M University",
      experience:
        "CMOS, Spectre, Cadience",
      description:
        "Creating Inverter, NAND and XOR gate, the 3 fundamental gates for all logic. The design goes deeper to its physical layout and logic testing with Spectre.  ",
      photo: "logic.png",
      pdfLink: "./Lab 2.pdf",
    },

    {
      name: "CMOS Carry Look-ahead adder",
      title: "ECEN 454",
      organization: "Texas A&M University",
      experience:
        "CMOS, Spectre, Cadience",
      description:
        "Full Development of a carry lookahead adder, with logic, timing, and power analysis of circuit to test optimization.",
      photo: "clha.png",
      pdfLink: "./Lab 5.pdf",
    },


  ];

  return (
    <div>
      <Header />

      <main style={{ maxWidth: "900px", margin: "auto", padding: "2rem" }}>
        <h1>Projects</h1>
        <h2 style={{color : "#d15b5bff"}}> Personal Projects</h2>

        {personal.map((rec, i) => (
          <Rec
            key={i}
            name={rec.name}
            title={rec.title}
            organization={rec.organization}
            experience={rec.experience}
            description={rec.description}
            photo={rec.photo}
            pdfLink={rec.pdfLink}
            routeLink={ rec.routeLink}
          />
        ))}

        <h2 style={{color : "#d15b5bff"}}> School Projects </h2>

        {school.map((rec, i) => (
          <Rec
            key={i}
            name={rec.name}
            title={rec.title}
            organization={rec.organization}
            experience={rec.experience}
            description={rec.description}
            photo={rec.photo}
            pdfLink={rec.pdfLink}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}
