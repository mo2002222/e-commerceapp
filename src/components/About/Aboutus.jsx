import Footer from "../Home/Footer";
import Background from "../shop/Background";

const AboutUs = () => {
    const aboutList = [
        {
        imgUrl: "/assets/images/about/icon/01.jpg",
        imgAlt: "about icon rajibraj91 rajibraj",
        title: "Skilled Instructors",
        desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
        },
        {
        imgUrl: "/assets/images/about/icon/02.jpg",
        imgAlt: "about icon rajibraj91 rajibraj",
        title: "Get Certificate",
        desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
        },
        {
        imgUrl: "/assets/images/about/icon/03.jpg",
        imgAlt: "about icon rajibraj91 rajibraj",
        title: "Online Classes",
        desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
        },
    ];

    return (
        <div>
        <Background title={"About Our Brand"} desc={"Home / About"} />

        <div className="container">
            <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-lg-6 col-12" style={{ marginBottom: "100px" }}>
                <div className="img-container" style={{ position: "relative" }}>
                <img
                    src="/assets/images/about/01.jpg"
                    className="w-75 p-2"
                    alt=""
                    style={{ border: "3px solid rgb(214 214 214 / 22%)" }}
                />
                <div
                    className="bg p-2 ps-0 bg-white"
                    style={{ position: "absolute", bottom: "0", left: "0" }}
                >
                    <div
                    className="box-exp p-2 text-white text-center"
                    style={{ background: "rgb(239, 108, 0)", width: "100%" }}
                    >
                    <h4 className="fw-bold">30+</h4>
                    <p className="mb-0 fw-medium">
                        Years <br /> Of Experince
                    </p>
                    </div>
                </div>
                <div
                    className="sub-img p-2 bg-white"
                    style={{
                    position: "absolute",
                    right: "15px",
                    bottom: "-60px",
                    border: "3px solid rgb(214 214 214 / 22%)",
                    width: "50%",
                    }}
                >
                    <img
                    src="/assets/images/about/02.jpg"
                    className="w-100"
                    alt=""
                    />
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <h5
                className="fw-medium mb-3 text-md-start text-center"
                style={{ color: "#f4511ecf", letterSpacing: "5px" }}
                >
                About Our Brand
                </h5>
                <h2 className="fw-bold mb-3">
                Good Qualification Services And Better Expriences
                </h2>
                <h6
                className="fw-medium text-black-50 mb-4"
                style={{ lineHeight: "23px" }}
                >
                Distinctively provide acces mutfuncto users whereas transparent
                proceses somes ncentivize eficient functionalities rather than
                extensible archtectur communicate leveraged services and
                cross-platform.
                </h6>
                {aboutList.map((item, index) => {
                return (
                    <div
                    key={index}
                    className="content mb-2 gap-3 d-flex align-items-center"
                    >
                    <img src={item.imgUrl} alt={item.imgAlt} />
                    <div className="description">
                        <h6 className="fw-bold">{item.title}</h6>
                        <p className="fw-medium text-black-50">{item.desc}</p>
                    </div>
                    </div>
                );
                })}
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default AboutUs;
