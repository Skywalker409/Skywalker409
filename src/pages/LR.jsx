import React from "react";
import seal from "../assets/seal.png";
import Header from "../components/Header";
import Rec from "../components/Rec";

export default function LR() {
  return (

    <div>

      
      <Header />
      <Rec 
        name=" Juan I. Martinez"
        title="HP Senior Manager"
        organization="HP"
        experience="Electrical/Hardware Engineering Advanced Compute Solutions Global Business Unit"
        description=" "
        photo={"hp.png"}
        pdfLink = "./HP_Endorsement.pdf"
        />


      <Rec 
        name="Bart Szymanowski "
        title="PhD Student in Electrical Engineering"
        organization="Texas A&M University"
        experience="Graduate Teaching Assistant"
        description="Mr. Szymanowski supervised my senior capstone project and directly observed my leadership, technical decision-making, and ability to manage a multidisciplinary engineering team."
        photo={seal}
        pdfLink = "./Bart_Letter_of_Rec.pdf"
        />
        <Rec 
        name="Malcolm Ford "
        title="IT Supervisor Harrington Media Center"
        organization="Texas A&M University"
        experience="10 years of IT managment."
        description="Mr. Ford was my employer from August 2023 - July 2025 for my on campus IT job. He has first hand experience with my
        people skills, workplace professionalism and personality. "
        photo={"MFord.png"}
        pdfLink = "./MalcolmLOR.pdf"
        />
      


    </div>
    


    
    
  );
}
