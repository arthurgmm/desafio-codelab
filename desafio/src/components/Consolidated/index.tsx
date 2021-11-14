import React from 'react';
import { useSelector } from 'react-redux';

import { Container, ResultBox, Result } from './styles';
import { states } from '../../reducer';

const Consolidated: React.FC = () => {
    const current_card = useSelector<states, states["current_card"]>((state) => state.current_card);

    return (
        <Container>
            <h3>Consolidated</h3>
            <ResultBox>
                <Result>
                    <h3>Effort</h3>
                    <div>{current_card.effort !== -1 && current_card.time !== -1 ? current_card.effort : ''}</div>
                </Result>
                <Result>
                    <h3>Time</h3>
                    <div>{current_card.time !== -1 && current_card.effort !== -1 ? current_card.time: ''}</div>
                </Result>
            </ResultBox>
        </Container>
    )
};

export default Consolidated;