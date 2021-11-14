import React from 'react';
import { useSelector } from 'react-redux';

import { Container, ResultBox, Result } from './styles';
import { states } from '../../reducer';

const Consolidated: React.FC = () => {
    const consolidated = useSelector<states, states["consolidated"]>((state) => state.consolidated);

    return (
        <Container>
            <h3>Consolidated</h3>
            <ResultBox>
                <Result>
                    <h3>Effort</h3>
                    <div>{consolidated.effort}</div>
                </Result>
                <Result>
                    <h3>Time</h3>
                    <div>{consolidated.time}</div>
                </Result>
            </ResultBox>
        </Container>
    )
};

export default Consolidated;