import React, {useState} from "react";


import {FiberManualRecord,FiberManualRecordOutlined,ArrowBack,ArrowForward} from "@material-ui/icons";

const Realisations = () => {

  let [key, setkey] = useState(0);
  let imgs = [ "images/imageRealisation.png","images/imageRealisation1.jpg","images/imageRealisation1.jpg","images/image5block.png" ];
  const Nextimage = () => {
    
   if(key === imgs.length - 1)
    setkey(0)
    else
    setkey(key + 1);
    
  }

const Previous = () => {
  if( key ===0)
  setkey(imgs.length - 1)
  else
  setkey( key - 1);
 
}



  return (
    <div className="Container">
      <h3 className="Rtitle">Nos réalisations</h3>
      <div className="Rwrapper">
        <div
          className="Rcontent"
          style={{ backgroundImage: `url(${imgs[key]})` }}
        >
         
          <img src="images/Eblac.png" alt="E" className="elogo" />
        </div>
      </div>
      <div className="Card">
        <h1>Panneau bois</h1>
        <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
         At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasdundefined
        </p>
        <div className="Ccontrollers">
          <div >
            <ArrowBack
              style={{ color: "black"  ,   cursor: "pointer"}}
              onClick={() => Previous()}
            />
          </div>
          <div className=" _dots_container">
            {imgs.map((_, i) =>
              i == key ?(
                <FiberManualRecord
                  key={i}
                  style={{   color: "#7DAF3F",  fontSize: "12px" }}
                />
              ) : (
                <FiberManualRecordOutlined
                  style={{ color: "#B7B7B7", fontSize: "12px" }}
                />
              )
            )}
          </div>
          <div>
            <ArrowForward
              style={{ color: "black",cursor: "pointer" }}
              onClick={() => Nextimage()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realisations;
