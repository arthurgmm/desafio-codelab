import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Title, ButtonsArea, Button } from './styles';
import { states } from '../../reducer';

const EffortRow: React.FC = () => {
    const current_user = useSelector<states, states["current_user"]>((state) => state.current_user);
    const card = useSelector<states, states["current_card"]>((state) => state.current_card);
    const dispatch = useDispatch();
    let values: number[] = [1, 2, 3, 5, 8, 13, 21];

    function handleClick(value: number) {
        const setUserVote = {
            id: current_user.id,
            name: current_user.name,
            effort: value,
            time: current_user.time
        }
        dispatch({type: 'VOTE_EFFORT', payload: setUserVote})
        if(current_user.time !== -1) {
            dispatch({type: 'SET_VOTE', payload: setUserVote})
        }
    }

    return (
        <Container>
            <Title>Effort</Title>
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

export default EffortRow;