import React from 'react';
import { Box, Grid } from '@mui/material';
import BasicList from '../../feature/components/BarLeft/BasicList';
import TodoList from '../TodoList/TodoList';

export default function Calendar() {
    return (
        <Box>
            <Grid container spacing={0} >
                <Grid xs={7} sm={4} md={4} lg={3} >
                    <BasicList />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={9} >
                    <Box sx={{
                        paddingTop: 1,
                        paddingBottom: 4,
                        paddingLeft:4,
                        paddingRight: 4,
                        backgroundColor: '#CCCCCC'
                    }}>
                        <TodoList />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}