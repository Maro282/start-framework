import React, { useState } from "react";
import "./Card.css";

export default function Card({ path }) {
  const [show, setShow] = useState("d-none");

  return (
    <>
      <div className="col-md-6 col-lg-4 p-3">
        <div className="img-box rounded-2">
          <img src={path} alt="this is an image" className="w-100 rounded-2" />
          <div
            className="img-box-layout rounded-2"
            onClick={() => {
              {
                setShow("d-flex");
              }
            }}
          >
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>

        <div className={`${show} slide-show-style `}>
          <i
            className="fa-solid fa-close close-btn"
            onClick={() => {
              setShow("d-none");
            }}
          ></i>
          <img src={path} className="w-50 rounded-2 bg-danger" />
        </div>
      </div>
    </>
  );
}
