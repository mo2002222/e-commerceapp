import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
const CategoryCards = ({ imgNumber, imgName, className }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className={`${className} mt-3`} style={{ position: "relative" }}>
            <div
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
                backgroundImage:
                "linear-gradient(to top, rgba(40, 66, 216, 0.72) -30%, rgba(255, 255, 255, 0)50%)",
            }}
            ></div>
            <div
            style={{
                position: "absolute",
                display: "flex",
                gap: "3px",
                alignItems: "center",
                bottom: "11px",
                left: "10px",
                fontSize: "7xp",
            }}
            >
            <FontAwesomeIcon
                icon={faWindows}
                style={{
                color: "black",
                padding: "5px",
                background: "yellow",
                borderRadius: "50%",
                }}
            />
            <h6 style={{ fontWeight: "bold", color: "#fff" }}>{imgName}</h6>
            </div>
            <img
            className="img-fluid"
            src={`/assets/images/category/0${imgNumber}.jpg`}
            alt={`${imgName}`}
            />
        </div>
        </div>
    );
    };
    export default CategoryCards;

    CategoryCards.propTypes = {
    imgNumber: propTypes.number,
    imgName: propTypes.string,
    className: propTypes.string,
};
