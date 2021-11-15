import React, { useRef } from 'react';
import { useSelector} from 'react-redux';

import { Container } from './styles';

import { states } from '../../reducer';

const Voted: React.FC = () => {
    const users = useSelector<states, states["users"]>((state) => state.users);
    const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>

    return (
        <Container ref={containerRef}>
            <h3>Already Voted</h3>
            {users.filter(user => user.effort !== -1 && user.time !== -1).map(user => {
                containerRef.current.scrollTop = containerRef.current.scrollHeight
                return (
                    <p>{`${user.name} ${user.effort}/${user.time}`}</p>
                )                
            })}
        </Container>
    )
};

export default Voted;