import React from 'react'
import { render } from 'react-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import NavLink from './NavLink.jsx'
import User from './digest.jsx';

export default class Header extends React.Component{
    constructor(){
        super()
        this.state={
            collapsed : true,
        };
    }
    toggleCollapse(){
        const collapsed  = !this.state.collapsed ;
        this.setState({collapsed });
        console.log("clicked");
    }
    render(){
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";
        var leftNav ={
            paddingTop: '28px'
        }
        const userNav={
            color:"white",
            textDecoration :'none'
        }
        return (<Navbar inverse fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to="/home">React LMS</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse >
                <Nav pullRight>
                    <NavLink to="/user" style={userNav} onClick={this.toggleCollapse.bind(this)}><User/></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>)
    }
}