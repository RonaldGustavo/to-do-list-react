import { useState } from "react";
import ModalCreate from "./modal/ModalCreate";

const HeaderLayout = ({ data, setData, setSearch }) => {
  const [showModal, setShowModal] = useState(null);

  const openModal = (modalTitle) => {
    setShowModal(modalTitle);
  };

  const handleModal = (modalTitle) => {
    openModal(modalTitle);
  };

  return (
    <>
      <ModalCreate
        showModal={showModal}
        setShowModal={setShowModal}
        data={data}
        setData={setData}
      />
      <input
        type="text"
        placeholder="Input Search..."
        style={{ borderRadius: "7px", padding: "10px", fontSize: "0.9rem" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-warning" onClick={() => handleModal("create")}>
        Create
      </button>
    </>
  );
};

export default HeaderLayout;
