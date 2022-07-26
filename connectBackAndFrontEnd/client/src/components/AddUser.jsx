import React from "react";
import FormGroup from "@mui/material/FormGroup";
import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  styled,
  Button
} from "@mui/material";
// import InputLabel from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 1rem auto;

  & > div{
    margin-top: 1.3rem;
  }
`;

const onValueChange = (e)=>{
    console.log(e.target.value);
}

const AddUser = () => {
  return (
    <>
      <Container>
        <Typography variant="h5"> Add User </Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=> onValueChange(e)}/>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e)=> onValueChange(e)}/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=> onValueChange(e)}/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e)=> onValueChange(e)}/>
        </FormControl>
        <FormControl>
        <Button variant="contained">Add User</Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddUser;
