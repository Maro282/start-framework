import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="container form-container mb-5">
      <div className="input-filed  py-3">
        <input
          id="userName"
          type="text"
          className="form-control"
          placeholder="userName . . ."
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label htmlFor="userName" className="user-label">
          userName
        </label>
      </div>

      <div className="input-filed  py-3">
        <input
          id="userAge"
          type="text"
          className="form-control"
          placeholder="userAge . . ."
          value={userAge}
          onChange={(e) => {
            setUserAge(e.target.value);
          }}
        />
        <label htmlFor="userAge" className="user-label">
          userAge
        </label>
      </div>

      <div className="input-filed  py-3">
        <input
          id="userEmail"
          type="text"
          className="form-control"
          placeholder="userEmail . . ."
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <label htmlFor="userEmail" className="user-label">
          userEmail
        </label>
      </div>

      <div className="input-filed   py-3">
        <input
          id="userPassword"
          type="text"
          className="form-control"
          placeholder="userPassword . . ."
          value={userPassword}
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <label htmlFor="userPassword" className="user-label">
          userPassword
        </label>
      </div>

      <button className="btn ">Send Message</button>
    </div>
  );
}
