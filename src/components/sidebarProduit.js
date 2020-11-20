import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export default function SidebarProduit() {


    return (
        <div>
                <nav class="nav-sidebar" style={{ border:"1px solid black"}}>
		<ul class="nav tabs">
    <h3 class="">Categorie <hr/></h3>   
          <li class="active flexbetween"><a href="/Product">Lame Bois</a> <em> <ArrowForwardIosIcon/> </em> </li><hr className='marginnull'/>
          <li class="textgray flexbetween"><a href="/Product">Grille Rigide</a> <ArrowForwardIosIcon/> </li>
          <li class="textgray flexbetween"><a href="/Product">Grille Rigide</a> <ArrowForwardIosIcon/> </li> 
          <li class="textgray flexbetween"><a href="/Product">Lame Composite</a> <em> <ArrowForwardIosIcon/> </em></li>
          <li class="textgray flexbetween"><a href="/Product">Panneau Bois</a>  <em> <ArrowForwardIosIcon/> </em></li>    
          <li class="textgray flexbetween"><a href="/Product">Grille Rigide</a> <ArrowForwardIosIcon/> </li> 
          <li class="textgray flexbetween"><a href="/Product">Gabion</a><ArrowForwardIosIcon/></li>                           
		</ul>
	</nav>
        </div>
    )
}
