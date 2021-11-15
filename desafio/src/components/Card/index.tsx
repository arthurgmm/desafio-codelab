import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, CardTitle, CardName, FinishCard, CardContent } from './styles';
import { states } from '../../reducer';

const Card: React.FC = () => {
    const card = useSelector<states, states["current_card"]>((state) => state.current_card);
    const dispatch = useDispatch();

    function handleClick():void {
        const newCard = {...card, status: false}
        dispatch({type: 'FINISH_CARD', payload: newCard})
    }

    return (
        <Container>
            <CardTitle>
                <CardName>{card.name}</CardName>
                <FinishCard onClick={() => {handleClick()}}>Finish Card</FinishCard>
            </CardTitle>
            <CardContent>
                <p>{card.description}</p>
            </CardContent>
        </Container>
    )
};

export default Card;