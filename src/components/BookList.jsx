import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "author_names", headerName: "Author name", width: 160 },
  { field: "ratingAvg", headerName: "Rating avg", width: 130 },
  { field: "title", headerName: "Title", width: 400 },
  { field: "first_publish_year", headerName: "First publish year", width: 130 },
  { field: "subject", headerName: "Subject", width: 200 },
  { field: "author_birth_date", headerName: "Author Birth Date", width: 130 },
  { field: "author_top_work", headerName: "Author Top Work", width: 130 },
];

const DataTable = ({ bookList }) => {
  const rows = bookList.map((item, index) => {
    return {
      id: index,
      title: item?.work?.title,
      first_publish_year: item?.work?.first_publish_year,
      author_names: item?.work?.author_names.map((author) => author),
      subject: "Want To Read",
      author_birth_date: item?.work?.authorBirthDate
        ? item?.work?.authorBirthDate
        : "NA",
      author_top_work: item?.work?.authorTopWork
        ? item?.work?.authorTopWork
        : "NA",
      ratingAvg: "4⭐",
    };
  });
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 50 },
          },
        }}
        pageSizeOptions={[50, bookList.length]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
