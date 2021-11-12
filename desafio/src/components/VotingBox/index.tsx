import React from 'react';

import { Container } from './styles';

import Card from '../Card';
import Voting from '../Voting';

const VotingBox: React.FC = () => {
    return (
        <Container>
            <Card />
            <Voting />
        </Container>
    )
};

export default VotingBox;