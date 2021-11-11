import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 30px; 
    margin-bottom: 10px; 
`;

export const UserImage = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 5px;

    border-radius: 50%;
    background-color: var(--primary);

    &.offline {
        background-color: grey;
    }  
`;

export const Name = styled.strong`
    font-size: 20px;

    &.offline {
        color: grey;
    }
`;