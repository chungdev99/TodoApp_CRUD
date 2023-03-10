import React from 'react';
import { Box, Grid } from '@mui/material';
import BasicList from '../../feature/components/BarLeft/BasicList';
import TodoList from '../TodoList/TodoList';

export default function Calendar() {
    return (
        <Box>
            <Grid container spacing={0} sx={{ flexGrow: 1 }} >
                <Grid item xs={2} >
                    <BasicList />
                </Grid>
                <Grid item xs={10} >
                    <Box sx={{
                        paddingTop: 1,
                        paddingBottom: 3,
                        paddingLeft:4,
                        background: '#CCCCCC'
                    }}>
                        <TodoList />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}