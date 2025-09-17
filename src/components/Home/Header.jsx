import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faPen } from "@fortawesome/free-solid-svg-icons";
import DataToUpdate from "./DataToUpdate";

function Header() {
const { isLogin, userData } = useContext(store);
const [isExtandUserData, setIsExtandUserData] = useState(false);
const [isExtandProfilImage, setIsExtandPeofilImage] = useState(false);
const [bg, setBg] = useState();
const [profileImage, setProfileImage] = useState(null);
const [profileImageURL, setProfileImageURL] = useState(null);
const [popupToUpdate, setPopupToUpdate] = useState(false);
const navigate = useNavigate();
const [message, setMessage] = useState();
const handelScroll = () => {
    if (window.scrollY > 0) {
    setBg("rgb(246 246 246 / 74%)");
    } else {
    setBg("transparent");
    }
};
window.addEventListener("scroll", handelScroll);

const handleUserData = () => {
    setIsExtandUserData(!isExtandUserData);
    setIsExtandPeofilImage(false);
};
const handleProfilImage = () => {
    setIsExtandPeofilImage(!isExtandProfilImage);
    setIsExtandUserData(false);
};

const handleFileChang = (e) => {
    setProfileImage(e.target.files[0]);
};

//update profileImg
const handleUpdateProfilImg = async () => {
    if (!profileImage) {
    setMessage("no file chosen");
    setTimeout(() => {
        setMessage("");
    }, 2000);
    return;
    }

    const formData = new FormData();
    formData.append("profileImage", profileImage);

    try {
    const response = await fetch(
        `http://localhost:3000/user/${userData.id}/profileimag/update`,
        {
        method: "POST",
        body: formData,
        }
    );

    if (!response.ok) {
        console.log("faild response", response.json().message);
    }

    const data = await response.json();
    console.log(data);
    } catch (error) {
    console.log("error while uploading", error);
    }
};

//fetching profile image
useEffect(() => {
    const fetching = async () => {
    try {
        const response = await fetch(
        `http://localhost:3000/profileImg/${userData.id}`
        );
        if (!response.ok) {
        throw new Error("faild to fetch imaeg");
        }
        const data = await response.json();
        setProfileImageURL(data.profilImg);
    } catch (error) {
        console.log("error while fitching", error);
    }
    };
    if (userData && userData.id) {
    fetching();
    }
});

//show popupToUpdate
const handlPopupUpdate = () => {
    setPopupToUpdate(!popupToUpdate);
};
// fetch delete cookie req
const handleLogOut = async () => {
    const response = await fetch("http://localhost:3000/logout", {
    method: "GET",
    credentials: "include",
    });

    if (response.ok) {
    const data = await response.json();
    console.log(data);
    navigate("/Login");
    } else {
    alert("faild to logout");
    }
};

return (
    <div className="fixed-top" style={{ background: `${bg}` }}>
    <Navbar
        expand="lg"
        style={{ borderBottom: "3px solid rgb(228 228 228 / 36%)" }}
    >
        <Container>
        <Navbar.Brand href="#">
            <img
            src="/src\assets\images\logo\logo.png"
            width="130"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-lg-center align-items-start">
            {/* <LinkContainer to="/"> */}
            <Nav.Link className="nav-link px-3 fw-bold">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                Home
                </Link>
            </Nav.Link>
            <Nav.Link className="nav-link px-3 fw-bold">
                <Link to={"/Shop"}>Shop</Link>
            </Nav.Link>
            <Nav.Link className="nav-link px-3 fw-bold">
                <Link to={"/Blog"}>Blog</Link>
            </Nav.Link>
            <Nav.Link className="nav-link px-3 fw-bold">
                <Link to={"/AboutUs"}>About</Link>
            </Nav.Link>
            <Nav.Link className=" me-4 nav-link px-3 fw-bold ">
                <Link to={"/Contact"}>Contact</Link>
            </Nav.Link>
            {isLogin ? (
                <div
                className="d-flex align-items-center justify-content-center gap-2"
                style={{ marginLeft: "200px" }}
                >
                <p
                    className="mb-0 p-1 border rounded"
                    style={{ fontSize: "15px", cursor: "pointer" }}
                    onClick={handleUserData}
                >
                    {userData.userName}
                </p>
                <img
                    src={
                    profileImageURL
                        ? `http://localhost:3000${profileImageURL}`
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO2DCDcfM7yDAtEo797CkSw_njibgz-lOgw&s"
                    }
                    alt="user image"
                    className="rounded-circle"
                    style={{ width: "32px", height: "32px", cursor: "pointer" }}
                    onClick={handleProfilImage}
                />
                </div>
            ) : (
                <>
                <Link to={"/Register"} style={{ textDecoration: "none" }}>
                    <Button variant="warning" className="ml-2">
                    Create Account
                    </Button>
                </Link>
                <Link
                    to={"/Login"}
                    variant="outline-light"
                    className="ml-2 text-black ms-lg-2 p-lg-0 pt-lg-0 p-3 pt-1 fw-medium"
                    style={{
                    backgroundColor: "transparent",
                    border: "none",
                    textDecoration: "none",
                    }}
                >
                    Log In
                </Link>
                </>
            )}
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    {isExtandUserData && (
        <div
        className="p-3 bg-white"
        style={{
            position: "absolute",
            right: "20px",
            border: "3px solid #2222",
        }}
        >
        <div className="d-flex gap-2 align-items-center mb-3">
            <h6>UserName:</h6> <p className="mb-2">{userData.userName}</p>
        </div>
        <div className="d-flex gap-2 mb-5 align-items-center">
            <h6>Email:</h6>
            <p className="mb-2">{userData.Email}</p>
        </div>
        <div className="d-flex gap-3 align-items-center mb-3 justify-content-center">
            <FontAwesomeIcon
            icon={faPen}
            className="text-black-50"
            style={{ cursor: "pointer" }}
            onClick={handlPopupUpdate}
            />{" "}
            <h6>Update</h6>
        </div>
        <div className="d-flex gap-3 align-items-center justify-content-center">
            <FontAwesomeIcon
            icon={faRightFromBracket}
            className="text-black-50"
            style={{ cursor: "pointer" }}
            onClick={handleLogOut}
            />{" "}
            <h6 className="mb-0">Logout</h6>
        </div>
        </div>
    )}
    {isExtandProfilImage && (
        <div
        className="p-3 bg-white d-flex flex-column align-items-center "
        style={{
            position: "absolute",
            right: "40px",
            border: "3px solid #2222",
        }}
        >
        <img
            src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO2DCDcfM7yDAtEo797CkSw_njibgz-lOgw&s"
            }
            alt="profil image"
            className="mb-5"
            style={{ width: "100px", height: "100px" }}
        />
        <div className="d-flex gap-4 align-items-center mb-4 justify-content-center">
            <input
            type="file"
            style={{ width: "100px" }}
            onChange={handleFileChang}
            />
            <div className="d-flex gap-1 align-items-center">
            <button
                className="btn rounded p-1 py-0"
                style={{ background: "#8080803b" }}
                onClick={handleUpdateProfilImg}
            >
                Update
            </button>
            <p
                className="rounded mb-0"
                style={{
                position: "absolute",
                right: "10px",
                background: "#8080803b",
                bottom: "67px",
                padding: "2px",
                }}
            >
                {message}
            </p>
            </div>
        </div>
        <p
            className="btn rounded text-medium p-0 px-1 border"
            style={{ background: "#8080803b" }}
            onClick={() => setIsExtandPeofilImage(false)}
        >
            Save Updates
        </p>
        </div>
    )}
    {popupToUpdate && <DataToUpdate />}
    </div>
);
}

export default Header;
