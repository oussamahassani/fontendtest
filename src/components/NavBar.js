import React, { useRef, useState } from "react";
import ContactForm from "./ContactForm";
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";
const NavBar = () => {

    return (
      <>
      <div className="top_hader">
        </div>
        <Navbar>
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
            <Link to='/Product' className="text-white active_item"> <p className="submenu_item ">Panneau bois</p></Link>
            <Link to='/Product' className="text-white"><p className="submenu_item">Grille rigide</p></Link>
            <Link to='/Product' className="text-white"> <p className="submenu_item">Gabion</p></Link>
            <Link to='/Product' ><button className="envoyez_btn boutique_btn">Boutique</button></Link>
          </div>
          
        </div>
        <div className="rea border">   <Link to='/' className="text-body " >  <p>Nos réalisations</p> </Link> </div>
        <div className="contact m-0">
          <p className="contact_title">Contactez-nous</p>
          <ContactForm />
        </div>
        <div className="configurateur" >
          <div className="spaceevenly">
          <img src="images/logo2_.png" className="haderimage1 " alt="configuration" width="30px" />
          <p className="m-0">configurateur</p>
          <img src="images/logo2_.png" className="image2" alt="configuration" width="30px" />
          </div>
        </div>
      </div>
      </Navbar>
      </>
    );
  
 
};

export const Navbar = styled.section`
.main_navbar {
  display: grid;
  grid-template-rows: 1.4fr 1.1fr;
  grid-template-areas:
    "logo logo search search magazin configurateur configurateur"
    "accueil boutique boutique rea rea contact  contact";
  background-color: white;
  text-align: center;
  grid-template-columns: 240px 150px 170px 160px 200px 150px 150px ;
  margin: 0 auto;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 8%;
}
@media(max-width: 650px)
{ .main_navbar .logo ,.main_navbar .localisation ,.main_navbar .configurateur{
display: none;
}
.main_navbar .search{
  display: none;
}
.main_navbar .accueil{
 margin-top:30px;
}
.main_navbar .rea{
  margin-top:30px;
 }
.main_navbar .boutique  ,.main_navbar .contact{
width: 35%;
}
  .main_navbar {
    display: flex;
    width: 100%;
 right: 0px;
  color: #4d302b;
  }

}
.main_navbar > div,
.main_navbar > p {
  border-bottom: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  vertical-align: middle;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 16px;
}

.logo {
  margin-left:-250px;
  grid-area: logo;
  z-index: 1000;
  background: white;
}

.search {
  grid-area: search;
  position: relative;
  overflow: hidden;
  z-index: 1000;
  background: white;
}
input[type="text"] {
  font-size: 16px;
}
.localisation {
  grid-area: magazin;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 1000;
  background: white;
  cursor: pointer;
}
.localisation > p {
  color: #4d302b;
  font-size: 14px;
  margin: 0;
}
.mark_location2 {
  opacity: 0;
  transition: all 0.6s ease-in-out;
  transform: translateX(50px);
}
.mark_location1 {
  transition: all 0.6s ease-in-out;
  transform: translateX(-12px);
}
.localisation:hover p {
  -webkit-transform: translateX(-10px);
  transform: translateX(-10px);
}
.localisation:hover  .mark_location2{
  opacity: 1;
  -webkit-transform: translateX(5px);
transform: translateX(5px);
}
.localisation:hover  .mark_location1{
  opacity: 0;
} 
.accueil {
  grid-area: accueil;
  


}
.main_navbar .border:hover {
  background-color:#7daf3f;
 

}
.main_navbar .border:hover p {
 color:white;
 

}




.main_navbar .border {
  border-left: 1px solid #e2e2e2;  cursor: pointer;
  border-right: 1px solid #e2e2e2;
  padding-top: 10px;
}
.boutique {
  grid-area: boutique;
  background: white;
  z-index: 999;
  position: relative;
}
.rea {
  grid-area: rea;
  cursor: pointer;
}
.contact {
  grid-area: contact;
  background: white;
  z-index: 999;
  position: relative;
}
.contact_title,
.boutique_title {
  margin: 0px;
  z-index: 999;
  background: white;
  width: 100%;
  height: 101%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0;
}
.configurateur {
  z-index: 1000;
  grid-area: configurateur;
  text-transform: uppercase;
  background-color: #7daf3f;
  color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  font-weight: 500;
  border-bottom: 0px solid #e2e2e2 !important;
  border-right: 0px solid #e2e2e2 !important;
  cursor: pointer;

 
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.configurateur > p {
  font-size: 12px;
  font-weight: bold;
  -webkit-transition: all 1.2s ease-out;
-moz-transition: all 1.2s ease-out;
-ms-transition: all 1.2s ease-out;
-o-transition: all 1.2s ease-out;
transition: all 1.2s ease-out;
}
.configurateur:hover .haderimage1 {
  transition: all 0.8s ease-in-out;
  -webkit-transform: translateX(-5px);
  transform: translateX(-5px);
display: none;
}
.configurateur:hover .image2{
   -webkit-transform: translateX(-5px);
  transform: translateX(-5px); 
  transition: all 0.8s ease-in-out;
display: block; 
}
.image2{
  transition: all 0.8s ease-in-out;
  display: none;
}
.configurateur:hover p {
  -webkit-transform: translateX(-5px);
  transform: translateX(-5px);
}
.configurateur:hover {
  background-color: #4d302b;
}

.search_input {
  width: 100%;
  outline-style: none;
  border: 0px; /* Safari/Chrome, other WebKit */ /* Firefox, other Gecko */
  box-sizing: border-box;
  margin-left: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  -webkit-transition: -webkit-transform 0.6s ease-in-out;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.search-icon {
  margin-left: 20px;
  -webkit-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
}
.left-icon {
  -webkit-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
  position: relative;
  left: 5%;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  margin-right: 20px;
}
.search_input:hover + .left-icon,
.search_input:focus + .left-icon {
  left: 0;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

.search_input::-webkit-input-placeholder {
  color: #b7b7b7;
  font-size: 16px;
}

.search_input::-moz-placeholder {
  color: #b7b7b7;
  font-size: 16px;
}

.search_input:-ms-input-placeholder {
  color: #b7b7b7;
  font-size: 16px;
}

.search_input::placeholder {
  color: #b7b7b7;
  font-size: 16px;
}
.search_input:hover .left-icon {
  right: 0px;
}
.haderimage1 {
  -webkit-transition: all 1.2s ease-in-out;
  -moz-transition: all 1.2s ease-in-out;
  -ms-transition: all 1.2s ease-in-out;
  -o-transition: all 1.2s ease-in-out;
  transition: all 1.2s ease-in-out;
  
}

`;
export default NavBar;
