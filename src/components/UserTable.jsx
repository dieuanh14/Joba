import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUserList } from "../store/features/UserSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReactPaginate from "react-paginate";
import "../scss/userTable.scss";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
export default function UserTable() {
  const dispatch = useDispatch();
  const { userList, status, error } = useSelector((state) => state.user);

  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 5;

  useEffect(() => {
    dispatch(fetchUserList({ page: currentPage + 1, limit: usersPerPage }));
  }, [dispatch, currentPage]);
  const handleDeleteUser = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(userId))
          .unwrap()
          .then(() => {
            Swal.fire("Deleted Successfully!");
            dispatch(fetchUserList());
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      }
    });
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  const indexOfLastUser = (currentPage + 1) * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const usersToShow = userList.slice(indexOfFirstUser, indexOfLastUser);
  const pageCount = Math.ceil(userList.length / usersPerPage);

  return (
    <div className="table__user">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Birthday</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Subcription</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersToShow
              .filter((user) => user.roleName === "User")
              .map((user) => (
                <TableRow key={user.userId}>
                  <TableCell component="th" scope="row">
                    {user.userId}
                  </TableCell>
                  <TableCell align="right">{user.userName}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.birthDay}</TableCell>
                  <TableCell align="right">{user.roleName}</TableCell>
                  <TableCell align="right">
                    <span
                      style={{
                        color:
                          user.paymentStatus === "Premium" ? "red" : "inherit",
                      }}
                    >
                      {user.paymentStatus}
                    </span>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteUser(user.userId)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={(selected) => setCurrentPage(selected.selected)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          forcePage={currentPage}
        />
      </div>
    </div>
  );
}
