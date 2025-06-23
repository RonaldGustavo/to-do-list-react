import { Button, Modal } from "react-bootstrap";
import { modals } from "../data";
import ModalView from "./modal/ModalView";
import ModalDelete from "./modal/ModalDelete";
import ModalUpdate from "./modal/ModalUpdate";
import { useState } from "react";

const ModalComponent = ({
  showModal,
  setShowModal,
  isSave,
  selectedBookId,
  data,
  setData,
  showToast,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setarchived] = useState("");
  const [createdAt, setcreatedAt] = useState("");

  const closeModal = () => {
    setShowModal(null);
  };

  const handleDelete = () => {
    const updatedBook = data.filter((data) => data?.id !== selectedBookId);
    setData(updatedBook);
    setShowModal(null);
    if (showToast) showToast("Task deleted successfully", "delete");
  };

  const handleUpdate = () => {
    const updateBook = {
      id: selectedBook?.id,
      title: title,
      body: body,
      archived: archived,
      createdAt: createdAt,
      status: selectedBook?.status || "todo",
    };
    if (!title && !body && !createdAt) {
      if (showToast) showToast("All fields are required!", "error");
      return;
    } else {
      const bookIndex = data.findIndex((book) => book?.id === selectedBookId);
      if (bookIndex !== -1) {
        const updateBooks = [...data];
        updateBooks[bookIndex] = updateBook;
        setData(updateBooks);
        setBody("");
        setTitle("");
        setarchived("");
        setcreatedAt("");
        if (showToast) showToast("Task updated successfully", "update");
      }
      setShowModal(null);
    }
  };

  const selectedBook = data.find((book) => book?.id === selectedBookId);

  return (
    <>
      {modals.map((modal) => (
        <Modal
          key={modal.title}
          show={showModal === modal.title}
          onHide={closeModal}
          centered
        >
          <Modal.Header closeButton className="modal-header">
            <Modal.Title className="modal-title">{modal.title} Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modal.title === "View" ? (
              <ModalView data={selectedBook} />
            ) : modal.title === "Update" ? (
              <ModalUpdate
                data={selectedBook}
                setTitle={setTitle}
                setBody={setBody}
                setarchived={setarchived}
                setcreatedAt={setcreatedAt}
              />
            ) : (
              <ModalDelete data={selectedBook} />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-cancel" onClick={closeModal}>
              Cancel
            </Button>
            {isSave && (
              <Button
                className={
                  modal.title === "Update" ? "btn-save" : "btn-delete"
                }
                onClick={
                  modal.title === "Update" ? handleUpdate : handleDelete
                }
              >
                {modal.title === "Update" ? "Save" : "Delete"}
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      ))}
    </>
  );
};

export default ModalComponent;
