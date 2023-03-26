import React from 'react';
import { Box, Grid } from '@mui/material';

import BasicTable from './components/ListStudents/BasicTable';
import BasicList from './components/BarLeft/BasicList';

function Layout() {
    return (
        <Box>
            <Grid container spacing={0} >
                <Grid xs={7} sm={4} md={4} lg={3}>
                    <BasicList />
                </Grid>
                <Grid xs={11} sm={11} md={9} lg={9} >
                    <Box sx={{
                        paddingTop: 1,
                        paddingBottom: 4,
                        paddingLeft: 4
                    }}>
                        <BasicTable />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Layout;