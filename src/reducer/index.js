import { combineReducers } from 'redux';
import Produitreducer from './reducer';
const allReducers = combineReducers({
  Produit : Produitreducer,

});

export default allReducers;