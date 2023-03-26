import { Box } from '@mui/material';
import React from 'react';
import BasicList from '../BarLeft/BasicList';
import AddList from './AddList';
import Grid from '@mui/material/Unstable_Grid2';

function AddListLayout() {
    return (
        <Box>
            <Grid container spacing={0}>
                <Grid xs={7} sm={4} md={4} lg={3} >
                    <BasicList />
                </Grid>
                <Grid xs={8} sm={9} md={9} lg={3} >
                    <Box sx={{                    
                        paddingBottom: 4,
                        paddingLeft: 4                
                    }}>
                        <AddList />
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
}

export default AddListLayout;