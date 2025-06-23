import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { generateId } from "../../utils/GenerateID";
import { handleClear } from "../../utils/HandleClear";

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#e5e7eb"/>
    <path d="M7 7L13 13M13 7L7 13" stroke="#23272f" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ModalCreate = ({ setShowModal, showModal, data, setData, showToast }) => {
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
  const handleCreate = () => {
    if (!title || !body || !createdAt) {
      if (showToast) showToast('All fields are required!', 'error');
    } else {
      const newBook = {
        id: id,
        title: title,
        body: body,
        archived: archived,
        createdAt: createdAt,
        status: 'todo',
      };
      const newData = [...data, newBook];
      setData(newData);
      handleClear(clearState);
      if (showToast) showToast('Task created successfully', 'create');
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
    <Modal key={"create"} show={showModal === "create"} onHide={closeModal} centered dialogClassName="modal">
      <Modal.Header style={{ border: 'none', background: 'transparent', display: 'flex', alignItems: 'center' }}>
        <Modal.Title className="modal-title" style={{ flex: 1 }}>Create New Task</Modal.Title>
        <button
          type="button"
          className="btn-close custom-close"
          aria-label="Close"
          onClick={closeModal}
          style={{ background: 'none', border: 'none', padding: 0, marginLeft: 8, cursor: 'pointer', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <CloseIcon />
        </button>
      </Modal.Header>
      <Modal.Body>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label htmlFor="title" style={{ fontWeight: 600, marginBottom: 4 }}>Title</label>
          <input
            id="title"
            name="title"
            className="input__form"
            placeholder="Input Title"
            value={title}
            onChange={handleTitleChange}
            autoFocus
          />
          <span style={{ color: '#38bdf8', fontSize: '0.85rem', alignSelf: 'flex-end' }}>{limit} characters left</span>
          <label htmlFor="body" style={{ fontWeight: 600, marginBottom: 4 }}>Description</label>
          <textarea
            id="body"
            name="body"
            className="input__form"
            placeholder={`Input Description (Max 50 characters)`}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={3}
          />
          <label htmlFor="createdAt" style={{ fontWeight: 600, marginBottom: 4 }}>Due Date</label>
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
        <Button className="btn-cancel" onClick={closeModal}>
          Cancel
        </Button>
        <Button className="btn-save" onClick={handleCreate}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCreate;
