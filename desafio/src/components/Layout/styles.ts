import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 280px auto 180px;
    grid-template-rows: calc(100vh - 15px) calc(100vh - 15px) calc(100vh - 15px);

    grid-template-areas:
        'CB VB US'; //Chat Box, Voting Box, Users

    height: 100vh;
    padding: 15px;

    background-color: var(--primary);
`;