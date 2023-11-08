import { useEffect, useState } from "react";
import { formatDate } from "../../utils/GenerateDate";

const ModalUpdate = ({
  data,
  setTitle,
  setBody,
  setarchived,
  setcreatedAt,
}) => {
  const [title, setTitleLocal] = useState("");
  const [body, setbodyLocal] = useState("");
  const [archived, setarchivedLocal] = useState("");
  const [createdAt, setcreatedAtLocal] = useState("");
  const [limit, setLimit] = useState(50);

  const originalDate = new Date(data.createdAt);

  useEffect(() => {
    setTitle(title || data.title);
    setBody(body ? body : data.body);
    setcreatedAt(createdAt ? createdAt : data.createdAt);
    setarchived(archived ? archived : data.archived);
    setLimit(50 - (body ? body.length : data.body.length));
  }, [title, body, archived, createdAt]);

  const handleBodyChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= 50) {
      setbodyLocal(newValue);
      setLimit(50 - newValue.length);
    }
  };

  //   console.log(data);
  return (
    <>
      <form>
        <label htmlFor="id">id</label>
        <br />
        <input
          id="id"
          name="id"
          disabled
          className="input__form"
          value={data?.id}
        />
        <br />
        <label htmlFor="title">title</label>
        <br />
        <input
          id="title"
          name="title"
          className="input__form"
          placeholder={data.title}
          value={title}
          onChange={(e) => setTitleLocal(e.target.value)}
        />
        <br />
        <label htmlFor="body">body</label>
        <br />
        <textarea
          id="body"
          name="body"
          className="input__form"
          placeholder={data.body}
          value={body}
          onChange={handleBodyChange}
        />
        <br />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {limit} left characters
        </p>
        <label htmlFor="archived">archived</label>
        <br />
        <select
          id="archived"
          name="archived"
          className="input__form"
          value={archived ? archived : data.archived}
          onChange={(e) => setarchivedLocal(e.target.value)}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <br />
        <label htmlFor="createdAt">createdAt</label>
        <br />
        <input
          type="date"
          id="createdAt"
          name="createdAt"
          className="input__form"
          value={createdAt ? createdAt : formatDate(originalDate)}
          onChange={(e) => setcreatedAtLocal(e.target.value)}
        />
      </form>
    </>
  );
};

export default ModalUpdate;
