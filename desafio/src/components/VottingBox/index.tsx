import React from 'react';

import { Container } from './styles';

import Card from '../Card';
import Votting from '../Votting';

const VottingBox: React.FC = () => {
    return (
        <Container>
            <Card />
            <Votting />
        </Container>
    )
};

export default VottingBox;