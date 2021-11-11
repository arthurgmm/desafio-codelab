import React from 'react';

import { Container, UserImage, Name } from './styles';

type userType = {
    id: number,
    name: string,
    statusOnline: boolean
}

interface userProps {
    user: userType
}

const User: React.FC<userProps> = ({ user }): JSX.Element => {
    return (
        <Container >
            <UserImage className={!user.statusOnline ? 'offline' : ''}/>
            <Name className={!user.statusOnline ? 'offline' : ''}>{user.name}</Name>
        </Container>
    )
};

export default User;