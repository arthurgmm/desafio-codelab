import React from 'react';

import { Container } from './styles';
import User from '../User';

import { users } from '../../data';

const Users: React.FC = () => {
    return (
        <Container>
            {users.map(user => <User key={user.id} user={user} />)}
        </Container>
    )
};

export default Users;