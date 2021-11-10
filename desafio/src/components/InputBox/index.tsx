import React from 'react';

import { Container, Input } from './styles';

const InputBox: React.FC = () => {
    return (
        <Container>
            <Input
                type='text'
                placeholder='Message' 
            />
        </Container>
    )
};

export default InputBox;