const ModalDelete = ({ data }) => {
  return (
    <>
      <p>
        Are You sure want to delete ID: <b> {data?.id}</b> ?
      </p>
    </>
  );
};

export default ModalDelete;
