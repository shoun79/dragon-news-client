import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const LoginNavbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const hendleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Container className="sticky-top">
            <Navbar collapseOnSelect expand="lg" bg='light' variant='light' >
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "text-decoration-none" : "text-decoration-none text-dark"
                                    }
                                    to='/category/0'>Home</NavLink>
                            </Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav className='d-flex align-items-lg-center'>
                            {
                                user && <Nav.Link href="#deets">
                                    <FaRegCircleUser className='fs-4' />
                                </Nav.Link>
                            }

                            {
                                user ? <Button onClick={hendleLogOut} variant="secondary">Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default LoginNavbar;