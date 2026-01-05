import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ---------- Reusable Collapsible Section ---------- */
function SkillSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          background: " #4e2121ff",
          border: "none",
          fontSize: "1.2rem",
          fontWeight: "bold",
          cursor: "pointer",
          padding: "1rem 0",
        }}
      >
        {open ? "▼ " : "▶ "} {title}
      </button>

      {open && (
        <div style={{ paddingLeft: "1rem", paddingBottom: "1rem" }}>
          {children}
        </div>
      )}
    </div>
  );
}

/* ---------- Main Page ---------- */
export default function Home() {
  return (
    <div>
      <Header />

      <main style={{ maxWidth: "900px", margin: "auto", padding: "2rem" }}>
        <h2>About Me</h2>

        <h3>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </h3>

        <p>
          Howdy! I am a computer engineer from Texas A&M University with a broad
          technical background spanning digital hardware, analog circuits,
          signals and systems, and software engineering. My primary focus is on
          understanding computers from the electrical and physical level upward,
          and how those design decisions impact performance, reliability, and
          software behavior.
        </p>

        <h2>Skills</h2>

        {/* ================= FPGA / VERILOG ================= */}
        <SkillSection
          title="FPGA, Verilog & Computer Architecture"
          defaultOpen={false}
        >
          <p><strong>Hardware–Software Co-Design & Linux Integration</strong></p>
          <p>
            I have designed FPGA-based hardware accelerators and integrated them
            into Linux systems through custom device drivers. This included
            register-mapped I/O, user-space interfaces, and system-level
            debugging, demonstrating the ability to bridge low-level hardware
            with operating-system abstractions.
          </p>

          <p><strong>Custom CPU Architecture in Verilog</strong></p>
          <p>
            I designed a complete CPU from the ground up using Verilog, including
            the ALU, datapath, control logic, register file, and memory interface.
            The processor supported a functional instruction set and correct
            memory operation.
          </p>
          <p>
            Validation was performed using both C and assembly programs, along
            with extensive testbenches. This strengthened my understanding of
            pipelining, hazard detection, performance tradeoffs, and
            verification-driven hardware design.
          </p>

          <p><strong>Digital Logic Design & Verification</strong></p>
          <p>
            I have implemented complex digital systems ranging from arithmetic
            units to control-heavy logic and pipelined datapaths, with a strong
            emphasis on rigorous verification and edge-case testing.
          </p>
        </SkillSection>

        {/* ================= ANALOG / MIXED SIGNAL ================= */}
        <SkillSection title="Analog & Mixed-Signal Circuit Design">
          <p>
            I have designed and analyzed analog circuits from the transistor
            level upward, including single-stage and multi-stage amplifiers,
            differential pairs, current mirrors, active loads, and output stages.
          </p>

          <p>
            Designs emphasized gain, bandwidth, input/output impedance,
            linearity, and noise, accounting for real-world non-idealities.
            Small-signal models were used extensively to predict behavior and
            guide design decisions.
          </p>

          <p>
            Frequency response and stability were treated as first-class
            concerns, including dominant poles, compensation techniques, and
            phase and gain margins.
          </p>
        </SkillSection>

        {/* ================= VLSI ================= */}
        <SkillSection title="CMOS VLSI & Transistor-Level Design (Cadence)">
          <p>
            I have designed digital systems at the transistor and physical layout
            level using industry-standard Cadence tools. This included analysis
            of gate delays, wire delays, and parasitic effects that dominate
            performance in modern processes.
          </p>

          <p>
            Experience includes static CMOS, dynamic logic, and pass-transistor
            designs, evaluating tradeoffs between speed, power, robustness, and
            area.
          </p>

          <p>
            Additional work covered memory design fundamentals, parasitic
            capacitance modeling, transmission line effects, and clock
            distribution strategies such as H-tree networks and dynamic
            de-skewing.
          </p>
        </SkillSection>

        {/* ================= SIGNALS ================= */}
        <SkillSection title="Signals, Systems & Frequency-Domain Analysis">
          <p>
            I have a strong foundation in continuous-time and discrete-time
            signals and systems, including convolution, impulse responses, and
            system properties such as linearity, causality, stability, and time
            invariance.
          </p>

          <p>
            I routinely analyze systems using Fourier series, Fourier transforms,
            and Laplace transforms, including pole-zero analysis, filtering, and
            frequency response interpretation.
          </p>

          <p>
            Applications include sampling and reconstruction, aliasing analysis,
            modulation techniques, and frequency-domain filtering.
          </p>
        </SkillSection>

        {/* ================= CONTROL ================= */}
        <SkillSection title="Control Systems & Stability Analysis">
          <p>
            I have modeled physical systems using differential equations and
            transfer functions to predict dynamic behavior and assess stability.
          </p>

          <p>
            Control system design was performed using both time-domain and
            frequency-domain approaches, including root locus, Bode plots, and
            phase and gain margin analysis.
          </p>

          <p>
            I analyzed the impact of model mismatch between idealized systems and
            real-world behavior, quantifying how uncertainty affects stability
            and performance.
          </p>
        </SkillSection>

        {/* ================= ALGORITHMS ================= */}
        <SkillSection title="Algorithms & Computational Complexity">
          <p>
            I have applied core algorithmic techniques including divide and
            conquer, dynamic programming, greedy methods, graph algorithms, and
            randomized approaches.
          </p>

          <p>
            I am comfortable proving correctness, analyzing time and space
            complexity, and reasoning about NP-completeness and approximation
            algorithms.
          </p>
        </SkillSection>

        {/* ================= SOFTWARE ================= */}
        <SkillSection title="Software Engineering & System Development">
          <p>
            I have experience developing large-scale software systems in
            collaborative environments, emphasizing modular design, clear
            interfaces, documentation, and version control.
          </p>

          <p>
            This reinforced the importance of engineering discipline and
            communication when scaling from individual components to
            production-quality systems.
          </p>
        </SkillSection>
      </main>

      <Footer />
    </div>
  );
}
