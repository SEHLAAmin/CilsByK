import React , {useState} from 'react'
import './MenuAppBar.css'
import HeaderOption from './HeaderOption'
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import {Link} from 'react-router-dom'


function MenuAppBar(props) {
//logo cils https://storage.googleapis.com/bsiflexyprod/cils-by-kel/images/logo/5029309630251008-preview.JPG
const [showLinks , setShowLinks] = useState(false)

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
    document.getElementById("myP").className = "listeshiny";
    document.getElementById("logo").className = "logov2";
  } else {
    document.getElementById("myP").className = "liste";
    document.getElementById("logo").className = "logo";
  }
}


const handleShowLinks =()=> {
    setShowLinks(!showLinks)
}
    return (
        <div>
            <nav className={`navbar ${showLinks ? "show-nav" : "hidden"}`}>
             <ul id="myP" className="liste" onScroll={myFunction}>
                <li className="   slideDown_1">                
                <img id="logo" className="logo" src="https://storage.googleapis.com/bsiflexyprod/cils-by-kel/images/logo/5029309630251008-preview.JPG" alt="logo" width="120px" height="80" />
                </li>
                <li className="deckstopnavbar"></li>
                <Link to="/"  className="items slideDown_2" >Home</Link>
                    <li className="items slideDown_3">Service
                        <ul className="navbar_sousliste">
                          <li className="items_navbar_sousliste" >Soins du visage</li>
                          <li className="items_navbar_sousliste" >extension cil</li>
                          <li className="items_navbar_sousliste" >épilation</li>
                        </ul>
                    </li>
                    <Link to="/contact" className="items  slideDown_4">Contact</Link>
                    <li className="items slideDown_5">About</li>
                    <HeaderOption className="rdvicon" Icon={AlarmAddIcon} title = 'Prendre Rendez Vous' />

                </ul>

                <button onClick={handleShowLinks} className="navbar_burguer">
                <span className="burguer_bar"></span>


            </button>

            </nav>
        </div>
    )
}

export default MenuAppBar;
