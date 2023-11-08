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

  console.log(data);

  // const handleSearch = (e) => {
  //   const currentValue = e.target.value;
  //   setSearch(currentValue);
  // };

  const searchText = search.toLowerCase();

  const filterData = data.filter((data) => {
    return (
      data.id.toString().includes(searchText) ||
      data.title.toLowerCase().includes(searchText) ||
      data.body.toLowerCase().includes(searchText) ||
      data.archived.toString().includes(searchText)
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
          <HeaderLayout data={filterData} setData={setData} />
        </div>
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
            {data.length > 0 ? (
              <DataBook data={data} setData={setData} />
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
