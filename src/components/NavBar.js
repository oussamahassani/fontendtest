import React, { useRef, useState } from "react";
import ContactForm from "./ContactForm";
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {

    return (
      <>
      <div className="top_hader">
        </div>
      <div className="main_navbar">
        <div className="logo">
          <img src="images/Logo.png" alt="logo"  />
        </div>

        <div className="search">
        <SearchIcon       className="rigthicon1"/>
        
          <input
            type="text"
            className="search_input"
            placeholder="Rechercher"
          />
        <SearchIcon   className="search-icon left-icon2" />
        </div>
        <div className="localisation" >
          <img src="images/markicon.png"  className="mark_location1"   alt="markicon"  />
          <p  style={{  transition: "all 0.35s ease-in-out",  }} >  Notre magazin </p>
          <img  src="images/markicon.png" className="mark_location2"  alt="mark location"   />
        </div>
        <Link to='/' className="text-body  border"> <p className="accueil"> Accueil</p> </Link>
        <div className="boutique">
        
          <p className="boutique_title">Boutique</p>
          <div className="submenu_list">

          <Link to='/Product' className="text-white"> <p className="submenu_item">Lame composite</p></Link>
            <Link to='/Product' className="text-white">  <p className="submenu_item">Lame en bois</p></Link>
            <Link to='/Product' className="text-white"> <p className="submenu_item active_item">Panneau bois</p></Link>
            <Link to='/Product' className="text-white"><p className="submenu_item">Grille rigide</p></Link>
            <Link to='/Product' className="text-white"> <p className="submenu_item">Gabion</p></Link>
            <Link to='/Product' ><button className="envoyez_btn boutique_btn">Boutique</button></Link>
          </div>
          
        </div>
        <Link to='/' className="text-body border" > <p className="rea">Nos réalisations</p> </Link>
        <div className="contact m-0">
          <p className="contact_title">Contactez-nous</p>
          <ContactForm />
        </div>
        <div className="configurateur">
          <img src="images/first.png" className="haderimage1 " alt="configuration" width="80px" />
          <p className="m-0">configurateur</p>
          <img src="images/first.png" className="image2" alt="configuration" width="80px" />
        </div>
      </div>
      </>
    );
  
 
};


export default NavBar;
