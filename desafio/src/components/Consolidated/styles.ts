import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 160px;
    padding: 10px;
    border: 2px solid rgb(0, 0, 0, 0.5);
    border-radius: 10px;
`;

export const ResultBox = styled.div`
    display: flex;
    flex-direction: row;

    margin: 20px 0 0;
`;


export const Result = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin: 5px 0 0;
        border-radius: 50%;
        background-color: #2e75b6;
        color: #fff;
        font-size: 17px;
        font-weight: bold;
    }
`;