import React, { useEffect } from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useNavigate} from "react-router-dom"

import {useDispatch, useSelector} from "react-redux"
import { deleteUser, loadUser } from '../redux/action';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
const Home = () => {

    let dispatch = useDispatch();
    const {users} = useSelector(state=>state.data)
    let history = useNavigate()
    useEffect(()=>{
        dispatch(loadUser());
    },[])
    
    const handleDelete = (id) =>{
        if(window.confirm("Are you sure wanted delete the user ?")){
            dispatch(deleteUser(id))
        }
    }

  return (
    <div>
       <div className='text-center mt-3 mb-5'>
            <Button 
              onClick={()=>history("./addUser")}
              variant="contained"
              color="primary">
                Add User
            </Button> 
       </div>
        <div>
            <TableContainer  component={Paper}>
                <Table sx={{ minWidth: 900}} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="center">E-Mail</StyledTableCell>
                        <StyledTableCell align="center">PassWord</StyledTableCell>
                        <StyledTableCell align="center">City</StyledTableCell>
                        <StyledTableCell align="center">State</StyledTableCell>
                        <StyledTableCell align="center">Date & Time</StyledTableCell>
                        <StyledTableCell align="center">Age</StyledTableCell>
                        <StyledTableCell align="center">Address</StyledTableCell>
                        <StyledTableCell align="center">Profile Image</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users && users.map((user) => (
                        <StyledTableRow key={user.id}>
                            <StyledTableCell component="th" scope="row">
                                {user.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{user.email}</StyledTableCell>
                            <StyledTableCell align="center">{user.password}</StyledTableCell>
                            <StyledTableCell align="center">{user.city}</StyledTableCell>
                            <StyledTableCell align="center">{user.state}</StyledTableCell>
                            <StyledTableCell align="center">{user.date}</StyledTableCell>
                            <StyledTableCell align="center">{user.age}</StyledTableCell>
                            <StyledTableCell align="center">{user.address}</StyledTableCell>
                            <StyledTableCell align="center">{user.profile}</StyledTableCell>                            
                            <StyledTableCell align="center">{user.status}</StyledTableCell>
                            <StyledTableCell align="center">
                            <ButtonGroup variant="contained" aria-label="outlined button group">
                                <Button onClick={()=>handleDelete(user.id)} style={{marginRight:"5px"}} color="secondary">Delete</Button>
                                <Button onClick={()=>history(`/editUser/${user.id}`)} color="primary">Edit</Button>
                            </ButtonGroup>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
  )
}

export default Home