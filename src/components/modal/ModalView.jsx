import { generateDate } from "../../utils/GenerateDate";

const ModalView = ({ data }) => {
  return (
    <div style={{ position: 'relative', paddingTop: 8 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
        <label htmlFor="id" style={{ fontWeight: 600, marginBottom: 4 }}>ID</label>
        <input
          id="id"
          name="id"
          disabled
          className="input__form"
          value={data?.id}
        />
        <label htmlFor="title" style={{ fontWeight: 600, marginBottom: 4 }}>Title</label>
        <input
          id="title"
          name="title"
          disabled
          className="input__form"
          value={data.title}
        />
        <label htmlFor="body" style={{ fontWeight: 600, marginBottom: 4 }}>Description</label>
        <textarea
          rows={3}
          id="body"
          name="body"
          disabled
          className="input__form"
          value={data.body}
        />
        <label htmlFor="createdAt" style={{ fontWeight: 600, marginBottom: 4 }}>Due Date</label>
        <input
          id="createdAt"
          name="createdAt"
          disabled
          className="input__form"
          value={generateDate(data.createdAt)}
        />
      </div>
    </div>
  );
};

export default ModalView;
