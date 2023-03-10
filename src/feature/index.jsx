import React from 'react';
import { Box , Grid } from '@mui/material';

import BasicTable from './components/ListStudents/BasicTable';
import BasicList from './components/BarLeft/BasicList';

function Layout() {
    return (
        <Box>
                <Grid container spacing={0} >
                    <Grid item xs={2}>
                        <BasicList />
                    </Grid>
                    <Grid item xs={10} >
                        <BasicTable />
                    </Grid>
                </Grid>
        </Box>
    );
}

export default Layout;