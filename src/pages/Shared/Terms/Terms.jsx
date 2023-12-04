import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <Container className="text-center">
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere quidem fuga sit velit dolores inventore itaque repellat voluptates, beatae quisquam doloribus nesciunt nisi accusamus aliquid alias odit blanditiis! Asperiores cum vel repellendus. Itaque hic fuga eligendi ratione, modi numquam necessitatibus voluptas voluptates animi sunt, dolore error aperiam beatae unde.</p>
            <p>Go back to <Link to='/register' >Register</Link></p>
        </Container>
    );
};

export default Terms;