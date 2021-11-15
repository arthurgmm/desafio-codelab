import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 40px;
    padding: 0 5px;
    margin-bottom: 10px; 

    cursor: pointer;

    &.current {
        border: 2px solid rgb(0, 0, 0, 0.5);
        padding: 0 3px;
        border-radius: 5px;
    }
`;

export const UserImage = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 5px;

    border-radius: 50%;
    background-color: #e6e7e8;
`;

export const Name = styled.strong`
    font-size: 17px;
`;