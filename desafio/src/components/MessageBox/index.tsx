import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import { states } from '../../reducer'

import Message from '../Message';

const MessageBox: React.FC = () => {
    const messages = useSelector<states, states["messages"]>((state) => state.messages)

    return (
        <Container>
            {messages.map((message) => {
                return <Message from='Arthur' content={message}/>
            })}
        </Container>
    )
};

export default MessageBox;