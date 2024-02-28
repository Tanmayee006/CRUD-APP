import React from 'react';
import {AppBar,Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)`
    background : #111111
`
const Tabs = styled(NavLink)`
    font-size : 20px;
    margin-right : 20px;
    color : inherit;
    text-decoration : none

`
const NavBAr = () => {
  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to='/'>CRUD App</Tabs>
            <Tabs to='/all'>All users</Tabs>
            <Tabs to='/add'>Add users</Tabs>
        </Toolbar>
    </Header>
  )
}

export default NavBAr