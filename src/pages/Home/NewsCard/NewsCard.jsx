import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaRegStar, FaStar } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import Rating from "react-rating";




const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className="d-flex align-items-center ">
                <Image style={{ height: '40px' }} className="image-fluid" src={author?.img} roundedCircle />
                <div className="ps-2 flex-grow-1">
                    <p className="mb-0">{author.name}</p>
                    <p><small>{moment(author?.published_date).format('YYYY-MM-DD')}</small></p>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareNodes className="ms-2" />


                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>details</> : <>{details.slice(0, 250)}... <br /> <Link className="text-warning text-decoration-none" to={`/news/${_id}`} >Read More</Link> </>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="d-flex">
                <div className=" flex-grow-1 ">
                    <Rating className="me-2 fs-5"
                        readonly
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>


                    <span>{rating?.number}</span>

                </div>
                <div>
                    <FaEye className="me-2" />
                    {total_view}

                </div>

            </Card.Footer>
        </Card>
    );
};

export default NewsCard;