import React from "react";
import "./Footer.css";
import GGMAP from "./GGMAP";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { TextField, Button } from '@mui/material'
function Footer() {
  return (
    <div className="footer">
<div className="barDecoFooter"></div>
      <div className="listesfooter_container">

          

        <ul className="listesfooter_items ">
          <h3 className="titre_liste_footer">CilsByKel</h3>
          <li className="listefooter_items_items">7 rue Charles Riviéres</li>
          <li className="listefooter_items_items">44400 Rezé</li>
          <li className="listefooter_items_items"> kiki.sehla@hotmail.fr</li>
          <div >
            {" "}
            <FacebookIcon className="iconeelement"/>
            <InstagramIcon className="iconeelement" />
          </div>

          <GGMAP />
        </ul>
        <div className="newsLetter"> <label  htmlFor="">
        Inscrivez-vous à notre newsletter et recevez nos offres en avant-première.
        <TextField
        style={{backgroundColor :'white', width : '100%' , marginTop: '1vh'}}

  id="demo-helper-text-aligned"
  label="E-mail"
/>      
<Button variant="text" >
  Go
</Button>
        </label>
        </div>
       
        

        <ul className="listesfooter_items">
          <h3 className="titre_liste_footer">About</h3>
          <li className="listefooter_items_items">presta</li>
          <li className="listefooter_items_items">nos valeur</li>
          <li className="listefooter_items_items"> nos produit </li>
        </ul>

        <ul className="listesfooter_items">
          <h3 className="titre_liste_footer">Contact</h3>
          <li className="listefooter_items_items">presta</li>
          <li className="listefooter_items_items">nos valeur</li>
          <li className="listefooter_items_items"> nos produit </li>
        </ul>
      </div>
      <div className="barDecoFooter2"></div>
    </div>
  );
}

export default Footer;
