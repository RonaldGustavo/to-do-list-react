import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { generateId } from "../../utils/GenerateID";
import { handleClear } from "../../utils/HandleClear";

const ModalCreate = ({ setShowModal, showModal, data, setData }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setarchived] = useState("");
  const [createdAt, setcreatedAt] = useState("");
  const [limit, setLimit] = useState(50);
  const clearState = [setTitle, setBody, setarchived, setcreatedAt];

  const closeModal = () => {
    setShowModal(null);
    handleClear(clearState);
  };

  const id = generateId();
  // console.log("test", data);
  const handleCreate = () => {
    if (!title || !body || !createdAt) {
      alert("wajib di isi");
    } else {
      const newBook = {
        id: id,
        title: title,
        body: body,
        archived: archived,
        createdAt: createdAt,
      };

      const newData = [...data, newBook];
      setData(newData);

      handleClear(clearState);

      alert("berhasil");
      setShowModal(null);
    }
  };

  const handleTitleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= 50) {
      setTitle(newValue);
      setLimit(50 - newValue.length);
    }
  };

  return (
    <>
      <Modal key={"create"} show={showModal === "create"} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="title">title</label>
            <br />
            <input
              id="title"
              name="title"
              className="input__form"
              placeholder="input Title"
              value={title}
              onChange={handleTitleChange}
            />
            <br />
            <p style={{ color: "red", fontSize: "0.8rem" }}>
              {limit} left characters
            </p>
            <label htmlFor="body">body</label>
            <br />
            <textarea
              id="body"
              name="body"
              className="input__form"
              placeholder={`Input Body (Max ${limit} characters)`}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <br />
            {/* <label htmlFor="archived">archived</label>
            <br />
            <select
              id="archived"
              name="archived"
              className="input__form"
              value={archived}
              onChange={(e) => setarchived(e.target.value)}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select> */}
            <label htmlFor="createdAt">createdAt</label>
            <br />
            <input
              type="date"
              id="createdAt"
              name="createdAt"
              className="input__form"
              value={createdAt}
              onChange={(e) => setcreatedAt(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Tutup
          </Button>
          <Button onClick={handleCreate}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreate;
