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
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setarchived] = useState("");
  const [createdAt, setcreatedAt] = useState("");

  const closeModal = () => {
    setShowModal(null);
  };

  const handleDelete = () => {
    alert("Data berhasil dihapus");
    const updatedBook = data.filter((data) => data?.id !== selectedBookId);
    setData(updatedBook);
    setShowModal(null);
  };

  const handleUpdate = () => {
    const updateBook = {
      id: selectedBook?.id,
      title: title,
      body: body,
      archived: archived,
      createdAt: createdAt,
    };

    if (!title && !body && !createdAt) {
      alert("Form wajib di isi semua!!!");
    } else {
      const bookIndex = data.findIndex((book) => book?.id === selectedBookId);

      if (bookIndex !== -1) {
        // Create a new array with the updated user
        const updateBooks = [...data];
        updateBooks[bookIndex] = updateBook;

        setData(updateBooks);
        // Reset the input fields
        setBody("");
        setTitle("");
        setarchived("");
        setcreatedAt("");
      }
      alert("update");
      setShowModal(null);
    }

    console.log(title);
    console.log(createdAt);
  };

  // console.log(isSave);

  const selectedBook = data.find((book) => book?.id === selectedBookId);

  // console.log(selectedBook);
  return (
    <>
      {modals.map((modal) => (
        <Modal
          key={modal.title}
          show={showModal === modal.title}
          onHide={closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{modal.title}</Modal.Title>
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
            <Button variant="secondary" onClick={closeModal}>
              Tutup
            </Button>
            {isSave && (
              <Button
                variant="primary"
                onClick={modal.title === "Update" ? handleUpdate : handleDelete}
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
