import { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const hendleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className=" bg-secondary py-5">
            <Row>
                <Col xs={11} lg={5} className="mx-auto my-5 p-5  bg-white">
                    <h3 className="text-center">Login your account</h3>
                    <hr className="my-4" />
                    <Form onSubmit={hendleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter your email address" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter your password" required />
                        </Form.Group>

                        <Button className="w-100 py-2 fw-bold" variant="secondary" type="submit">
                            Login
                        </Button>
                        <div className="text-center mt-3">
                            <Form.Text className="text-secondary">
                                Dont’t Have An Account ?  <Link className="text-danger text-decoration-none" to="/register">Register</Link>
                            </Form.Text>
                        </div>
                        <Form.Text className="text-success">

                        </Form.Text>
                        <Form.Text className="text-danger">

                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;