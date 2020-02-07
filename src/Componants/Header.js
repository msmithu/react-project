import React, { Component } from 'react';
import {Link } from "react-router-dom";
import { Container} from 'reactstrap';
import logoImg from '../assets/images/logo.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
            <div className="header">
                <Container>
                    <Navbar light expand="md">
                        <NavbarBrand href="/">
                            <img src={logoImg} width="160px" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/" >Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/About/" >About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/Product/" >Product</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Services
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                    <DropdownItem>
                                        Service One
                                    </DropdownItem>
                                    <DropdownItem>
                                        Service Tow
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink tag={Link} to="/Login/" >Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/Profile/" >Profile</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        )
    }
}