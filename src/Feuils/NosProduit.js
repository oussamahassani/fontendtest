import React , {useEffect} from 'react'
import * as ProduitComponent from '../components'
import { useSelector, useDispatch } from "react-redux";
import './style.css'
import {GetallProducts} from '../action/produitaction'


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
        <div>
 
          
        
           <ProduitComponent.Haderproduit titre="Nos Produits" position="Boutique"/>
   <br/><br/>
      <div>
    <div class="flexfentreproduit">
      <div class="flexcolumn">
  <ProduitComponent.SidebarProduit/>

  <div className="banner2">
      <div>
       
        <div>
        <img src="images/toolbox.png" alt="toolbox" /><br/><br/>
          <h4>Configurez votre espace</h4><br/>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidu.
          </p><br/>
          <img src="images/Evert.png" alt="Evert" className="transform" />
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
        </div>
    )
}
