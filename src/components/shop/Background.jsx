import propTypes from "prop-types";

const Background = ({ title, desc }) => {
    return (
        <>
        <div
            className="bg-img"
            style={{
            background: "url(/assets/images/pageheader/bg/02.jpg)",
            height: "70vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            }}
        >
            <div
            style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50% , -40%)",
            }}
            >
            <h2 className="text-center fw-bold mb-3">{title}</h2>
            <h6 className="fw-medium text-center">{desc}</h6>
            </div>
        </div>
        </>
    );
    };

    export default Background;
    Background.propTypes = {
    title: propTypes.string,
    desc: propTypes.string,
    };
