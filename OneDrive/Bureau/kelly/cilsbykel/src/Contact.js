import React from "react";
import MenuAppBar from "./MenuAppBar";
import "./Contact.css"
import TemplateHeader from "./TemplateHeader";
import { styled } from "@material-ui/styles";
import { Button, Input, TextareaAutosize, TextField } from "@mui/material";
import Footer from "./Footer";
import svgDeco from './plantdeco1.svg'



const TemplatemodifyCompononent = styled(TemplateHeader)({
  backgroundColor: 'yellow' , 
  
});


function Contact(props) {
  return (
    <div>
      <MenuAppBar />
      <div className="contactBody">

          
        <div className="svgContainer">
        <img className="imgsvg" src={svgDeco} alt="" />
        <img className="imgsvg2" src={svgDeco} alt="" />
        </div>

        <TemplatemodifyCompononent direction="contact"/>

        <div className="contactContainer">
 <form className="formcontainer">

              <Input placeholder="Entrez votre nom" />
            <TextField type="email" placeholder="Email" />
            <TextField placeholder="Quel est le sujet ?" />

            <TextareaAutosize minRows="10" />
            <Button color="primary">Envoyer</Button>
          </form>

          <div className="horaire">
                <h5>Horaire :</h5>
                <ul>
                    <li>Lundi</li>
                    <li>Mardi</li>
                    <li>Mercreudi</li>
                    <li>Jeudi</li>
                    <li>Vendredi</li>
                    <li>Samedi</li>
                    <li>Dimanche</li>
                </ul>

                <ul>
                    <li>fermé</li>
                    <li>9h30 - 19h30</li>
                    <li>9h30 - 19h30</li>
                    <li>9h30 - 19h30</li>
                    <li>9h30 - 19h30</li>
                    <li>9h30 - 19h30</li>
                    <li>fermé</li>
                </ul>

          </div>

          </div>
          <Footer />
      </div>
    </div>
  );
}

export default Contact;
