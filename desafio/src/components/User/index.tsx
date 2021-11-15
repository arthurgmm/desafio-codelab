import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, UserImage, Name } from './styles';

import { states } from '../../reducer';

type userType = {
    id: number,
    name: string,
    effort: number,
    time: number
}

interface userProps {
    user: userType
}

const User: React.FC<userProps> = ({ user }): JSX.Element => {
    const current_id = useSelector<states, states["current_id"]>((state) => state.current_id);
    const dispatch = useDispatch();

    // Atualiza usuário atual
    function handleClick(newID:number):void {
        dispatch({type: 'SET_ID', payload: newID})
    }

    return (
        <Container 
            className={current_id === user.id ? 'current' : ''}
            onClick={() => handleClick(user.id)}
        >
            <UserImage />
            <Name>{user.name}</Name>
        </Container>
    )
};

export default User;