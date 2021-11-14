import React from 'react';
import { useSelector} from 'react-redux';

import { Container } from './styles';
import { states } from '../../reducer';

const Voted: React.FC = () => {
    const users = useSelector<states, states["users"]>((state) => state.users);

    return (
        <Container>
            <h3>Already Voted</h3>
            {users.filter(user => user.effort !== -1 && user.time !== -1).map(user => {
                return (
                    <p>{`${user.name} ${user.effort}/${user.time}`}</p>
                )                
            })}
        </Container>
    )
};

export default Voted;