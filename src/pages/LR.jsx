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

        <Rec 
        name="Robledo, Marcelino"
        title="IT Manager"
        organization="Texas A&M University"
        experience="5+ years experience in IT work"
        description="Mr. Robledo was my supervisor when I worked for IT at my university. He has first hand work expereince on my reliability and 
        versitility to IT work. "
        photo={seal}
        pdfLink = "./MarcRec.pdf"
        />

        <Rec 
        name="Mark Garner "
        title="IT Specialist"
        organization="Texas A&M University"
        experience="+10 Years IT work"
        description="Mr. Garner is a overseeing IT worker at Texas A&M, he helps manage multiple IT departments and I have been able to work with him on a number of projects and tasks. "
        photo={seal}
        pdfLink = "./MGRec.pdf"
        />
      


    </div>
    


    
    
  );
}
