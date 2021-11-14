import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Title, ButtonsArea, Button } from './styles';
import { states } from '../../reducer';

const TimeRow: React.FC = () => {
    const current_id = useSelector<states, states["current_id"]>((state) => state.current_id);
    const users = useSelector<states, states["users"]>((state) => state.users);
    const card = useSelector<states, states["current_card"]>((state) => state.current_card);
    const dispatch = useDispatch();
    let values: number[] = [1, 2, 3, 5, 8, 13, 21];

    function handleClick(value: number) {
        let index: number
        index = users.findIndex((user => user.id === current_id))
        users[index].time = value
        const newUsers = users.map(user => ({...user}))
        dispatch({type: 'SET_USERS', payload: newUsers})

        const maxTime = users.reduce(function(prev, current) {
            return (prev.time > current.time) ? prev : current
        })   
        const newCard = {...card, time: maxTime.time}  
        dispatch({type: 'SET_VOTE', payload: newCard})
    }

    return (
        <Container>
            <Title>Time</Title>
            <ButtonsArea>
                {values.map((value) => {
                    return <Button 
                                key={value} 
                                className={card.status ? '' : 'finished'}
                                onClick={() => handleClick(value)}
                            >
                                {value}
                            </Button>
                })}
            </ButtonsArea>
        </Container>
    )
};

export default TimeRow;