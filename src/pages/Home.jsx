import { useEffect, useState } from "react";
import DataBook from "../components/DataBook";
import HeaderLayout from "../components/HeaderLayout";
import { bookData } from "../data";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setData(bookData);
  }, []);

  const filterData = data.filter((data) => {
    const searchText = search.toLowerCase();
    return (
      data.id.toLowerCase().includes(searchText) ||
      data.title.toLowerCase().includes(searchText) ||
      data.body.toLowerCase().includes(searchText) ||
      // data.archived.toString().includes(searchText) ||
      data.createdAt.toString().toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <div className="container-fluid">
        <h1 style={{ textAlign: "center", textShadow: "2px 2px 4px" }}>
          Catatan App Ronald Gustavo
        </h1>
        <div
          className="wrapper__header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <HeaderLayout
            data={filterData}
            setData={setData}
            setSearch={setSearch}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Body</th>
              {/* <th>Archived</th> */}
              <th>CreatedAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterData.length > 0 ? (
              <DataBook data={filterData} setData={setData} />
            ) : (
              <p style={{ color: "red", fontSize: "1.5rem" }}>
                {" "}
                tidak ada data!
              </p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;
