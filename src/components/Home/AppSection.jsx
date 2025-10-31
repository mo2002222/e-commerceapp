import { Link } from "react-router-dom";
import { store } from "../../App";
import { useContext } from "react";
const AppSection = () => {

    const {isLogin} = useContext(store)
    return (
        <div style={{ marginTop: "50px" }}>
        <div className="container">
            {
                !isLogin && <div className="header text-center">
                <Link to={'/Register'}><div
                    className="for-free-btn btn mt-3 mb-5 fw-medium px-3"
                    style={{ border: "2px solid #e0e0e0" }}
                >
                    Sign Up For Free
                </div>
                </Link>
                </div>
            }

            <div className="title text-center">
            <h3 className="fw-bold">Learn Anytime, Anywhere</h3>
            <p className="text-black-50 fw-medium mb-5">
                Take courses on your any device with our app & learn all time what
                you want. <br /> just download & install & start learn
            </p>
            </div>
            <div
            className=" app d-flex gap-2 justify-content-center"
            style={{ marginBottom: "200px" }}
            >
            <div className="row ">
                <div className="col-sm-6 col-12 d-flex justify-content-center mb-3 mb-md-0">
                <img
                    style={{ width: "220px", cursor: "pointer", height: "75px" }}
                    src="/assets/images/app/01.jpg"
                    alt=""
                />
                </div>
                <div className="col-sm-6 col-12 d-flex justify-content-center mb-3 mb-md-0">
                <img
                    style={{ cursor: "pointer", width: "220px", height: "75px" }}
                    src="/assets/images/app/02.jpg"
                    alt=""
                />
                </div>
            </div>
            </div>
            <div
            className=" row sponser d-flex justify-content-center align-items-center flex-row"
            style={{
                padding: "25px 0",
                background: "#f6f2f2",
                borderRadius: "5px",
                rowGap: "15px",
            }}
            >
            <div className="col-lg-2 col-6 col-md-4">
                <img
                style={{ width: "120px" }}
                src="/assets/images/sponsor/01.png"
                alt=""
                />
            </div>
            <div className="col-lg-2 col-6 col-md-4">
                <img
                style={{ width: "120px" }}
                src="/assets/images/sponsor/02.png"
                alt=""
                />
            </div>
            <div className="col-lg-2 col-6 col-md-4">
                <img
                style={{ width: "120px" }}
                src="/assets/images/sponsor/03.png"
                alt=""
                />
            </div>
            <div className="col-lg-2 col-6 col-md-4">
                <img
                style={{ width: "120px" }}
                src="/assets/images/sponsor/04.png"
                alt=""
                />
            </div>
            <div className="col-lg-2 col-6 col-md-4">
                <img
                style={{ width: "120px" }}
                src="/assets/images/sponsor/05.png"
                alt=""
                />
            </div>
            <div className="col-lg-2 col-6 col-md-4">
                <img
                style={{ width: "120px" }}
                src="/assets/images/sponsor/06.png"
                alt=""
                />
            </div>
            </div>
        </div>
        </div>
    );
};

export default AppSection;
