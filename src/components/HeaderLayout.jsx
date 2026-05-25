import { useState } from "react";
import ModalCreate from "./modal/ModalCreate";

const HeaderLayout = ({ data, setData, setSearch, showToast }) => {
  const [showModal, setShowModal] = useState(null);

  return (
    <>
      <ModalCreate
        showModal={showModal}
        setShowModal={setShowModal}
        data={data}
        setData={setData}
        showToast={showToast}
      />
      <div className="header-actions">
        <input
          type="text"
          placeholder="Search tasks..."
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn-create" onClick={() => setShowModal("create")}>
          + New Task
        </button>
      </div>
    </>
  );
};

export default HeaderLayout;
