import React from 'react';

import { Container, Title, ButtonsArea, Button } from './styles';

const EffortRow: React.FC = () => {
    let values: number[] = [1, 2, 3, 5, 8, 13, 21];

    return (
        <Container>
            <Title>Effort</Title>
            <ButtonsArea>
                {values.map((value) => {
                    return <Button key={value}>{value}</Button>
                })}
            </ButtonsArea>
        </Container>
    )
};

export default EffortRow;