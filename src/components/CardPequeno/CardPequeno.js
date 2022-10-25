import React from 'react';
import { LayoutCardPequeno, TituloCardPequeno, InfosCardPequeno, ImgCardPequeno} from "./CardPequenoStyles"

function CardPequeno(props) {

    return (
        <LayoutCardPequeno>
            <ImgCardPequeno src={props.imagem} />
            <InfosCardPequeno>
                <TituloCardPequeno>{props.nome}</TituloCardPequeno>
                <p>{props.cidade}</p>
            </InfosCardPequeno>
        </LayoutCardPequeno>
    )
        
}

export default CardPequeno;