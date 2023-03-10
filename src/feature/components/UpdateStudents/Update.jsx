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
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


function Update() {
  const [studentList, setStudentList] = useState([]);
 
  useEffect(() => {
    async function fetchUpdate() {
      const requestUrl = 'http://localhost:4000/api/categories'
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setStudentList(responseJSON);
    }
    fetchUpdate();
  }, []);

  const hdlUpdateBtn = async (event) => {
    event.preventDefault();
    let idinp = document.getElementById('idInp').value;
    let nameinp = document.getElementById('nameInp').value;
    let emailinp = document.getElementById('emailInp').value;
    let genderinp = document.getElementById('genderInp').value;
    let teamsinp = document.getElementById('teamInp').value;
    const data = {
      id: idinp,
      name: nameinp,
      teams: teamsinp,
      email: emailinp,
      gender: genderinp,
    };
    console.log(data);

    const requestUrl = `http://localhost:4000/api/categories/${idinp}`
    const response = await fetch(requestUrl, {
      method: "put",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const responseJSON = await response.json();
    console.log({ responseJSON });
    const updatedStudentList = studentList.map((student) => {
      if (student.id === responseJSON.id) {
        return responseJSON;
      } else {
        return student;
      }
    });
    setStudentList(updatedStudentList);
  };

  const hdlResetBtn = (event) => {
    event.preventDefault();
    document.getElementById('idInp').value = '';
    document.getElementById('nameInp').value = '';
    document.getElementById('emailInp').value = '';
    document.getElementById('genderInp').value = '';
    document.getElementById('teamInp').value = '';
  };

  return (
    <div className="wrapper">
      {/* <Drawler></Drawler> */}
      <div id="editStudentWrapper">
        <h3 className="title">Student List</h3>
        <Box sx={{
          background: "#CCCCCC",
          paddingTop: 4,
          paddingBottom: 4,
        }}>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentList.map((list) => (
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>
        <div className="row">
          <h2>Update a team for an existing student</h2>
        </div>
        <form onSubmit={hdlUpdateBtn}>
          <div className="form-group">
            <TextField id="idInp" label="id" variant="outlined" size="small" />
          </div>
          <br></br>
          <div className="form-group">
            <TextField id="nameInp" label="name" variant="outlined" size="small" />
          </div>
          <br></br>
          <div className="form-group">
            <TextField id="emailInp" label="email" variant="outlined" size="small" />
          </div>
          <br></br>
          <div className="form-group">
            <TextField id="genderInp" label="gender" variant="outlined" size="small" />
          </div>
          <br></br>
          <div className="form-group">
            <TextField id="teamInp" label="team" variant="outlined" size="small" />
          </div>
          <br></br>
          <div className="form-group">
            <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                className="btn btn-success"
                type="submit"
              >
                UPDATE
              </Button>
              <Button type="reset" onClick={hdlResetBtn}>
                <RestartAltIcon />
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;