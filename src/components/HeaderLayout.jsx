import { useState } from "react";
import ModalCreate from "./modal/ModalCreate";

const HeaderLayout = ({ data, setData, setSearch, showToast }) => {
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
        showToast={showToast}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <input
          type="text"
          placeholder="Search your tasks..."
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" style={{ fontWeight: 600, fontSize: '1rem', padding: '10px 22px', background: 'linear-gradient(90deg, #38bdf8 60%, #61a5ff 100%)', color: '#fff' }} onClick={() => handleModal("create")}>+ Create</button>
      </div>
    </>
  );
};

export default HeaderLayout;
