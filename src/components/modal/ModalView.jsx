import { generateDate } from "../../utils/GenerateDate";

const ModalView = ({ data }) => {
  console.log(data);
  return (
    <>
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
        disabled
        className="input__form"
        value={data.title}
      />
      <br />
      <label htmlFor="body">body</label>
      <br />
      <textarea
        rows={5}
        id="body"
        name="body"
        disabled
        className="input__form"
        value={data.body}
      />
      {/* <br />
      <label htmlFor="archived">archived</label>
      <br />
      <input
        id="archived"
        name="archived"
        disabled
        className="input__form"
        value={data.archived}
      /> */}
      <br />
      <label htmlFor="createdAt">createdAt</label>
      <br />
      <input
        id="createdAt"
        name="createdAt"
        disabled
        className="input__form"
        value={generateDate(data.createdAt)}
      />
    </>
  );
};

export default ModalView;
