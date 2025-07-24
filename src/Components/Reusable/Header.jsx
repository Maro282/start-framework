import React from "react";
import "./Header.css";

export default function Header({ title, sentColor }) {
  return (
    <>
      <section className="header p-3 text-center">
        <h2
          className="mb-3"
          style={{
            color: sentColor ? sentColor : "white",
          }}
        >
          {title}
        </h2>
        <div className="items-collectin d-flex justify-content-center align-items-center column-gap-3">
          <div
            className="line"
            style={{
              backgroundColor: sentColor ? sentColor : "white",
            }}
          ></div>
          <i
            class="fa-solid fa-star"
            style={{
              color: sentColor ? sentColor : "white",
            }}
          ></i>
          <div
            className="line"
            style={{
              backgroundColor: sentColor ? sentColor : "white",
            }}
          ></div>
        </div>
      </section>
    </>
  );
}
