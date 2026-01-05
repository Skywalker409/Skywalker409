import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Seal from "../assets/seal.png"; // adjust path as needed
import "./RollingImage.css"; // we'll create this next

export default function RollingImage() {
  const location = useLocation();
  const [rolling, setRolling] = useState("in"); // "in" or "out"
  const [show, setShow] = useState(true);

  // Trigger roll out on route change
  useEffect(() => {
    // Start roll out
    setRolling("out");

    // Wait for animation duration, then "refresh" the roll-in
    const timeout = setTimeout(() => {
      setRolling("in");
      setShow(prev => !prev); // trigger re-render to restart animation if needed
    }, 500); // match animation duration in CSS (ms)

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className={`rolling-image ${rolling}`}>
      <img src={Seal} alt="Seal" />
    </div>
  );
}
