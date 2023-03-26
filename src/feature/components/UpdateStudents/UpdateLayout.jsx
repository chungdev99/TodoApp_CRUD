import { Box } from '@mui/material';
import React from 'react';
import BasicList from '../BarLeft/BasicList';
import Update from './Update';
import Grid from '@mui/material/Unstable_Grid2';

function UpdateLayout() {
    return (
        <Box>
            <Grid container spacing={0} disableEqualOverflow>
                <Grid xs={7} sm={4} md={4} lg={3}>
                    <BasicList />
                </Grid>
                <Grid xs={11} sm={11} md={9} lg={9} >
                    <Box sx={{
                        paddingTop: 1,
                        paddingBottom: 4,
                        paddingLeft: 4
                    }}>
                        <Update />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UpdateLayout;