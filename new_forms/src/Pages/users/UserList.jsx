import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/features/users/userListSlice";
import { deleteUser } from "../../Redux/features/users/userDeleteSlice";
import { useNavigate } from "react-router-dom";

function UserList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading, error } = useSelector((state) => state.userList);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // const handleDelete = (id) => {
  //   if (window.confirm("Are you sure you want to delete this user?")) {
  //     dispatch(deleteUser(id)).then(() => dispatch(fetchUsers()));
  //   }
  // };

  return (
    <div>
      <h1>User List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>S.No</th>8
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => navigate(`/user/${user.id}`)}>
                  View
                </button>
                <button onClick={() => navigate(`/user/update/${user.id}`)}>
                  Update
                </button>
                <button onClick={() => navigate(`/delete/${user.id}`)}>Delete</button>
              </td>
            </tr>
          ))}
          {users.length === 0 && !loading && (
            <tr>
              <td colSpan="4">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../../../Helper/axiosInterceptors";
// import API_PATHS from "../../../Service/apiPath";

// export const fetchUsers = createAsyncThunk(
//   "users/fetchUsers",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get(
//         `${API_PATHS.USER_LIST}?pageNumber=1&pageSize=1000`
//       );
//       return response.data.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Failed to fetch users");
//     }
//   }
// );

// const userListSlice = createSlice({
//   name: "userList",
//   initialState: {
//     users: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default userListSlice.reducer;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchUsers,
//   deleteUser,
// } from "../../Redux/features/users/userListSlice";
// import { useNavigate } from "react-router-dom";
// import "../../styles/authForm.css";

// function UserList() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const {
//     users = [],
//     loading,
//     error,
//   } = useSelector((state) => state.userList || {});

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       dispatch(deleteUser(id));
//     }
//   };

//   return (
//     <div>
//       <h1>User List</h1>
//       {loading && <p>Loading users...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <table
//         className="table-style"
//         border="1"
//         cellPadding="10"
//         cellSpacing="0"
//       >
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th colSpan="3">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={user._id}>
//               <td>{index + 1}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <button onClick={() => navigate(`/user/${user._id}`)}>
//                   View
//                 </button>
//               </td>
//               <td>
//                 <button onClick={() => navigate(`/update-user/${user._id}`)}>
//                   Update
//                 </button>
//               </td>
//               <td>
//                 <button onClick={() => handleDelete(user._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//           {users.length === 0 && !loading && (
//             <tr>
//               <td colSpan="6">No users found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserList;

// // src/pages/users/UserList.jsx
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "../../Redux/features/users/userListSlice";
// import { useNavigate } from "react-router-dom";

// function UserList() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const {
//     users = [],
//     loading,
//     error,
//   } = useSelector((state) => state.userList || {});

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>User List</h1>
//       {loading && <p>Loading users...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <table border="1" cellPadding="10" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={user._id}>
//               <td>{index + 1}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <button onClick={() => navigate(`/user/${user._id}`)}>
//                   View Details
//                 </button>
//               </td>
//             </tr>
//           ))}
//           {users.length === 0 && !loading && (
//             <tr>
//               <td colSpan="4">No users found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserList;

// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import userService from "../../Service/userService";

// // function UserList() {
// //   const navigate = useNavigate();
// //   const [users, setUsers] = useState([]);

// //   const fetchUsers = async () => {
// //     try {
// //       const userList = await userService.getUsers();
// //       setUsers(userList);
// //     } catch (error) {
// //       console.log(error);
// //       navigate("/login");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   return (
// //     <>
// //       <h1>User List</h1>
// //       <table border="1" cellPadding="10" cellSpacing="0">
// //         <thead>
// //           <tr>
// //             <th>S.No</th>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th> Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.map((user, index) => (
// //             <tr key={index}>
// //               <td>{index + 1}</td>
// //               <td>{user.name}</td>
// //               <td>{user.email}</td>
// //               <td>
// //                 <button onClick={() => navigate(`/details/${user.id}`)}>
// //                   Details
// //                 </button>
// //                 <button
// //                   style={{ marginLeft: "10px" }}
// //                   onClick={() => navigate(`/delete/${user.id}`)}
// //                 >
// //                   Delete
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </>
// //   );
// // }

// // export default UserList;
