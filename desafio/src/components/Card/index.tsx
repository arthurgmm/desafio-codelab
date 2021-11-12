import React from 'react';

import { Container, CardTitle, CardName, FinishCard, CardContent } from './styles';

const Card: React.FC = () => {
    return (
        <Container>
            <CardTitle>
                <CardName>Card Name</CardName>
                <FinishCard>Finish Card</FinishCard>
            </CardTitle>
            <CardContent>
                <p>Card description</p>
            </CardContent>
        </Container>
    )
};

export default Card;