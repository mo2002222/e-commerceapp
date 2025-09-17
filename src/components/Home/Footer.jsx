import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import DevloperInfo from "./DevloperInfo";
const Footer = () => {
    return (
        <div >
        <div className="bg-black" style={{ padding: "100px 0 60px "}}>
            <div className="main-section container">
            <div
                className="row justify-content-center"
                style={{ rowGap: "35px" }}
            >
                <div className="col-lg-3  col-md-4 col-sm-6 gap-md-0 gap-5 text-white">
                <h4 className="mb-3">About Shopcart</h4>
                <p style={{ color: "#e7e5e5" }}>
                    Eduaid theme number one world class university in the world
                    there are student are studing always in this university for all
                    time.{" "}
                </p>
                <div className="info d-flex flex-column gap-4">
                    <div className="location d-flex gap-3 align-items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <h6 className="mb-0">New York, USA.</h6>
                    </div>
                    <div className="phone d-flex align-items-center gap-3">
                    <FontAwesomeIcon icon={faPhone} />
                    <h6 className="mb-0">+880 123 456 789</h6>
                    </div>
                    <div className="mail d-flex align-items-center gap-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h6 className="mb-0">inf@shopcart.com</h6>
                    </div>
                    <div className="social-media">
                    <FontAwesomeIcon
                        style={{
                        padding: "10px",
                        borderRadius: "2px",
                        backgroundColor: "#e30202",
                        marginRight: "5px",
                        cursor: "pointer",
                        }}
                        icon={faYoutube}
                    />
                    <FontAwesomeIcon
                        style={{
                        padding: "10px",
                        borderRadius: "2px",
                        backgroundColor: "#4059a3",
                        marginRight: "5px",
                        cursor: "pointer",
                        }}
                        icon={faFacebook}
                    />
                    <FontAwesomeIcon
                        style={{
                        padding: "10px",
                        borderRadius: "2px",
                        backgroundColor: "#cc145d",
                        marginRight: "5px",
                        cursor: "pointer",
                        }}
                        icon={faInstagram}
                    />
                    <FontAwesomeIcon
                        style={{
                        padding: "10px",
                        borderRadius: "2px",
                        backgroundColor: "#ff3434",
                        marginRight: "5px",
                        cursor: "pointer",
                        }}
                        icon={faPinterest}
                    />
                    <FontAwesomeIcon
                        style={{
                        padding: "10px",
                        borderRadius: "2px",
                        backgroundColor: "#03A9F4",
                        marginRight: "5px",
                        cursor: "pointer",
                        }}
                        icon={faTwitter}
                    />
                    <FontAwesomeIcon
                        style={{
                        padding: "10px",
                        borderRadius: "2px",
                        backgroundColor: "#0277BD",
                        marginRight: "5px",
                        cursor: "pointer",
                        }}
                        icon={faLinkedin}
                    />
                    </div>
                </div>
                </div>
                <div className="col-lg-3  col-md-4 col-sm-6 gap-md-0 gap-5 text-white">
                <h4 className="mb-3">Categories</h4>
                <ul
                    style={{ color: "#e7e5e5" }}
                    className="list-unstyled d-flex flex-column gap-3 fw-medium"
                >
                    <li>All Products</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Policy</li>
                    <li>FAQs</li>
                </ul>
                </div>
                <div className="col-lg-3  col-md-4 col-sm-6 gap-md-0 gap-5">
                <h4 className="mb-3 text-white">Quick Links</h4>
                <ul
                    style={{ color: "#e7e5e5" }}
                    className="list-unstyled d-flex flex-column gap-3 fw-medium"
                >
                    <li>Summer sessions</li>
                    <li>Events</li>
                    <li>gallery</li>
                    <li>Forums</li>
                    <li>Privacy Policy</li>
                    <li>Terms Of Us</li>
                </ul>
                </div>
                <div className="col-lg-3  col-md-4 col-sm-6 gap-md-0 gap-5">
                <h4 className="mb-3 text-white">Recent Tweets</h4>
                <div
                    style={{ color: "#e7e5e5" }}
                    className="tweets d-flex flex-column gap-3"
                >
                    <div className="tweet d-flex gap-2">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ fontSize: "25px" }}
                    />
                    <p>
                        {" "}
                        <span className="text-medium">Amir Foda</span> <br />
                        @Shopecart Sreetings! #HTML_Template Grap your item 50% Big
                        sale offer!!
                    </p>
                    </div>
                    <div className="tweet d-flex gap-2">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ fontSize: "25px" }}
                    />
                    <p>
                        {" "}
                        <span className="text-medium">Ali Darwesh</span>
                        <br />
                        @Shopecart Hey! #HTML_Template Grap your item 50% Big sale
                        offer!!
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <DevloperInfo />
        </div>
    );
};

export default Footer;
