import React from "react";
import styled from "styled-components";

const PhotoHader = () => {
 
 

  return (
    <Hader
      style={{ backgroundImage: `url("images/Navphoto.png")` }}
    >
     
   
    </Hader>
  );
};
export const Hader = styled.div`
  {
  height: 69vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: -webkit-box;
  display: -ms-flexbox;

}`;
export default PhotoHader;
