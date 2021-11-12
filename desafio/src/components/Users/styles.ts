import styled from 'styled-components';

export const Container = styled.div`
    grid-area: US;

    display: flex;
    flex-direction: column;

    padding: 15px 10px;
    border-radius: 10px;
    background-color: #fff;
    
    max-height: calc(100vh - 30px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: #fff;
    }  
`;