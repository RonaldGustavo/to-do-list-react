import { Button } from "react-bootstrap";
import { modals } from "../data";
import { generateDate } from "../utils/GenerateDate";
import ModalComponent from "./Modal";
import { useEffect, useState } from "react";

const DataBook = ({ data, setData }) => {
  const [isSave, setIsSave] = useState(false);

  const [showModal, setShowModal] = useState(null);

  const [selectedBookID, setSelectedBookID] = useState(null);

  const openModal = (modalTitle) => {
    setShowModal(modalTitle);
  };

  const handleModal = (modalTitle, idBook) => {
    openModal(modalTitle);
    setSelectedBookID(idBook);
    if (modalTitle === "View") {
      setIsSave(false);
    } else if (modalTitle === "Update") {
      setIsSave(true);
    } else if (modalTitle === "Delete") {
      setIsSave(true);
    }
  };

  return (
    <>
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        isSave={isSave}
        selectedBookId={selectedBookID}
        data={data}
        setData={setData}
      />
      {data.map((data) => {
        return (
          <>
            <tr>
              <td>{data?.id}</td>
              <td>{data?.title}</td>
              <td>{data?.body}</td>
              <td>{data.archived ? "True" : "False"}</td>
              <td>{generateDate(data.createdAt)}</td>
              <td>
                <div className="action__book">
                  {modals.map((modal) => (
                    <div key={modal?.id}>
                      <Button
                        variant={
                          modal.title === "View"
                            ? "primary"
                            : modal.title === "Update"
                            ? "secondary"
                            : modal.title === "Delete"
                            ? "danger"
                            : "light"
                        }
                        onClick={() => handleModal(modal?.title, data?.id)}
                      >
                        {modal.title}
                      </Button>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
};
export default DataBook;
