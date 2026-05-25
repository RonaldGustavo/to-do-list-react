import { generateDate } from "../../utils/GenerateDate";

const ModalView = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div>
        <label>ID</label>
        <input className="input__form" disabled value={data?.id} />
      </div>
      <div>
        <label>Title</label>
        <input className="input__form" disabled value={data?.title} />
      </div>
      <div>
        <label>Description</label>
        <textarea className="input__form" rows={3} disabled value={data?.body} />
      </div>
      <div>
        <label>Due Date</label>
        <input className="input__form" disabled value={generateDate(data?.createdAt)} />
      </div>
    </div>
  );
};

export default ModalView;
