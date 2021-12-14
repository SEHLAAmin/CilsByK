import React, { useState } from "react";
import "./Home.css";
import MenuAppBar from "./MenuAppBar";
import banvideo from "./banvideo.mp4";
import imgmidleleft from "./imglashmidleleft.jpg";
import imgmidleleft2 from "./encoreuneimage.jpg";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArrowDrop from "./ArrowDrop";
import SliderHome from "./SliderHome";
import CarousalComponent from "./CarousalComponent";
import Footer from "./Footer";
import giftcard from './giftcard.jpg'
import Button from '@mui/material/Button';



function Home() {
  return (
    <div className="home">
      <MenuAppBar />
      <ArrowDrop
        className="iconarrow"
        Icon={ArrowDropDownCircleIcon}
        title="Swipe Up !"
      />
      <span className="blurdiv"> </span>{" "}
      <video loop autoplay="true" height="880vh" muted className="videoban">
        <source src={banvideo} type="video/mp4"></source>
      </video>
      <h1> Welcome to CilsbyKel </h1>
      <div className="midlecontainer">
        <div className="left_container">
          <div className="contenuagauche">
            <img className="imgmidleleft" src={imgmidleleft} alt="lashes" />
            <img className="imgmidleleft2" src={imgmidleleft2} alt="" />
          </div>
        </div>{" "}
        <div className="right_container">
          <div className="contnueadroite">
            <h2> CilsByKel </h2> <h3> Institut de beauté bio </h3>
            <span>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.Hic quod
              quisquam molestias libero aspernatur quidem exercitationem
              ducimus, culpa modi.Adipisci tenetur amet ex quae quas tempora
              repellat aperiam ? Possimus accusantium labore nemo.Quos vero
              delectus rerum nihil rem repellat totam, provident eaque soluta
              sequi itaque fuga sed voluptatem dolore natus adipisci doloremque
              at nostrum accusantium!{" "}
            </span>
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="midleBlack">
        <div className="midleblackLeft"></div>{" "}
        <div className="midcardcontainer">
        <h3 className="nosprestatitre"> Nos <br/> prestation </h3>
        <CarousalComponent className="carousalHome" />
        </div>{" "}
        <div className="midleblackRight"> </div>{" "}
      </div>

        <div className="sloganContainer"> <p className="paragraphe"> « Les cils battent les tambours du désir. » </p> </div>


      <div className="carteCadeau_container">
        <div className="leftCadeaucontainer"></div>
        <div className="rightCadeaucontainer"></div>
        <div className="midleCadeaucontainer">
            
            <div className="giftcardtext">
            <h3 className="titleCardgift" >Carte Cadeau</h3>
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolorem assumenda, modi cum nam rerum voluptate numquam in voluptatum perspiciatis nobis velit natus porro illo explicabo, quibusdam aliquid harum nulla!
                          </span>
                          <Button className="BtnMui" color="primary"> Offrir une carte </Button>
            </div>

          <img className='giftcardimg' 
                      src={giftcard} alt="gift card / carte cadeau" />


        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
