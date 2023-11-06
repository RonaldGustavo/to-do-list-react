import DataBook from "../components/DataBook";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Body</th>
              <th>Archived</th>
              <th>CreatedAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <DataBook />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;
