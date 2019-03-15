import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Container } from 'reactstrap';
import logo from '../../static/Logo.png';

class Header extends Component {

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

	render () {
		return (
	    <header>
	    	<Container className='headerWrapper' fluid>
					<Navbar color="faded" expand="md">
	          <NavbarBrand href="/">
							<img width='120px' src={require('../../static/Logo.png')} alt=""/>
						</NavbarBrand>
	          <NavbarToggler onClick={this.toggle} />
	          <Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="ml-auto" navbar>
	              <NavItem>
	                <NavLink href="#/">Home</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="#/about">About Us</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="#/about">About Us</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="#/about">Our Work</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="#/about">Business Opportunities</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="#/about">Contact Us</NavLink>
	              </NavItem>
	            </Nav>
	          </Collapse>
	        </Navbar>
        </Container>
	    </header>
	  )
	}
}

export default Header;