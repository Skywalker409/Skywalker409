import React from "react";
import seal from "../assets/seal.png";
import Header from "../components/Header";
import Rec from "../components/Rec";

export default function LR() {
  return (

    <div>
      <Header />
      <Rec 
        name="Bart Szymanowski "
        title="PhD Student in Electrical Engineering"
        organization="Texas A&M University"
        experience="Graduate Teaching Assistant"
        description="Mr. Szymanowski supervised my senior capstone project and directly observed my leadership, technical decision-making, and ability to manage a multidisciplinary engineering team."
        photo={seal}
        pdfLink = "./Bart_Letter_of_Rec.pdf"
        />
      


    </div>
    


    
    
  );
}
