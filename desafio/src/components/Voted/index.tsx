import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import { states } from '../../reducer';

const Voted: React.FC = () => {
    const already_voted = useSelector<states, states["already_voted"]>((state) => state.already_voted);

    return (
        <Container>
            <h3>Already Voted</h3>
            {already_voted.map(user => <p>{`${user.name} ${user.effort}/${user.time}`}</p>)}
        </Container>
    )
};

export default Voted;