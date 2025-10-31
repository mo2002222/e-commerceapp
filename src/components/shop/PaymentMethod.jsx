import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import propTypes from "prop-types";
import { useState } from "react";

const MyVerticallyCenteredModal = (props) => {
    const [payMethod, setPayMethod] = useState("visa");

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
            Select Your Payment Method
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="methods row mb-3">
            <div
                className="col-6"
                style={{ position: "relative", cursor: "pointer" }}
                onClick={() => {
                setPayMethod("visa");
                }}
            >
                <span
                style={{
                    background: `${payMethod === "visa" ? "blue" : "gray"}`,
                    height: "3px",
                    width: "100%",
                    position: "absolute",
                    borderRadius: "100px",
                }}
                ></span>
                <img
                className="mt-3"
                src="/assets/images/pyment/64px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                />
            </div>
            <div
                className="col-6"
                style={{ position: "relative", cursor: "pointer" }}
                onClick={() => {
                setPayMethod("paypal");
                }}
            >
                <span
                style={{
                    background: `${payMethod === "visa" ? "gray" : "blue"}`,
                    height: "3px",
                    width: "90%",
                    position: "absolute",
                    borderRadius: "100px",
                }}
                ></span>
                <img
                className="mt-3"
                src="src/assets/images/pyment/64px-PayPal.svg.png"
                alt="PayPal log"
                style={{ width: "90px" }}
                />
            </div>
            </div>
            {payMethod === "visa" ? (
            <>
                <h5 className="text-center fw-bold mb-3"> Credit Card </h5>
                <input
                type="text"
                placeholder="Cardholer Name"
                className="border-bottom w-100 mb-4"
                style={{ outline: "none", border: "none" }}
                />
                <input
                type="text"
                placeholder="Card Number"
                className="border-bottom w-100 mb-4"
                style={{ outline: "none", border: "none" }}
                />
                <div className="senstiv-info d-flex gap-2 align-items-center mb-4">
                <input
                    type="text"
                    placeholder="Expiration Date"
                    className="border-bottom"
                    style={{ outline: "none", border: "none" }}
                />
                <input
                    type="text"
                    placeholder="CVV"
                    className="border-bottom w-50 ms-2"
                    style={{ outline: "none", border: "none" }}
                />
                </div>

                <div className="apply-btn text-center mb-4">
                <div
                    className="btn rounded-pill text-white"
                    style={{ background: "green" }}
                >
                    Add Card
                </div>
                </div>
                <p className="text-black-50 mb-0" style={{ lineHeight: "20px" }}>
                Payment Disclaimer: In no event Shall payment or partial payment
                by owner for any matrial or service.{" "}
                </p>
            </>
            ) : (
            <>
                <h5 className="text-center fw-bold mb-3"> Paypal Acount Info </h5>
                <input
                type="text"
                placeholder="Enter Your Email"
                className="border-bottom w-100 mb-4"
                style={{ outline: "none", border: "none" }}
                />
                <input
                type="text"
                placeholder="Enter Your Name"
                className="border-bottom w-100 mb-4"
                style={{ outline: "none", border: "none" }}
                />
                <input
                type="text"
                placeholder="Extra Info"
                className="border-bottom w-100 mb-4"
                style={{ outline: "none", border: "none" }}
                />
                <div className="apply-btn text-center mb-4">
                <div
                    className="btn btn-primary rounded-pill text-white"
                    // style={{ background: "green" }}
                >
                    Add Paypal
                </div>
                </div>
                <p className="text-black-50 mb-0" style={{ lineHeight: "20px" }}>
                Payment Disclaimer: In no event Shall payment or partial payment
                by owner for any matrial or service.{" "}
                </p>
            </>
            )}
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
    };
    export default MyVerticallyCenteredModal;

    MyVerticallyCenteredModal.propTypes = {
    onHide: propTypes.string,
    };
