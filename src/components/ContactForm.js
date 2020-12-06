import React from "react";

const ContactForm = () => {
  return (

    <div className="contact_form">
      <div className="form_header">
        <p>Coordonnées & Map</p>
      </div>
      <div className="form_body">
        <p className="form_text">
          Hey! Pour toute informations ou suggestions, Merci de remplir le
          formulaire suivant
        </p>
        <div className="form_inputs" >
          <input
            placeholder="Nom & Prénom" type="text"   
          />
          <input
            placeholder="E-mail" type="text"   
          />
          
          
          <input
            placeholder="N° Téléphone" type="text"   
          />
          <div className="textarea_container">
            <label>Message</label>
            <textarea  ></textarea>
          </div>
        </div>
        <button className="envoyez_btn">ENVOYEZ</button>
      </div>
    </div>
 
  );
};



export default ContactForm;
