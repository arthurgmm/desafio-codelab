import React from 'react';

import { Container } from './styles';

import EffortRow from '../EffortRow';
import TimeRow from '../TimeRow';
import VottingInfo from '../VottingInfo';

const Votting: React.FC = () => {
    return (
        <Container>
            <EffortRow />
            <TimeRow />
            <VottingInfo />
        </Container>
    )
};

export default Votting;