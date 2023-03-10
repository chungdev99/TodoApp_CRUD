import { Box, Grid } from '@mui/material';
import React from 'react';
import BasicList from '../BarLeft/BasicList';
import Update from './Update';

function Update1() {
    return (
        <Box>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <BasicList />
                </Grid>
                <Grid item xs={10}>
                    <Box sx={{
                        paddingTop: 1,
                        paddingBottom: 4,
                        paddingLeft:4

                    }}>
                        <Update />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Update1;