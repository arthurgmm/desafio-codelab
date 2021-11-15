import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import { states } from '../../reducer';

import Message from '../Message';

const MessageBox: React.FC = () => {
    const messages = useSelector<states, states["messages"]>((state) => state.messages);
    const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>

    return (
        <Container ref={containerRef}>
            {messages.map((message) => {
                containerRef.current.scrollTop = containerRef.current.scrollHeight
                return <Message from={message.from} content={message.text}/>
            })}
        </Container>
    )
};

export default MessageBox;