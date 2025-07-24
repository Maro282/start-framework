import React from "react";
import Form from "./../../Components/Contact/Form";
import Header from "./../../Components/Reusable/Header";
export default function Contact() {
  return (
    <div>
      <Header title="CONTACT COMPONENT" sentColor="var(--main-color)" />
      <Form />
    </div>
  );
}
