import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Input } from './styles';

const InputBox: React.FC = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch()

    function handleChange (e: React.FormEvent<HTMLInputElement>): void {
        setMessage((e.target as HTMLInputElement).value);
    }

    function submit () {
        dispatch({type: 'NEW_MESSAGE', payload: message})
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