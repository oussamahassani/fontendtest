import React from 'react';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";



export default function AboutMagasin() {
  return (
      <div className="card_list  activemagasin">
        <div className="flex">
          <div className="imagemagazin"  style={{background:'url("images/magasain.png")'}} >
          <img src="images/Eblac.png"  alt="exterieur logo" class="Eblac" />
          </div>
      <div  className="groupemagasin" >
             <h4>Notre magasin</h4>
    <div className="okok">
  
    </div>
    <p>Dolores et ea rebum. Stet clita kasd gubergren, 
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
     <div class="hide d-flex justify-content-between">
       <p style={{color : " #7daf3f"}}>EN SAVOIR PLUS</p>
     <ArrowForwardIcon style={{color : " #7daf3f"}}/>
       </div> 
    </div>
    </div>
    </div>
  );
}


