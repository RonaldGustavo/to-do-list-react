import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { generateId } from "../../utils/GenerateID";
import { handleClear } from "../../utils/HandleClear";

const today = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

const ModalCreate = ({ setShowModal, showModal, data, setData, showToast }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setarchived] = useState("");
  const [createdAt, setcreatedAt] = useState(null);
  const [limit, setLimit] = useState(50);
  const clearState = [setTitle, setBody, setarchived];

  const closeModal = () => {
    setShowModal(null);
    handleClear(clearState);
    setcreatedAt(null);
    setLimit(50);
  };

  const handleCreate = () => {
    if (!title || !body || !createdAt) {
      if (showToast) showToast("Semua field wajib diisi!", "delete");
      return;
    }
    if (createdAt < today()) {
      if (showToast) showToast("Tanggal tidak boleh sebelum hari ini!", "delete");
      return;
    }
    const newBook = {
      id: generateId(),
      title,
      body,
      archived,
      createdAt: createdAt.toISOString(),
      status: "todo",
    };
    setData([...data, newBook]);
    handleClear(clearState);
    setcreatedAt(null);
    setLimit(50);
    if (showToast) showToast("Task berhasil dibuat!", "create");
    setShowModal(null);
  };

  const handleTitleChange = (e) => {
    if (e.target.value.length <= 50) {
      setTitle(e.target.value);
      setLimit(50 - e.target.value.length);
    }
  };

  return (
    <Modal show={showModal === "create"} onHide={closeModal} centered>
      <Modal.Header>
        <Modal.Title className="modal-title">Create New Task</Modal.Title>
        <button className="custom-close" onClick={closeModal} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </Modal.Header>

      <Modal.Body>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <label htmlFor="c-title">Title</label>
            <input
              id="c-title"
              className="input__form"
              placeholder="Enter task title"
              value={title}
              onChange={handleTitleChange}
              autoFocus
            />
            <p className="char-hint">{limit} characters left</p>
          </div>
          <div>
            <label htmlFor="c-body">Description</label>
            <textarea
              id="c-body"
              className="input__form"
              placeholder="Enter task description"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={3}
            />
          </div>
          <div>
            <label>Due Date</label>
            <DatePicker
              selected={createdAt}
              onChange={(date) => setcreatedAt(date)}
              minDate={today()}
              dateFormat="dd MMM yyyy"
              placeholderText="Pilih tanggal..."
              className="input__form datepicker-input"
              calendarClassName="dark-calendar"
              wrapperClassName="datepicker-wrapper"
              popperPlacement="bottom-start"
              showPopperArrow={false}
              autoComplete="off"
            />
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button className="btn-cancel" onClick={closeModal}>Cancel</Button>
        <Button className="btn-save" onClick={handleCreate}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCreate;
