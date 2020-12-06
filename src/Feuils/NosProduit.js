import React , {useEffect} from 'react'
import * as ProduitComponent from '../components'
import { useSelector, useDispatch } from "react-redux";
import './style.css'
import {GetallProducts} from '../action/produitaction'
import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function NosProduit(props) {
   


  const dispatch = useDispatch();
  let Produit = useSelector(state => state.Produit.Produit)  
  useEffect(() => {
    const loadProduct = async () => {
    
      await dispatch(GetallProducts());
  
    };
    loadProduct();
  }, [dispatch]);
    return (
        <Product>
 
          
        
           <ProduitComponent.Haderproduit titre="Nos Produits" position="Boutique"/>
   <br/><br/>
      <div>
    <div class="flexfentreproduit">
      <div class="flexcolumn">
  <ProduitComponent.SidebarProduit/>

  <div className="banner2">
      <div>
       
        <div>
        <img src="images/toolbox.png" alt="toolbox"  /><br/><br/>
          <h4 className="titrebanner2">Configurez votre espace</h4><br/>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem ipsum dolor sit amet,
             consetetur sadipscing elitr sed diam
            nonumy eirmod tempor invidu.
          </p><br/>
          <div>
          <img src="images/Evert.png" alt="Evert" className="transform" />
          <ArrowForwardIcon className="banner2-Arrow" />
          </div>
        </div>
     
      </div>
    </div>
 
  </div>
  <div>
  <nav className="navbarproduit" style={{marginLeft:"3%"}}>
      <a className="active" href="/Product">Nouveautés</a>
      <a  href="/Product">Populair</a>
      <a  href="/Product">Meilleur Vente</a>
    </nav>
          <div className="flexevenly">
      {Produit.map((el,i) => <ProduitComponent.Cardproduct index = {i}  img={el.picture} prix={el.price} productname={el.product_name} description = "Lame terrasse bois Pin Sylvestre traité classe 4"/> )}
      </div>
     
      <div className="afficherplus">
        AFFICHER PLUS
      </div>
      </div>
      </div>
       
      
       
  
       
      </div>
        </Product>
    )
}

const Product = styled.div `
background:#F8F8F8;
padding-bottom:5rem;
`;