import React, { useEffect, useState } from "react";
import DataBook from "../components/DataBook";
import HeaderLayout from "../components/HeaderLayout";
import { bookData } from "../data";
import ModalComponent from "../components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const statusList = [
  { key: "todo", label: "To Do" },
  { key: "inprogress", label: "In Progress" },
  { key: "done", label: "Done" },
];

const HomePage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [draggedTask, setDraggedTask] = useState(null);
  const [dragOverStatus, setDragOverStatus] = useState(null);
  const [modalState, setModalState] = useState({ showModal: null, isSave: false, selectedBookId: null });

  useEffect(() => {
    setData(bookData);
  }, []);

  const filterData = data.filter((item) => {
    const searchText = search.toLowerCase();
    return (
      item.id.toLowerCase().includes(searchText) ||
      item.title.toLowerCase().includes(searchText) ||
      item.body.toLowerCase().includes(searchText) ||
      item.createdAt.toString().toLowerCase().includes(searchText)
    );
  });

  const onDragStart = (task) => {
    setDraggedTask(task);
  };
  const onDragOver = (e, status) => {
    e.preventDefault();
    setDragOverStatus(status);
  };
  const onDrop = (status) => {
    if (!draggedTask || draggedTask.status === status) return;
    setData((prev) =>
      prev.map((item) =>
        item.id === draggedTask.id ? { ...item, status } : item
      )
    );
    setDraggedTask(null);
    setDragOverStatus(null);
    showToast('Task moved to ' + status.replace('inprogress', 'In Progress').replace('todo', 'To Do').replace('done', 'Done'), 'update');
  };

  const showToast = (message, type) => {
    if (type === "create") toast.success(message, { position: "top-right" });
    else if (type === "update") toast.info(message, { position: "top-right" });
    else if (type === "delete") toast.error(message, { position: "top-right" });
    else toast(message, { position: "top-right" });
  };

  const handleModal = (modalTitle, idBook, isSave = false) => {
    setModalState({ showModal: modalTitle, isSave, selectedBookId: idBook });
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="todolist-title">Todolist Board Ronald Gustavo</h1>
        <div className="wrapper__header">
          <HeaderLayout
            data={filterData}
            setData={setData}
            setSearch={setSearch}
            showToast={showToast}
          />
        </div>
        <div className="board-grid">
          {statusList.map((col) => (
            <div
              key={col.key}
              className={`board-column${dragOverStatus === col.key ? ' drag-over' : ''}`}
              onDragOver={(e) => onDragOver(e, col.key)}
              onDrop={() => onDrop(col.key)}
            >
              <h2 className={col.key}>{col.label}</h2>
              <DataBook
                data={filterData.filter((item) => item.status === col.key)}
                setData={setData}
                onDragStart={onDragStart}
                dragOverId={null}
                onDragOver={() => {}}
                onDrop={() => {}}
                boardMode={true}
                handleModal={handleModal}
              />
            </div>
          ))}
        </div>
        <ModalComponent
          showModal={modalState.showModal}
          setShowModal={(val) => setModalState((prev) => ({ ...prev, showModal: val }))}
          isSave={modalState.isSave}
          selectedBookId={modalState.selectedBookId}
          data={data}
          setData={setData}
          showToast={showToast}
        />
        <ToastContainer autoClose={2200} hideProgressBar newestOnTop closeOnClick pauseOnHover position="top-right" />
      </div>
    </>
  );
};

export default HomePage;
