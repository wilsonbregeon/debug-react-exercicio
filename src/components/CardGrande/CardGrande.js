import React from 'react';
import styled from 'styled components'


function CardGrande(props) {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfosCardGrande>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.perfil.descricao }</p>
            </InfosCardGrande>
        </LayoutCardGrande>
    )
}