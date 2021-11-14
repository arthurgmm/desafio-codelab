import styled from 'styled-components';

export const Container = styled.div`
    width: 600px;
    padding: 10px;
    border: 2px solid rgb(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow-y: scroll;

    > h3 {
        margin: 0 0 20px;
        font-size: 16px;
        font-weight: normal;
    }

    ::-webkit-scrollbar {
        width: .5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: #fff;
    } 
`;