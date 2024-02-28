import { useState } from 'react';
import React from 'react'
import { FormControl, FormGroup, InputLabel ,Input, Typography, styled , button, Button} from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate} from 'react-router-dom';
const Container =styled(FormGroup)`
      width : 50%;
      margin : 5% auto 0 auto;
      & > div{
        margin-top : 20px;
      }
`
const defaultvalue = {
    name : '',
    username : '',
    email : '',
    phone : ''
}
const AddUser = () => {
  

  const [user,setUser] = useState(defaultvalue);

  const navigate = useNavigate();
  const onValueChange = (e) =>{
    console.log(e.target.name,e.target.value);
    setUser({ ...user , [e.target.name] : e.target.value})
  }
  console.log(user);

  const addUserDetails = async() =>{
      // console.log('in');
      await addUser(user);
      navigate('/all');
  }

  return (
    //formgroup = parent , formcontrol = child
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='name'/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='username'/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='email'/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='phone'/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=> addUserDetails()}>ADD USER</Button>
      </FormControl>
    </Container>
  )
}

export default AddUser