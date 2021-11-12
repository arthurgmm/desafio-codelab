import React from 'react';

import { Container } from './styles';

import Voted from '../Voted';
import Consolidated from '../Consolidated';

const VotingInfo: React.FC = () => {
    return (
        <Container>
            <Voted />
            <Consolidated />
        </Container>
    )
};

export default VotingInfo;