import "../Blog/Blog.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarDays,
  faUpRightFromSquare,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const BlogCards = ({ title, imgNum }) => {
  const imgURL = `/assets/images/blog/0${imgNum}.jpg`;

  return (
    <div className="col-lg-4 col-md-6 col-12 mb-3">
      <Link
        to={"/singleBlog"}
        style={{ textDecoration: "none" }}
        state={{ path: imgURL }}
      >
        <Card
          style={{
            padding: "8px",
            border: "none",
            boxShadow: "rgb(139 139 139 / 35%) 0px 0px 7px 0px",
          }}
          className="card"
        >
          <Card.Img variant="top" src={imgURL} />
          <Card.Body>
            <Card.Title className="fw-bold card-title">{title}</Card.Title>
            <div
              className="info d-flex gap-2 align-items-center mb-3"
              style={{ fontSize: "13px" }}
            >
              <>
                <FontAwesomeIcon icon={faUser} color="rgb(239, 108, 0)" />
                <p className="text-black-50 mb-0 fw-medium">Sam Harvey</p>
              </>
              <>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  color="rgb(239, 108, 0)"
                />
                <p className="text-black-50 mb-0 fw-medium">jun 05,2024</p>
              </>
            </div>
            <Card.Text className="mb-4 text-black-50 ">
              pluoresnts customiz prancing apcentered customer service anding
              ands asing straieg interacvly cordenate perform.
            </Card.Text>
            <div className="notifecation d-flex align-items-center justify-content-between">
              <div className="d-flex gap-2 align-items-center">
                <p className="mb-0 fw-medium">Read More</p>
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  color="rgb(239, 108, 0)"
                />
              </div>
              <>
                <button type="button" className="btn position-relative">
                  <FontAwesomeIcon icon={faMessage} color="rgb(239, 108, 0)" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2<span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default BlogCards;

BlogCards.propTypes = {
  title: propTypes.string,
  imgNum: propTypes.string,
};
