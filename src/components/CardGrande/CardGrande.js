import React from 'react';
//import styled from 'styled components'
import {LayoutCardGrande, TituloCardGrande, InfosCardGrande, ImgCardGrande} from "./CardGrandeStyles"

function CardGrande(props) {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem} />
            <InfosCardGrande>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao}</p>
            </InfosCardGrande>
        </LayoutCardGrande>
    )
}

export default CardGrande;