import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
// import InputLabel from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 1rem auto;

  & > div {
    margin-top: 1.3rem;
  }
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  number: "",
};

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    console.log(user);
  };

  const addUserDetails = ()=>{

           
  }
  return (
    <>
      <Container>
        <Typography variant="h5"> Add User </Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="number" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={addUserDetails}>Add User</Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddUser;
