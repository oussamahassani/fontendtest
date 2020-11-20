import React from "react";
import {AccessTime} from "@material-ui/icons";
const Footer = () => {
  return (
    <>
       <div className="barrfooter"></div>
      <div className="footer">
        <img src="images/logo.png" alt="logo exterieur" className="footer_logo" />
        <div className="footer_links">
          <div className="footer_list link">
            <h3>Lien Utiles</h3>
            
              <p>Configurateur</p>
              <p> Notre magasin</p>
             <p> Notice et installation</p>
             <p>Livraison transport</p> 
            
          </div>
          <div className="listeFooter">
            <h3>Nous contacter</h3>
            <p>Adresse:</p>
            <p>
              3 rue du champ de verger
              <p> Allonnes, Pays de la Loire,</p>
              <p> France</p>
            </p>
            <p>Telephone:</p>
            <p>+33 2 43 57 00 87</p>
          </div>
          <div className="listeFooter">
            <h3>Horaires</h3>
            <p>Lundi à Vendredi</p>
            <p>
              <AccessTime />
              {" "}  7:30 - 12:00
            </p>
            <p>
              <AccessTime/>
              {" "} 13:30 - 18:00
            </p>
            <p style={{ marginBottom: 0 }}>Samedi</p>
            <p style={{ fontSize: "11px" }}>
              (Fermé les samedis de janvier et février)
            </p>
            <p>
              <AccessTime />
              {" "} 09:00 - 12:00
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
