import propTypes from "prop-types";

const AboutAsideContent = ({ numbers, desc, children }) => {
    return (
        <div className="marchant d-flex flex-row gap-4 text-white">
        {children}
        <div className="right-section">
            <h2>{numbers} +</h2>
            <h6>{desc}</h6>
        </div>
        </div>
    );
    };

    AboutAsideContent.propTypes = {
    numbers: propTypes.string,
    desc: propTypes.string,
    imgNum: propTypes.number,
    children: propTypes.arrayOf(propTypes.node),
};

export default AboutAsideContent;
