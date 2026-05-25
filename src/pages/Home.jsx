import { useEffect, useState } from "react";
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
    if (draggedTask.status === 'done') {
      showToast('Task yang sudah Done tidak bisa dipindahkan kembali!', 'delete');
      setDraggedTask(null);
      setDragOverStatus(null);
      return;
    }
    setData((prev) =>
      prev.map((item) =>
        item.id === draggedTask.id ? { ...item, status } : item
      )
    );
    setDraggedTask(null);
    setDragOverStatus(null);
    const labelMap = { inprogress: 'In Progress', todo: 'To Do', done: 'Done' };
    showToast(`Task moved to ${labelMap[status]}`, 'update');
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
          {statusList.map((col) => {
            const colItems = filterData.filter((item) => item.status === col.key);
            const isDragBlocked = draggedTask?.status === 'done' && col.key !== 'done';
            return (
              <div
                key={col.key}
                className={`board-column board-column--${col.key}${dragOverStatus === col.key ? ' drag-over' : ''}${isDragBlocked ? ' drag-blocked' : ''}`}
                onDragOver={(e) => onDragOver(e, col.key)}
                onDrop={() => onDrop(col.key)}
              >
                <div className="board-column-header">
                  <span className={`board-col-label board-col-label--${col.key}`}>{col.label}</span>
                  <span className={`board-col-count board-col-count--${col.key}`}>{colItems.length}</span>
                </div>
                <DataBook
                  data={colItems}
                  onDragStart={onDragStart}
                  boardMode={true}
                  handleModal={handleModal}
                />
                {colItems.length === 0 && (
                  <div className="board-empty-state">No tasks here</div>
                )}
              </div>
            );
          })}
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
