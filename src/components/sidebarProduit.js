import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styled from "styled-components";

export default function SidebarProduit() {


    return (
        <SidebarProd>
                <nav className="nav-sidebar" style={{ border:"1px solid black" , marginBottom : "1rem"}}>
		<ul className="nav tabs">
    <h3 className="font-weight-bold">CATÉGORIES <hr/></h3>   
          <li className="active pading  flexbetween"><a href="/Product">Lame Bois</a> <em> <ArrowForwardIosIcon/> </em> </li><hr className='marginnull'/>
          <li className="textgray flexbetween"><a href="/Product">Grille Rigide</a> <ArrowForwardIosIcon/> </li>
          <li className="textgray flexbetween"><a href="/Product">Grille Rigide</a> <ArrowForwardIosIcon/> </li> 
          <li className="textgray flexbetween"><a href="/Product">Lame Composite</a> <em> <ArrowForwardIosIcon/> </em></li>
          <li className="textgray flexbetween"><a href="/Product">Panneau Bois</a>  <em> <ArrowForwardIosIcon/> </em></li>    
          <li className="textgray flexbetween"><a href="/Product">Grille Rigide</a> <ArrowForwardIosIcon/> </li> 
          <li className="textgray flexbetween"><a href="/Product">Gabion</a><ArrowForwardIosIcon/></li>                           
		</ul>
	</nav>
        </SidebarProd>
    )
}

const SidebarProd = styled.div `
 .pading{
    padding: 10px 5px;
    border-bottom: 2px solid #7c7b7b21;
 }
  .nav-sidebar{
      background-color: white;
      color: white;
    
  }
  .nav-sidebar a , .nav-sidebar h3  {
      padding-left: 15px;
      color: black
  
  }
  .nav-sidebar .active , .nav-sidebar .textgray:hover   {
      background-color:  #7daf3f;
    
  }
  .textgray:hover a {
      color: white;
  }
     
  .active a {
      color: white;
  
  }
  
  .textgray a {
      color: gray;
    
  
  }
  .textgray{
    padding: 0 5px;
    border-bottom: 2px solid #7c7b7b21;
  }
  .nav-sidebar .flexbetween {
  display: flex;
  justify-content: space-between;
  }
  .nav-sidebar .textgray {
  
      padding: 10px 0px;
  }
  .marginnull{
      margin-top: 2px;
  margin-bottom: 2px
  }
`;