import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {SliderData} from './SliderData'
import './SliderHome.css'

export default function SliderHome({slides} ) {

    const [current , setCurrent] = useState(0);

    
    const nextSlide = () => {
      setCurrent( current === length -1 ? 0 : current + 1)
    }
    console.log(current)
    const prevSlide = ()=> {
        setCurrent( current === 0? length -1 : current - 1)
    }

    const IMGSlider = SliderData.map((slide, index) => {
        return ( 
            <section className="slider" >
            <section className = {index === current ? 'slide active' : 'slide'} >
         {current ===  slide.id ?  ' ' : <img width="150px" height="150px" className="imagearriere" src={slide.image} key={current - 1} alt="" /> }    
         { index === current && (
                <>
              
                <div>
                <div className="currentIMGcontainer">
                <img width="600px" height="600px" key={index} className="currentIMG"  src={slide.image} alt="fille qui travaille ici" />
                </div>
            </div>
            </>
            )}
           
            </section>
            </section>
            )
    })


    const length = IMGSlider.length
  

    return (
        <div className = "sliderHome">
             <ArrowBackIosNewIcon className="arrowLeft"  onClick = {prevSlide} />
            <ArrowForwardIosIcon className="arrowRigth" onClick={nextSlide} />
            {IMGSlider}    
        </div>
    )
}
