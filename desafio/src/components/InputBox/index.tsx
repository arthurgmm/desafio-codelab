import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Input, SendIcon } from './styles';

import { states } from '../../reducer';

const InputBox: React.FC = () => {
    const [message, setMessage] = useState('');
    const current_id = useSelector<states, states["current_id"]>((state) => state.current_id)
    const users = useSelector<states, states["users"]>((state) => state.users)
    const dispatch = useDispatch();

    // Atualiza mensagem
    function handleChange (e: React.FormEvent<HTMLInputElement>): void {
        setMessage((e.target as HTMLInputElement).value);
    }

    // Envia nova mensagem
    function submit () {
        dispatch({type: 'NEW_MESSAGE', payload: {from: users[current_id].name, text: message}})
    }    

    return (
        <Container>
            <Input
                type='text'
                value={message}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if(e.key === 'Enter' && message.length > 0) {
                      e.preventDefault();
                      submit();
                      setMessage('');
                    }
                }}
                placeholder='Message' 
            />
            <SendIcon onClick={() => {
                if(message.length > 0) {
                    submit();
                    setMessage('');
                }
            }}/>
        </Container>
    )
};

export default InputBox;