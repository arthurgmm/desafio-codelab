import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 0 20px;
`;

export const Title = styled.h1`
    font-size: 23px;
`;

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin: 10px 15px 0;
`;

export const Button = styled.button`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #2e75b6;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;

    &.finished {
        background-color: #e6e7e8;
        pointer-events: none;
    }

    :active {
        background-color: #81ACD3;
    }
`;