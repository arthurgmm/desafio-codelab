import React from 'react';

import { Container, From, Content } from './styles';

export interface Props {
    from: string;
    content: string | React.ReactElement | React.ReactNode;
}

const Message: React.FC<Props> = ({
    from,
    content
}) => {
    return (
        <Container>
            <From>from: {from}</From>
            <Content>{content}</Content>
        </Container>
    )
};

export default Message;