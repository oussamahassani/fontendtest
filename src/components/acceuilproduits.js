import React from "react";


const AccProducts = () => {
  const imgproduit = [
    {
      name: (
        <h5 className="title">
          Lame <br /> composite
        </h5>
      ),
      img:"images/lamecomposite.png"
      },
 
    {
      name: (
        <h5 className="title">
          Panneau <br /> bois
        </h5>
      ),
      img: "images/panneau bois.png",
      
    },
    {
      name: (
        <h5 className="title">
          Lame <br /> en bois
        </h5>
      ),
      img: 'images/lame bois.png',
      
    },
    {
      name: (
        <h5 className="title">
          Grille <br /> rigide
        </h5>
      ),
      img: 'images/grillerigide.png',
    
    },
    {
      name:(<h4 className="title"> Gabion </h4>) ,
      img: 'images/gabion.png',
     
    },
  ];
  return (
    <div className="container">
      <div className="row justify-content-between ">
        {imgproduit.map((el, i) => (
              <div className="active wrapper col-md-2  col-sm-6" >
              <div className="box">
                <img src={el.img} alt={el.name} className="img-fluid" />
                <div className="box-content">
                  <div className="inner-content">
                    { el.name}
                  </div>
                </div>
              </div>      
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default AccProducts;
