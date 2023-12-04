import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className="mb-2" variant="outline-primary"><FaGoogle /> Login with Google</Button> <br />
            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <div className="mt-4">
                <h4>Find Us On</h4>
                <ListGroup className="mt-3">
                    <ListGroup.Item className="py-3"> <FaFacebookF className="text-primary" /> Facebook</ListGroup.Item>
                    <ListGroup.Item className="py-3"> <FaTwitter className="text-primary" /> Twitter</ListGroup.Item>
                    <ListGroup.Item className="py-3"> <FaInstagram className="text-danger" /> Instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <QZone></QZone>
            <div className="position-relative">
                <img className="w-100" src={bg} alt="" />
                <div className="position-absolute top-50 start-0 translate-middle-y text-white text-center px-4">
                    <h2>Create an <br /> Amazing <br /> Newspaper</h2>
                    <p className="my-3">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger" className='rounded-0 py-3 px-5 mt-3'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;