import { CardGiftcard, Image } from '@material-ui/icons'
import {Carousel} from '3d-react-carousal';

import React from 'react'

function CarousalComponent() {

        let handleClickMiss = () => {
            console.log('its him');
        }

    let slides = [

        <img onClick={handleClickMiss} width="450px" height="500px" className="currentIMG" src="" alt="fille qui travaille ici" />
        ,
        <img width="450px" height="500px" className="currentIMG" src="" alt="fille qui travaille ici" />
        ,
        <img width="450px" height="500px" className="currentIMG" src="" alt="fille qui travaille ici" /> ,
        
    ]


    return (
        <div>

        <Carousel slides = {slides} />
 
        </div>
    )
}

export default CarousalComponent
