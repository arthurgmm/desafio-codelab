import React from 'react';

import { Container, ResultBox, Result } from './styles';

const Consolidated: React.FC = () => {
    return (
        <Container>
            <span>Consolidated</span>
            <ResultBox>
                <Result>
                    <span>Effort</span>
                    <div>1</div>
                </Result>
                <Result>
                    <span>Time</span>
                    <div>2</div>
                </Result>
            </ResultBox>
        </Container>
    )
};

export default Consolidated;