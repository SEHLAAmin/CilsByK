import React from "react";
import MenuAppBar from "./MenuAppBar";
import "./Contact.css"
import TemplateHeader from "./TemplateHeader";

function Contact(props) {
  return (
    <div>
      <MenuAppBar />
      <div className="contactBody">
      ha
        <TemplateHeader color="red" backgroundColor={"yellow"} />
      </div>
    </div>
  );
}

export default Contact;
