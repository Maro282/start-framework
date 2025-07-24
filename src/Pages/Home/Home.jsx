import React from "react";
import Header from "../../Components/Reusable/Header";
import avatar from "./../../assets/images/imgi_1_avataaars.svg";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "var(--about-background-color)",
      }}
    >
      <div className="avatar-box text-center">
        <img
          src={avatar}
          alt="avatar pic"
          style={{
            width: "20%",
          }}
        />
      </div>
      <Header title="START FRAMEWORK" />
      <p className="text-center p-3 mb-0 text-white">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}
