import { Card, Col, Row } from "react-bootstrap";
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { FaRegCalendar } from "react-icons/fa6";

const EditorsInsight = () => {
    return (
        <div className="mt-4 mb-3">
            <h4>Editors Insight</h4>
            <Row xs={1} md={2} lg={3} className="g-4 ">
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
    );
};

export default EditorsInsight;