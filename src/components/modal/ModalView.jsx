import { generateDate } from "../../utils/GenerateDate";

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#e5e7eb"/>
    <path d="M7 7L13 13M13 7L7 13" stroke="#23272f" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ModalView = ({ data, onClose }) => {
  return (
    <div style={{ position: 'relative', paddingTop: 8 }}>
      <button
        type="button"
        className="btn-close custom-close"
        aria-label="Close"
        onClick={onClose}
        style={{ background: 'none', border: 'none', padding: 0, position: 'absolute', top: 8, right: 8, cursor: 'pointer', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
      >
        <CloseIcon />
      </button>
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
