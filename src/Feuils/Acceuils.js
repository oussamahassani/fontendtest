import React from 'react'
import * as AcceulComponent from '../components';
import styled from "styled-components";
export default function Acceuils() {
    return (
        <Acceuil>
               <AcceulComponent.PhotoHader/>
            
            <AcceulComponent.AccProducts/>
           <AcceulComponent.AcceuilBanner/>
           <AcceulComponent.Realisations/>
           <AcceulComponent.CardsBlocks/>
           <AcceulComponent.AboutMagasin/>


        </Acceuil>
        
    )
}

const Acceuil = styled.div `
padding-bottom : 12rem;
background:#F8F8F8;
`;
