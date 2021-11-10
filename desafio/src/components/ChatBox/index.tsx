import React from 'react';

import { Container } from './styles';

import MessageBox from '../MessageBox';
import InputBox from '../InputBox';

const ChatBox: React.FC = () => {
    return (
        <Container>
            <MessageBox />
            <InputBox />
        </Container>
    )
};

export default ChatBox;