import { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { store } from "../../App";
function DataToUpdate() {
const [show, setShow] = useState(true);
const { userData } = useContext(store);
const [newUserData, setNewUserData] = useState({
    userName: "",
    Email: "",
});

const onClose = () => {
    setShow(false);
};

const handleUpdate = async () => {
    //fetch url
    const response = await fetch(
    `http://localhost:3000/update/${userData.id}/data`,
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserData),
    }
    ).catch((err) => console.log("error", err));

    const result = await response.json();

    setNewUserData(result.data);
    onClose(); // Close the modal after updating
    location.reload();
};

return (
    <Modal show={show} onHide={close} style={{ marginTop: "130px" }}>
    <Modal.Header closeButton onClick={() => setShow(!show)}>
        <Modal.Title>Update User Data</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
        <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter username"
            value={newUserData.userName}
            onChange={(e) =>
                setNewUserData({ ...newUserData, userName: e.target.value })
            }
            />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            type="email"
            placeholder="Enter email"
            value={newUserData.Email}
            onChange={(e) =>
                setNewUserData({ ...newUserData, Email: e.target.value })
            }
            />
        </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
        Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
        Update
        </Button>
    </Modal.Footer>
    </Modal>
);
}

export default DataToUpdate;
