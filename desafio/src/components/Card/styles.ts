import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 180px;    
    margin: 0 10px;
`;

export const CardTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 45px;
    padding: 5px 10px;
    border-radius: 10px 10px 0 0;

    background-color: #262626;
`;

export const CardName = styled.h1`
    font-size: 18px;
    color: #fff;
`;

export const FinishCard = styled.button`
    font-size: 18px;
    padding: 3px 6px;
    border-radius: 5px;
`;

export const CardContent = styled.div`
    height: 140px;
    padding: 15px 20px;
    border-radius: 0 0 10px 10px;

    background-color: #fff;
`;