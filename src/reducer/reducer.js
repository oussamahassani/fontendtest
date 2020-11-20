

import {GETALLPRODUIT} from '../action/type';
const initialState ={
Produit : [] , 

}

export default function Productreducer (state = initialState, action) {
  switch (action.type) {
     case   GETALLPRODUIT :
    return { ...state,
        Produit: action.paylod
    }
     
  
  default:
  return  state;
}
}

    
