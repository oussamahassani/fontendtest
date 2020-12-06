import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";


const AboutMagasin = () => {


  return (
    <Stor>
      <div className="stores__information-container">
        <h2>Notre Magasin</h2>
        <div className="stores__information">
        <img src="images/magasin.png" alt="stores banner"  className="stores__banner-logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            molestiae consequuntur eveniet vel necessitatibus recusandae quae
            porro perferendis ut sapiente harum.
          </p>
          <div className="more">
            <label htmlFor="more" className="more__label">
              en savoir plus
            </label>
          
              <ArrowForwardIcon style={{color : " #7daf3f" , cursor: "pointer"}} />
           
          </div>
        </div>
      </div>
      <div className="stores__banner">
        <div className="stores__banner-container">
          <img
            src="images/magasain.png"
            alt="stores banner"
            className="stores__banner-img"
          />
           <img src="images/Eblac.png" alt="stores banner"  className="stores__banner-logo" />
          
        
        </div>
      </div>
    </Stor>
  );
};

// Styled component import

// Types

export const Stor = styled.section`
  width: 100%;
  height: fit-content;
  position: relative;
  max-width: 1280px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 30px auto 0 auto;
  padding: 50px 0;
  * {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  :hover img.stores__banner-img {
    transform: scale(1.1);
  }
  :hover .stores__banner-logo {
    transform: scale(1.1);
    opacity: 1 !important;
  }
  :hover .stores__information-container .stores__information img {
    height: 170px;
    width: 90%;
  }
  :hover .stores__information-container .stores__information .more {
    bottom: 40px;
    opacity: 1;
  }
  .stores__information-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    margin-top:25px;
    h2 {
      font-size: 33px;
      margin: 0 0 30px 0;
      white-space: nowrap;
      font-width:bold;
    }
    .stores__information {
      width: 650px;
      height: 350px;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: white;
      z-index: 99;
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
      p {
        margin: 20px 40px;
        font-size: 14px;
        line-height: 24px;
        color: #6F6C6C;
      }
      .more {
        width: calc(100% - 120px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0px;
        opacity: 0;
      }
      label.more__label {
        color:  #7daf3f;
        text-transform: uppercase;
        font-size: 18px;
        cursor: pointer;
      }
      button.more__btn {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        svg path:nth-child(2) {
          fill: black};
        }
      }
    }
  }
  .stores__banner {
    width: calc(100vw - 470px);
    height: 480px;
    position: absolute;
    top: 85px;
    right: 470px;
    
    overflow: hidden;
    .stores__banner-container {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
     .stores__banner-logo {
        position: absolute;
        z-index: 99;
        opacity: 0;
    
      }
      img.stores__banner-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default AboutMagasin;
