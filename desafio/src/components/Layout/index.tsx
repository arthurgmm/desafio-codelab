import React from 'react';

import { Grid } from './styles';

import ChatBox from '../ChatBox';
import Users from '../Users';

const Layout: React.FC = () => {
    return (
        <Grid>
            <ChatBox />
            <Users />
        </Grid>
    )
};

export default Layout;