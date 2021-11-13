import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Title, ButtonsArea, Button } from './styles';
import { states } from '../../reducer';

const TimeRow: React.FC = () => {
    const card = useSelector<states, states["current_card"]>((state) => state.current_card);
    let values: number[] = [1, 2, 3, 5, 8, 13, 21];

    return (
        <Container>
            <Title>Time</Title>
            <ButtonsArea>
                {values.map((value) => {
                    return <Button key={value} className={card.status ? '' : 'finished'}>{value}</Button>
                })}
            </ButtonsArea>
        </Container>
    )
};

export default TimeRow;