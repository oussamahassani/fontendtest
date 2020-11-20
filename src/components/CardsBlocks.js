import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const CardsBlocks = () => {
  let row1images = ['images/image1block.png','images/image2block.png'] ; 
  let row2images =['images/image3block.png','images/image4block.jpg','images/image5block.png',]  ;
  return (
    <div className="card_list">
      <div className="row">
        <div className="col-12 col-md-4 first_bloc">
          <div className="notice_content">
            <div className="notice_header">
              <h1>
                Notice <br/>& Installation
              </h1>
              <p>
                Avant de commencer, calculez la quantité de bois, de béton et de
                quincaillerie dont vous aurez besoin.
              </p>
            </div>
            <div className="notice_footer">
              <p>EN SAVOIR PLUS</p>
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
        {row1images.map((el,index) => 
           <div className="col-12 col-md-4 card_wrapper">
           <div className="Block">
             <img src={el} alt={el +index} />
             <div className="card_Block">
               <img src="images/Eblac.png" alt="exterieur logo" className="card_arrow" />
          
           
             </div>
           </div>
         </div>
          ) }
       
      </div>
      <div className="row mt-4">
      {row2images.map((el,index) => 
           <div className="col-12 col-md-4 card_wrapper">
           <div className="Block">
             <img src={el} alt={el +index} />
             <div className="card_Block">
               <img src="images/Eblac.png" alt="exterieur logo" className="card_arrow" />
          
           
             </div>
           </div>
         </div>
          ) }
        
      </div>
    </div>
  );
};

export default CardsBlocks;

