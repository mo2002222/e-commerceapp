import Clints from "./Clints";

const Customer = () => {
return (
    <div className="container">
    <div className="header-text text-center" style={{ marginTop: "60px" }}>
        <h2>More Than 60,000 Customer</h2>
        <p
        className="text-black-50 fw-medium mb-5"
        style={{ fontSize: "15px" }}
        >
        Buy products on your any device with our app & enjoy your time what{" "}
        <br /> you want. Just download & install & start to shopping
        </p>
    </div>
    <div className="container">
        <div
        className="main-section pt-5"
        style={{
            background: "url(/assets/images/clients/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "-13px -4px",
            height: "400px",
        }}
        >
        <Clints
            bodyColor={"#BDBDBD"}
            borderColor={"#B0BEC5"}
            left={"10%"}
            top={"20px"}
        />
        <Clints
            bodyColor={"#80CBC4"}
            borderColor={"#B2DFDB"}
            left={"20%"}
            top={"150px"}
        />
        <Clints
            bodyColor={"#2196F3"}
            borderColor={"#64b5f6"}
            left={"30%"}
            top={"10px"}
        />
        <Clints
            bodyColor={"#D4E157"}
            borderColor={"#DCE775"}
            left={"50%"}
            top={"140px"}
        />
        <Clints
            bodyColor={"#FF7043"}
            borderColor={"#FFAB91"}
            left={"60%"}
            top={"20px"}
        />
        <Clints
            bodyColor={"#8BC34A"}
            borderColor={"#C5E1A5"}
            left={"75%"}
            top={"110px"}
        />
        <Clints
            bodyColor={"#ff9800"}
            borderColor={"#FFCC80"}
            left={"80%"}
            top={"-80px"}
        />
        </div>
    </div>
    </div>
);
};

export default Customer;
