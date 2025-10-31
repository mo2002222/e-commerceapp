import AboutAsideContent from "./AboutAsideContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

const About = () => {
    return (
        <div style={{ marginTop: "60px" }}>
        <div
            className="bg-div bg-dark"
            style={{
            backgroundImage: "linear-gradient(-60deg, #FFB300 50%, black 50%)",
            }}
        >
            <div className="container">
            <div className="row py-5 align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div className="d-flex flex-column gap-3 py-md-5 py-3 align-items-md-normal align-items-center">
                    <AboutAsideContent
                    numbers={<CountUp end={12600} duration={3} />}
                    desc={"Marchant Enrolld"}
                    >
                    <FontAwesomeIcon
                        icon={faUser}
                        style={{
                        fontSize: "25px",
                        padding: "20px",
                        borderRadius: "50%",
                        background: "#f4511e",
                        boxShadow: "0 0 15px 2px rgb(244, 81, 30)",
                        cursor: "pointer",
                        }}
                    />
                    {/* <CountUp end={12.600}/> */}
                    </AboutAsideContent>
                    <AboutAsideContent
                    numbers={<CountUp end={30} duration={3} />}
                    desc={"certified Course"}
                    >
                    <FontAwesomeIcon
                        icon={faGraduationCap}
                        style={{
                        color: "#fff",
                        fontSize: "25px",
                        padding: "19px 16px",
                        borderRadius: "50%",
                        background: "#4caf50",
                        boxShadow: "0 0 9px 2px #4caf50",
                        cursor: "pointer",
                        }}
                    />
                    </AboutAsideContent>
                    <AboutAsideContent
                    numbers={<CountUp end={100} duration={3} />}
                    desc={`Rewards and GiftCards`}
                    >
                    <FontAwesomeIcon
                        icon={faBell}
                        style={{
                        color: "#fff",
                        fontSize: "28px",
                        padding: "20px 19px",
                        borderRadius: "50%",
                        background: "#fbc02d",
                        boxShadow: "0 0 9px 2px #fbc02d",
                        cursor: "pointer",
                        marginLeft: "49px",
                        }}
                    />
                    </AboutAsideContent>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-5 d-flex justify-content-center ">
                <img
                    src="/assets/images/instructor/01.png"
                    style={{ maxWidth: "300px" }}
                    alt=""
                />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-md-5 py-3 text-center text-lg-start text-white text-lg-dark">
                <p className="mb-1">Why Choose Us</p>
                <h2>Become a Marchant</h2>
                <p>
                    Take courses on your any device with our app & learn all about
                    business what you want. Just download & install & start to
                    learn.
                </p>
                <div
                    style={{ borderRadius: "2px" }}
                    className=" btn aplly-btn bg-white py-1 fw-medium"
                >
                    Aplly Now
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default About;
