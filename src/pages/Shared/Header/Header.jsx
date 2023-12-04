import { Button, Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";



const Header = () => {

    return (
        <Container className='mt-3'>
            <div className='text-center'>
                <img className='img-fluid' src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex  py-2 px-3'>
                <Button variant="danger" className='rounded-0'>Latest</Button>
                <Marquee className='text-danger' pauseOnHover speed={70}>
                    I can be a React component, multiple React components, or just some text...  I can be a React component, multiple React components, or just some text...
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;