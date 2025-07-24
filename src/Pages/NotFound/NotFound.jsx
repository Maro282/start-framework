import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "./../../assets/images/404_page-not-found.png";

export default function NotFound() {
  return (
    <>
      <div className="not-found-img-box d-flex flex-column align-items-center  justify-content-center">
        <img src={notFoundImg} alt="not found img" className="w-50" />
        <Link to={"/"} className="btn btn-outline-dark w-25">
          Go Home .. ?
        </Link>
      </div>
    </>
  );
}
