import React from 'react';
import { LayoutCardPequeno, TituloCardPequeno, InfosCardPequeno} from "./styles"

function CardPequeno(props) {
        <LayoutCardPequeno>
            <ImgCardPequeno src={props.img} />
            <InfosCardPequeno>
                <TituloCardPequeno>{props.nome}</TituloCardPequeno>
                <p>{props.perfil.descricao}</p>
            </InfosCardPequeno>
        </LayoutCardPequeno>
}

export default CardPequeno