import React from "react";
import { useEffect, useState } from "react";
import {Table,TableHead,TableBody,TableRow,TableCell,styled, Button} from "@mui/material";
import { getUsers ,deleteUser} from "../service/api";
import { Link } from "react-router-dom";
const StyledTable =  styled(Table)`
      width : 90%;
      margin : 50px auto 0 auto ;
`
const Thead = styled(TableRow)`
      background : #000000;
      & > th{
        color : #fff ;
        font-size : 17px;
      }
`
// th is tabecell 
const Tbody = styled(TableRow)`
      & > td{
        font-size: 17px;
      }
`
const Allusers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      let response = await getUsers();
      if (response && response.data) {
        setUsers(response.data);
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  const deleteUSerDetails =async(id)=>{
    await deleteUser(id);
    getAllUsers();
  } 
  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>E-mail</TableCell>
          <TableCell>Contact no.</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {
          users.map(user=>(
            <Tbody key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={()=>deleteUSerDetails(user._id)}>Delete</Button>
            </TableCell>
          </Tbody>
          ))
        }
      </TableBody>
    </StyledTable>
  );
};

export default Allusers;
