
import {GetallProduct} from './api/produitapi'
import {GETALLPRODUIT} from  './type'

export const GetallProducts = () => { return  (dispatch) => 
    GetallProduct
     .then(res => dispatch(delatecart(res.data)))
      
     .catch(err => console.log(err))
 }



export const delatecart =(paylod) => ( {
    type: GETALLPRODUIT,
    paylod,
  })

