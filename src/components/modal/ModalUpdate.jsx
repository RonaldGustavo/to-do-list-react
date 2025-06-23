import { useState, useEffect } from "react";
import { formatDate } from "../../utils/GenerateDate";

const ModalUpdate = ({ data, setTitle, setBody, setarchived, setcreatedAt }) => {
  const [title, setTitleLocal] = useState("");
  const [body, setBodyLocal] = useState("");
  const [createdAt, setCreatedAtLocal] = useState("");
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    setTitleLocal(data.title || "");
    setBodyLocal(data.body || "");
    setCreatedAtLocal(data.createdAt || "");
    setTitle(data.title || "");
    setBody(data.body || "");
    setcreatedAt(data.createdAt || "");
    setarchived(data.archived || "");
    setLimit(50 - (data.title ? data.title.length : 0));
  }, [data]);

  const handleTitleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= 50) {
      setTitleLocal(newValue);
      setTitle(newValue);
      setLimit(50 - newValue.length);
    }
  };

  const handleBodyChange = (e) => {
    setBodyLocal(e.target.value);
    setBody(e.target.value);
  };

  const handleDateChange = (e) => {
    setCreatedAtLocal(e.target.value);
    setcreatedAt(e.target.value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
      <label htmlFor="id" style={{ fontWeight: 600, marginBottom: 4 }}>ID</label>
      <input id="id" name="id" disabled className="input__form" value={data?.id} />
      <label htmlFor="title" style={{ fontWeight: 600, marginBottom: 4 }}>Title</label>
      <input
        id="title"
        name="title"
        className="input__form"
        placeholder={data.title}
        value={title}
        onChange={handleTitleChange}
        autoFocus
      />
      <span style={{ color: "#38bdf8", fontSize: "0.85rem", alignSelf: "flex-end" }}>{limit} characters left</span>
      <label htmlFor="body" style={{ fontWeight: 600, marginBottom: 4 }}>Description</label>
      <textarea
        id="body"
        name="body"
        className="input__form"
        placeholder={data.body}
        value={body}
        onChange={handleBodyChange}
        rows={3}
      />
      <label htmlFor="createdAt" style={{ fontWeight: 600, marginBottom: 4 }}>Due Date</label>
      <input
        type="date"
        id="createdAt"
        name="createdAt"
        className="input__form"
        value={createdAt ? createdAt : formatDate(data.createdAt)}
        onChange={handleDateChange}
      />
    </form>
  );
};

export default ModalUpdate;
