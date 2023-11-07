import { Button, Modal } from "react-bootstrap";
import { bookData, modals } from "../data";
import ModalView from "./modal/ModalView";
import ModalDelete from "./modal/ModalDelete";

const ModalComponent = ({
  showModal,
  setShowModal,
  isSave,
  selectedBookId,
}) => {
  const closeModal = () => {
    setShowModal(null);
  };

  const handleDelete = () => {
    alert("Data berhasil dihapus");
    setShowModal(null);
  };

  const handleUpdate = () => {
    alert("update");
    setShowModal(null);
  };

  console.log(isSave);

  const selectedBook = bookData.find((book) => book.id === selectedBookId);

  console.log(selectedBook);
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
              <p>Updated modal</p>
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
                save
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      ))}
    </>
  );
};

export default ModalComponent;
