import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, UserImage, Name } from './styles';
import { states } from '../../reducer';

type userType = {
    id: number,
    name: string
}

interface userProps {
    user: userType
}

const User: React.FC<userProps> = ({ user }): JSX.Element => {
    const current_user = useSelector<states, states["current_user"]>((state) => state.current_user);
    const dispatch = useDispatch();

    function handleClick(newUser:userType):void {
        dispatch({type: 'SET_USER', payload: newUser})
    }

    return (
        <Container 
            className={current_user.id === user.id ? 'current' : ''}
            onClick={() => handleClick(user)}
        >
            <UserImage />
            <Name>{user.name}</Name>
        </Container>
    )
};

export default User;