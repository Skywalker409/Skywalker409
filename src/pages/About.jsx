import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function About() {
  return (
    <div>
      <Header />
      <main style={{ maxWidth: "900px", margin: "auto", padding: "2rem" }}>
        <h2>About Me</h2>
        <h3> 
          <a href = "/resume.pdf"  target="_blank" rel="noopener noreferrer" > Resume 
          </a>
        
        </h3>
        <p>
          Howdy! I am a computer engineer from Texas A&M University. I have a 
          very wide range skill set, ranging from website development, to transistor level logic design. 
          Although my skill set is vast, I majorly study the electircal engineering properties of computers
          and their impacts on software performance. 

          
          
        </p>

        <h3>FPGA/Verilog Skills</h3>
        <p>
         Drivers </p>
         
        <p>
          In ECEN 449, I developed a FPGA board where I created a multiplier device in the 
         FPGA board, then created a driver to use the multiplier board in a linux enviroment also emplanted. 
         A very simple desing but proves that I can create drivers for any system with this knowledge. Honestly the
         driver was really fun, and I plan on doing projects that require it in the future. 

        </p>
        <p>
          Full CPU
        </p>
        <p>
          In ECEN 350, I created a full fledged CPU desing in verilog. Every component, from the 
          ALU to the memory managment. I then coded in C code AND assembly to make it work. 
          I had to further develop my own test cases to ensure the full operation of the processor. This processor was
          capable of running any of the basic assembly commands and manage memory properly. Although I 
          do think the best thing learned was how to develop test code to ensure that it worked properly. 


        </p>
       
      </main>
      <Footer />
    </div>
  );
}
