import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function AddList() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [teams, setTeams] = useState('');

  const hdlSearchNameChange = (event) => {
    setName(event.target.value);
  };
  const hdlSearchEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const hdlSearchTeamsChange = (event) => {
    setTeams(event.target.value);
  };
  const hdlSearchGenderChange = (event) => {
    setGender(event.target.value);
  };

  const hdlSubmitForm = (e) => {
    e.preventDefault()
    async function fetchAdd() {
      let body = {
        name: name,
        email: email,
        teams: teams,
        gender: gender,
      }
      try {
        const requestUrl = 'http://localhost:4000/api/categories'
        const response = await fetch(requestUrl, {
          method: "post",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        const responseJSON = await response.json();
        console.log({ responseJSON });
        console.log(body);
        setName("");
        setEmail("");
        setGender("");
        setTeams("");
        alert(`Đã thêm "${name}" vào Student List`)
      } catch (error) {
        console.log("loi r", error);
      }
    }
    fetchAdd();
  }

  const teamlist = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5'];

  return (
    <div id="addStudentWrapper">
      <h1 className="title">Add Student</h1>

      <form className="mainform">
        <div className="form-group  name">
          <TextField id="standard-basic" value={name} label="Name" variant="standard" onChange={(e) => hdlSearchNameChange(e)} />
        </div>
        <p></p>
        <div className="form-group mail">
          <TextField id="standard-basic" value={email} label="Email" variant="standard" onChange={hdlSearchEmailChange} />
        </div>

        <p></p>
        <p></p>

        <div className="form-group select-inp-container">

          <div className="select-inp pickteam">
            {/* <p>Pick a team</p> */}
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              onChange={hdlSearchTeamsChange}
              helperText="vui lòng chọn"
            >
              {teamlist.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <br></br>

          <div className="select-inp gender">
            {/* <p>Choose a gender</p> */}
            <div>
              <input type="radio" name="gender" checked={gender === "M"} value="M" onChange={hdlSearchGenderChange}></input> Male
            </div>
            <div>
              <input type="radio" name="gender" checked={gender === "F"} value="F" onChange={hdlSearchGenderChange}></input> Female
            </div>
          </div>
        </div>
        <br></br>
        <Button variant="contained" onClick={(e) => hdlSubmitForm(e)} className="submit-btn">
          CREATE
        </Button>
      </form>
    </div>
  );
}

export default AddList;