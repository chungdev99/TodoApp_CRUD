import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';

Search.propTypes = {
    onSubmit: PropTypes.func,
};

function Search({ searchName, handleSearch }) {

    return (
        <Box sx={{
            paddingBottom: '10px'
        }}>
            <form>
                <Button>
                    <SearchIcon />
                </Button>
                <input
                    type='text'
                    value={searchName}
                    onChange={handleSearch}
                    style={{
                        paddingRight: '95px',
                    }}
                    placeholder='Search Name'
                />
            </form>
        </Box>
    );
}

export default Search;