import { Button } from "react-bootstrap";
import { generateDate } from "../utils/GenerateDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash, faLock } from "@fortawesome/free-solid-svg-icons";

const DataBook = ({ data, onDragStart, boardMode, handleModal }) => {
  return (
    <div className="board-col-body">
      {data.map((item) => {
        const isDone = item.status === "done";
        return (
          <div
            key={item.id}
            className={`task-card${isDone ? " card-done-locked" : ""}`}
            draggable={boardMode && !isDone}
            onDragStart={boardMode && !isDone ? () => onDragStart(item) : undefined}
          >
            <div className={`card-status-bar card-status-bar--${item.status}`} />

            <div className="task-card-header">
              <span className="task-card-title">{item.title}</span>
              {isDone && (
                <span className="card-lock-badge" title="Tidak bisa dipindahkan">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              )}
            </div>

            <div className="task-card-date">{generateDate(item.createdAt)}</div>
            <div className="task-card-body">{item.body}</div>

            <div className="action__book">
              <Button
                className="btn-view"
                size="sm"
                title="View"
                onClick={() => handleModal("View", item.id, false)}
              >
                <FontAwesomeIcon icon={faEye} />
              </Button>
              <Button
                className="btn-update"
                size="sm"
                title="Edit"
                onClick={() => handleModal("Update", item.id, true)}
              >
                <FontAwesomeIcon icon={faPen} />
              </Button>
              <Button
                className="btn-delete"
                size="sm"
                title="Delete"
                onClick={() => handleModal("Delete", item.id, true)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataBook;
