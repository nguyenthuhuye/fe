import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Input from "@mui/material/Input";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Content = () => {
  const columns = [
    { id: "author", label: "Author", minWidth: 170 },
    { id: "book", label: "Book", minWidth: 100 },
    {
      id: "publish",
      label: "Publish",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "year",
      label: "Year",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "action",
      label: "Action",
      minWidth: 170,
      align: "right",
      cell: function cell(row) {
        return (
          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-m043pk-MuiTableCell-root">
            <Button
              onClick={() => {
                handleOpenEdit();
                setId(row._id);
                setBook(row.author);
                setAuthor(row.book);
                setPublish(row.publish);
                setYear(row.year);
              }}
            >
              <AutoFixHighIcon />
            </Button>
            <Button
              onClick={() => {
                handleOpenDelete();
                setId(row._id);
              }}
            >
              <DeleteIcon />
            </Button>
          </td>
        );
      },
    },
  ];
  const [showLoader, setShowLoader] = React.useState(false);
  const [rows, setRows] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [author, setAuthor] = React.useState(null);
  const [book, setBook] = React.useState(null);
  const [publish, setPublish] = React.useState(null);
  const [year, setYear] = React.useState(null);

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = () => {
    setShowLoader(true);
    axios({
      method: "GET",
      url: "http://localhost:3009/items",
    })
      .then((res) => {
        console.log(res, "res");
        setRows(res.data.contend);
        setShowLoader(false);
      })
      .catch((error) => {
        // setShowLoader(true);
      });
  };

  const handleDeleteItems = (id) => {
    setShowLoader(true);
    axios({
      method: "DELETE",
      url: `http://localhost:3009/items/${id}`,
    })
      .then((res) => {
        handleGetData();
        handleCloseDelete();
        setShowLoader(false);
      })
      .catch((error) => {});
  };

  const handleAddItems = () => {
    setShowLoader(true);
    const data = {
      author: author,
      book: book,
      publish: publish,
      year: year,
    };
    axios({
      method: "POST",
      url: `http://localhost:3009/items`,
      data: data,
    })
      .then((res) => {
        handleGetData();
        handleClose();
        setShowLoader(false);
      })
      .catch((error) => {});
  };

  const handleUpdateItems = (id) => {
    setShowLoader(true);
    const data = {
      author: author,
      book: book,
      publish: publish,
      year: year,
    };
    axios({
      method: "PUT",
      url: `http://localhost:3009/items/${id}`,
      data: data,
    })
      .then((res) => {
        handleGetData();
        handleCloseEdit();
        setShowLoader(false);
      })
      .catch((error) => {});
  };

  return (
    <div className="content">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1%",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>
            Danh sách sinh viên
          </div>
          <Button style={{ backgroundColor: "#e9c2c2" }} onClick={handleOpen}>
            <AddCircleIcon />
          </Button>
        </Box>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        const value = row[column.id];

                        const customProps =
                          "cell" in column
                            ? {
                                component: () => column.cell(row),
                              }
                            : {};

                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            {...customProps}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {showLoader && (
          <div className="loading-overlay">
            <GridLoader
              color={"#50E3C2"}
              loading={showLoader}
              size={50}
              style={{ position: "fixed", top: "30%", bottom: "0" }}
            />
          </div>
        )}
      </Paper>
      {/* add */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
              Thêm mới
            </Typography>
            <div
              style={{
                marginTop: "2%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4>Author:</h4>
              <Input
                placeholder="Nhập tên"
                onChange={(value) => {
                  setAuthor(value.target.value);
                }}
              />
              <h4>Book :</h4>
              <Input
                placeholder="Nhập book"
                onChange={(value) => {
                  setBook(value.target.value);
                }}
              />
              <h4>Publish :</h4>
              <Input
                placeholder="Nhập publish"
                onChange={(value) => {
                  setPublish(value.target.value);
                }}
              />
              <h4>Year :</h4>
              <Input
                placeholder="Nhập year"
                onChange={(value) => {
                  setYear(value.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginTop: "6%",
                gap: "10px",
              }}
            >
              <Button
                style={{
                  backgroundColor: "lightpink",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  handleAddItems();
                }}
              >
                Xác nhận
              </Button>
              <Button
                style={{
                  backgroundColor: "lightgrey",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={handleClose}
              >
                Huỷ
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
      {/* edit */}
      <div>
        <Modal
          open={openEdit}
          onClose={handleCloseEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
              Chỉnh sửa
            </Typography>
            <div
              style={{
                marginTop: "2%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4>Author :</h4>
              <Input
                placeholder="Nhập author"
                defaultValue={author}
                onChange={(value) => {
                  setAuthor(value.target.value);
                }}
              />
              <h4>Book :</h4>
              <Input
                placeholder="Nhập book"
                defaultValue={book}
                onChange={(value) => {
                  setBook(value.target.value);
                }}
              />
              <h4>Publish :</h4>
              <Input
                placeholder="Nhập publish"
                defaultValue={publish}
                onChange={(value) => {
                  setPublish(value.target.value);
                }}
              />
              <h4>Year :</h4>
              <Input
                placeholder="Nhập year"
                defaultValue={year}
                onChange={(value) => {
                  setYear(value.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginTop: "6%",
                gap: "10px",
              }}
            >
              <Button
                style={{
                  backgroundColor: "lightpink",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  handleUpdateItems(id);
                }}
              >
                Xác nhận
              </Button>
              <Button
                style={{
                  backgroundColor: "lightgrey",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={handleCloseEdit}
              >
                Huỷ
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
      {/* delete */}
      <div>
        <Modal
          open={openDelete}
          onClose={handleCloseDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Bạn có chắc xoá không ?
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginTop: "6%",
                gap: "10px",
              }}
            >
              <Button
                style={{
                  backgroundColor: "lightpink",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  handleDeleteItems(id);
                }}
              >
                Xác nhận
              </Button>
              <Button
                style={{
                  backgroundColor: "lightgrey",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={handleCloseDelete}
              >
                Huỷ
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Content;
