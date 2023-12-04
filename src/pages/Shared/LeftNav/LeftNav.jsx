import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaRegCalendar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://the-news-dragon-server-jhankarphero.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    console.log(categories);
    return (
        <div>
            <h4 className="mb-3">All Caterogy</h4>
            <div className="ps-4">
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "text-decoration-none bg-secondary text-dark py-2 px-4" : "text-decoration-none text-secondary"
                            }
                            to={`/category/${category.id}`}

                        >{category.name}</NavLink>
                    </p>

                    )
                }
            </div>
            <div className="mb-3">
                <Row xs={1} className="g-4 ">
                    <Col>
                        <Card className="border-0 mt-3">
                            <Card.Img variant="top" src={first} />
                            <Card.Body className="p-0 mt-3">
                                <Card.Title className="fs-4">21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text className="mt-3 text-muted">
                                    <FaRegCalendar className="me-2" />   <span>Jan 4, 2022</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="border-0 mt-3">
                            <Card.Img variant="top" src={second} />
                            <Card.Body className="p-0 mt-3">
                                <Card.Title className="fs-4">21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text className="mt-3 text-muted">
                                    <FaRegCalendar className="me-2" />   <span>Jan 4, 2022</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="border-0 mt-3">
                            <Card.Img variant="top" src={third} />
                            <Card.Body className="p-0 mt-3">
                                <Card.Title className="fs-4">21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text className="mt-3 text-muted">
                                    <FaRegCalendar className="me-2" />   <span>Jan 4, 2022</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default LeftNav;