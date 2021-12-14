import React from 'react'
import Footer from './Footer'
import MenuAppBar from './MenuAppBar'
import TemplateHeader from './TemplateHeader'
import svgDeco from './plantdeco1.svg'
import './About.css'
import svgComponentDeco1 from './svgComponentDeco1'
import { Input, TextareaAutosize, TextField } from '@mui/material'
import imgrandom from './encoreuneimage.jpg'
import imgrandom2 from './lashoclock.jpg'
import { style } from '@mui/system'




function About() {
    return (
        <div>
        <MenuAppBar />

        <div className="svgContainer"><img className="imgsvg" src={svgDeco} alt="" />
        <img className="imgsvg2" src={svgDeco} alt="" />
        </div>
        

          <TemplateHeader direction = "About" />  

        <div className="mainContent">
            <div className="piccontent">
            
                <img className="imgrandom1" src={imgrandom2} alt="" />
                <img className="imgrandom2" src={imgrandom} alt="" />
            </div>
            <div className="textcontainer">
                <h5>L'institut</h5>    
                 <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, obcaecati cupiditate voluptas aliquid quis porro sit? Incidunt veniam quisquam eum aliquam suscipit necessitatibus, quibusdam, voluptatem molestiae, a commodi corporis atque?
                    Alias numquam quod cum exercitationem! Non soluta cupiditate quaerat aliquid saepe! Commodi sit vel illum. Laudantium culpa officia ut aut, maxime nostrum id recusandae quia dolorem voluptatibus, reprehenderit voluptates quae.
                    Natus voluptatum reprehenderit fuga praesentium beatae a voluptatem animi soluta, at earum, molestiae quae, voluptates veniam itaque explicabo harum ipsa iusto ducimus doloremque. Laudantium delectus maiores non. Inventore, similique dolorem.
                   
                </span>
            </div>
        </div>

         
         
            
            
          
          <Footer /> 
       </div>
    )
}

export default About
