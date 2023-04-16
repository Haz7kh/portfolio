import React from "react";
import "./Landing.css";
import { Typewritter, AnimatedBg } from "../components";

let msgArray = [
  " ",
  " An app developer (Android, IOS)",
  "Also known as an",
  " Front-end developer",
  "Back-end developer",
  "UX/UI designer",
  " WordPress Web-Designer",
  " ",
];

const Landing = () => {
  return (
    <div>
      <AnimatedBg>
        <div className="landing-type">
          <div>What Am I?</div>
          <Typewritter data={msgArray} />
        </div>
      </AnimatedBg>
    </div>
  );
};

export default Landing;
