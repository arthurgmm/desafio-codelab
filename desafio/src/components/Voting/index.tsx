import React from 'react';

import { Container } from './styles';

import EffortRow from '../EffortRow';
import TimeRow from '../TimeRow';
import VotingInfo from '../VotingInfo';

const Voting: React.FC = () => {
    return (
        <Container>
            <EffortRow />
            <TimeRow />
            <VotingInfo />
        </Container>
    )
};

export default Voting;