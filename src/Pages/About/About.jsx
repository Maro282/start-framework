import React from "react";
import Header from "./../../Components/Reusable/Header";
import "./About.css";

export default function About() {
  return (
    <div
      className="d-flex flex-column  row-gap-3 justify-content-center align-items-center py-5"
      style={{
        backgroundColor: "var(--about-background-color)",
      }}
    >
      <Header title="ABOUT COMPONENT" />
      <div className="paragraphs-box">
        <div>
          <p className="p-4 mb-0 text-white">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div>
          <p className="p-4 mb-0 text-white">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
