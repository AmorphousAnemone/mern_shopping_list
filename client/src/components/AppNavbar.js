import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    
    // Constructor not needed because we don't have binding
    // nor do we have to initialize state

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         isOpen: false,
    //     }
    // }

    state = {
        isOpen: false,
    }

    // binding workaround from constructor
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }  

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/amorphousanemone">
                                        Github
                                    </NavLink>
                                </NavItem>
                            </Nav>    
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    };
};



export default AppNavbar;