import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const today = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

const toDateObj = (val) => {
  if (!val) return null;
  const d = new Date(val);
  return isNaN(d.getTime()) ? null : d;
};

const ModalUpdate = ({ data, setTitle, setBody, setarchived, setcreatedAt, showToast }) => {
  const [title, setTitleLocal] = useState("");
  const [body, setBodyLocal] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    setTitleLocal(data.title || "");
    setBodyLocal(data.body || "");
    const d = toDateObj(data.createdAt);
    setSelectedDate(d);
    setTitle(data.title || "");
    setBody(data.body || "");
    setcreatedAt(data.createdAt || "");
    setarchived(data.archived || "");
    setLimit(50 - (data.title?.length || 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleTitleChange = (e) => {
    if (e.target.value.length <= 50) {
      setTitleLocal(e.target.value);
      setTitle(e.target.value);
      setLimit(50 - e.target.value.length);
    }
  };

  const handleDateChange = (date) => {
    if (date && date < today()) {
      if (showToast) showToast("Tanggal tidak boleh sebelum hari ini!", "delete");
      return;
    }
    setSelectedDate(date);
    setcreatedAt(date ? date.toISOString() : "");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div>
        <label>ID</label>
        <input className="input__form" disabled value={data?.id} />
      </div>
      <div>
        <label>Title</label>
        <input
          className="input__form"
          placeholder={data.title}
          value={title}
          onChange={handleTitleChange}
          autoFocus
        />
        <p className="char-hint">{limit} characters left</p>
      </div>
      <div>
        <label>Description</label>
        <textarea
          className="input__form"
          placeholder={data.body}
          value={body}
          onChange={(e) => { setBodyLocal(e.target.value); setBody(e.target.value); }}
          rows={3}
        />
      </div>
      <div>
        <label>Due Date</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={today()}
          dateFormat="dd MMM yyyy"
          placeholderText="Pilih tanggal..."
          className="input__form datepicker-input"
          calendarClassName="dark-calendar"
          wrapperClassName="datepicker-wrapper"
          popperPlacement="bottom-start"
          showPopperArrow={false}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default ModalUpdate;
