import { Button } from "react-bootstrap";
import { generateDate } from "../utils/GenerateDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const DataBook = ({ data, onDragStart, boardMode, handleModal }) => {
  return (
    <>
      {data.map((data) => (
        <div
          key={data.id}
          className={`task-card jira-card-view`}
          draggable={boardMode}
          onDragStart={boardMode ? () => onDragStart(data) : undefined}
          style={{
            margin: "0 auto 18px auto",
            cursor: boardMode ? "grab" : "default",
            position: "relative",
            paddingBottom: 44,
          }}
        >
          <div className="task-card-header">
            <span className="task-card-title">{data?.title}</span>
            <span className="task-card-date">
              {generateDate(data.createdAt)}
            </span>
          </div>
          <div className="task-card-body">{data?.body}</div>
          <div className="action__book">
            <Button
              className="btn-view"
              size="sm"
              onClick={() => handleModal("View", data?.id, false)}
            >
              <FontAwesomeIcon icon={faEye} color="#22c55e" />
            </Button>
            <Button
              className="btn-update"
              size="sm"
              onClick={() => handleModal("Update", data?.id, true)}
            >
              <FontAwesomeIcon icon={faPen} color="#f59e42" />
            </Button>
            <Button
              className="btn-delete"
              size="sm"
              onClick={() => handleModal("Delete", data?.id, true)}
            >
              <FontAwesomeIcon icon={faTrash} color="#ef4444" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};
export default DataBook;
