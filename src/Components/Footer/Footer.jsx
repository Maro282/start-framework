import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="">
      <div className="upper-part p-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4  p-4">
              <h2 className="text-center text-white">LOCATION</h2>
              <p className="mb-0 text-center text-white">
                2215 John Daniel Drive
              </p>
              <p className="mb-0 text-center text-white">Clark, MO 65243</p>
            </div>

            <div className="col-lg-4  d-flex flex-column row-gap-3 p-4">
              <h2 className="text-center text-white">AROUND THE WEB</h2>
              <div className="social-media-icons d-flex justify-content-center align-items-center column-gap-4">
                <div className="icon">
                  <a
                    href="https://www.facebook.com/marawanelnams/about"
                    target="_blank"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </div>
                <div className="icon">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="icon">
                  <a
                    href="https://www.linkedin.com/in/marwan-abd-elhamid-hassan-020752243/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="icon">
                  <i class="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 p-4">
              <h2 className="text-center text-white">ABOUT FREELANCER</h2>
              <p className="mb-0 text-center text-white">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-part ">
        <p className="text-center bg-dark py-4 text-white mb-0">
          Copyright © My Website 2025
        </p>
      </div>
    </div>
  );
}
