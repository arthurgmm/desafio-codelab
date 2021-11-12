import React from 'react';

import { Grid } from './styles';

import ChatBox from '../ChatBox';
import VotingBox from '../VotingBox';
import Users from '../Users';

const Layout: React.FC = () => {
    return (
        <Grid>
            <ChatBox />
            <VotingBox />
            <Users />
        </Grid>
    )
};

export default Layout;