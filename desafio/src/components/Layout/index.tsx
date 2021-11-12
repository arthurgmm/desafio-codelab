import React from 'react';

import { Grid } from './styles';

import ChatBox from '../ChatBox';
import VottingBox from '../VottingBox';
import Users from '../Users';

const Layout: React.FC = () => {
    return (
        <Grid>
            <ChatBox />
            <VottingBox />
            <Users />
        </Grid>
    )
};

export default Layout;