import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Input } from './styles';
import { states } from '../../reducer';

const InputBox: React.FC = () => {
    const [message, setMessage] = useState('');
    const current_user = useSelector<states, states["current_user"]>((state) => state.current_user)
    const dispatch = useDispatch();

    function handleChange (e: React.FormEvent<HTMLInputElement>): void {
        setMessage((e.target as HTMLInputElement).value);
    }

    function submit () {
        dispatch({type: 'NEW_MESSAGE', payload: {from: current_user.name, text: message}})
    }    

    return (
        <Container>
            <Input
                type='text'
                value={message}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if(e.key === 'Enter' && e.shiftKey === false) {
                      e.preventDefault();
                      submit();
                      setMessage('');
                    }
                  }}
                placeholder='Message' 
            />
        </Container>
    )
};

export default InputBox;