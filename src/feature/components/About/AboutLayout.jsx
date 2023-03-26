import { Box } from '@mui/material';
import React from 'react';
import BasicList from '../BarLeft/BasicList';
import About from './About';
import Grid from '@mui/material/Unstable_Grid2';


function AboutLayout() {
    return (
        <Box>
            <Grid container spacing={0}>
                <Grid xs={7} sm={4} md={4} lg={3} >
                    <BasicList />
                </Grid>
                <Grid xs={8} sm={9} md={9} lg={6}>
                    <Box sx={{
                        paddingTop: 1,
                        paddingBottom: 4,
                        paddingLeft:4
                    }}>
                        <About />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutLayout;