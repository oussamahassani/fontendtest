import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export default function Haderproduit({titre , position}) {
    return (
        <div className="haderProdcut">
            <h1 className="colorprincipale">{titre}</h1>
            <p className="colorWhite"> Acceuil  <ArrowForwardIosIcon/>  {position}</p>
        </div>
    )
}
