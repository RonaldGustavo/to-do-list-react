import { bookData } from "../data";
import { generateDate } from "../utils/GenerateDate";

const DataBook = () => {
  return (
    <>
      {bookData.map((data) => {
        return (
          <>
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
              <td>{data.archived ? "true" : "false"}</td>
              <td>{generateDate(data.createdAt)}</td>
              <td>
                <div className="action__book">
                  <button className="btn btn-sm btn-primary">View</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                  <button className="btn btn-sm btn-secondary ">Update</button>
                </div>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
};
export default DataBook;
