import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import PropTypes from 'prop-types';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import Search from '../Search/Search';
import { filterItems } from '../../../constants/index'

BasicTable.propTypes = {
  lists: PropTypes.array,
};

BasicTable.defaultProps = {
  lists: [],
};

function BasicTable(props) {

  const [lists, setLists] = useState([]);
  const [searchName, setSearchName] = useState('');

  const filterName = filterItems(lists, searchName);

  useEffect(() => {
    async function fetchList() {
      try {
        const requestUrl = 'http://localhost:4000/api/categories'
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        console.log("hello");
        setLists(responseJSON);
      } catch (error) {
        console.log("loi r", error);
      }
    }
    fetchList();
  }, []);

  async function hdlDeleteStudent(id , index) {
    try {
      const requestUrl = (`https://json-data-crud.vercel.app/api/categories/${id}`);
      const response = await fetch(requestUrl, {
        method: 'DELETE',
      });
      const responseJSON = await response.json();
      console.log({ responseJSON });
      // setLists([...responseJSON]);
      lists.splice(index , 1)
      console.log(lists)
      setLists([...lists])
    } catch (error) {
      console.log("loi r...", error);
    }
  };

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  }

  return (
    <Box sx={{
      background: "#CCCCCC",
      paddingTop: 4,
      paddingBottom: 4,
    }}>

      <Search handleSearch={handleSearch} searchName={searchName} />

      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="left">name</TableCell>
                <TableCell align="left">email&nbsp;</TableCell>
                <TableCell align="left">gender&nbsp;</TableCell>
                <TableCell align="left">teams&nbsp;</TableCell>
                <TableCell align="left">action&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterName.map((list , index) => (
                <TableRow
                  key={list.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {list.id}
                  </TableCell>
                  <TableCell align="left">{list.name}</TableCell>
                  <TableCell align="left">{list.email}</TableCell>
                  <TableCell align="left">{list.gender}</TableCell>
                  <TableCell align="left">{list.teams}</TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="h6"
                      component="span"
                      onClick={() => hdlDeleteStudent(list.id , index)}>
                      <ClearIcon />
                    </Typography>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
export default BasicTable;
