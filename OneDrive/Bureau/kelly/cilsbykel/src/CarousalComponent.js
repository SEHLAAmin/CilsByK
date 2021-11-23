import { CardGiftcard, Image } from '@material-ui/icons'
import {Carousel} from '3d-react-carousal';

import React from 'react'

function CarousalComponent() {

        let handleClickMiss = () => {
            console.log('its him');
        }

    let slides = [

        <img onClick={handleClickMiss} width="450px" height="500px" className="currentIMG" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt="fille qui travaille ici" />
        ,
        <img width="450px" height="500px" className="currentIMG" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt="fille qui travaille ici" />
        ,
        <img width="450px" height="500px" className="currentIMG" src={CardGiftcard} alt="fille qui travaille ici" />

        ,
        <img width="450px" height="500px" className="currentIMG" src="https://images.unsplash.com/file-1636128086982-593199147d51image" alt="fille qui travaille ici" />

    ]


    return (
        <div>

        <Carousel slides = {slides} />
 
        </div>
    )
}

export default CarousalComponent
