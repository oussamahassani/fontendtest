import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";


const AcceuilBanner = () => {
  return (
    <div className="banner" style={{ marginTop: "20px" }}>
     
        <img src="images/Evert.png" alt="EblacVert"  id="B_imageevert" style={{ position: "absolute",left: "-10px",transform: 'rotate(-20deg)' , width:"10%"}} />
        <img src="images/Emaron.png" alt="EblacEmaron"  id="B_imagemaron" style={{ position: "absolute",left: "-10px",transform: 'rotate(-20deg)', width:"10%"}} />
      <div className="green_bg"></div>
      <div className="brown_bg"></div>
      <div className="banner_inner_content">
        <img src="images/logo2_.png" alt="toolbox" width="50px" />
        <div className="banner_main_content">
          <h1>Configurez votre espace</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidu.
          </p>
        </div>
        <ArrowForwardIcon className="rightArrow" />
      </div>
    </div>
  );
};

export default AcceuilBanner;
