import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 15px 10px;
    
    max-height: calc(100vh - 60px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: grey;
    }     
    
`;