import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import propTypes from "prop-types";
const Reviews = ({ name, imgNum }) => {
    return (
        <div className="d-flex gap-3 align-items-center mb-1">
        <img
            src={`/assets/images/instructor/0${imgNum}.jpg`}
            alt=""
            style={{ maxWidth: "65px" }}
        />
        <div className="d-flex flex-column " style={{ flex: "1" }}>
            <div
            className="d-flex justify-content-between align-items-center mb-3 flex-wrap"
            style={{ whiteSpace: "nowrap" }}
            >
            <div className="name d-flex gap-sm-3 gap-1 flex-wrap">
                <p className="fw-medium m-0">{name}</p>
                <p className="fw-sm-medium fw-normal text-black-50 m-0">
                Posted on Jun 10, 2022 at 6:57 am
                </p>
            </div>
            <div className="rating d-flex align-items-center">
                <FontAwesomeIcon icon={faStar} color="rgb(255, 193, 7)" />
                <FontAwesomeIcon icon={faStar} color="rgb(255, 193, 7)" />
                <FontAwesomeIcon icon={faStar} color="rgb(255, 193, 7)" />
                <FontAwesomeIcon icon={faStar} color="rgb(255, 193, 7)" />
                <FontAwesomeIcon icon={faStar} color="rgb(255, 193, 7)" />
            </div>
            </div>
            <p className="fw-medium text-black-50">
            Enthusiast build innovativ initiatives before lonterm high-impact
            awesome theme seo psd porta monetize covalent leadership after without
            resource.
            </p>
        </div>
        </div>
    );
    };

    export default Reviews;
    Reviews.propTypes = {
    name: propTypes.string,
    imgNum: propTypes.number,
    };
