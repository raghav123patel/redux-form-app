import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../Redux/features/users/userDeleteSlice";
import { useParams } from "react-router-dom";

function UserDelete() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { success, error } = useSelector((state) => state.userDelete || {});

  useEffect(() => {
    if (id) {
      dispatch(deleteUser(id));
    }
  }, [dispatch, id]);

  if (error) {
    return <p style={{ color: "red" }}>{error.message || String(error)}</p>;
  }

  if (success) {
    return <p style={{ color: "green" }}>User deleted successfully!</p>;
  }

  return <p>Deleting user...</p>;
}

export default UserDelete;

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import userService from "../../Service/userService";

// function UserDelete() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   const deleteUser = async () => {
//     try {
//       const deletedUser = await userService.deleteUserById(id);
//       setUser(deletedUser);
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       navigate("/list");
//     }
//   };

//   useEffect(() => {
//     deleteUser();
//   }, [id]);

//   return (
//     <>
//       <h1>User Deleted Successfully</h1>
//       {user ? (
//         <>
//           <h4>ID: {user._id}</h4>
//           <h4>Name: {user.name}</h4>
//           <h4>Email: {user.email}</h4>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </>
//   );
// }

// export default UserDelete;

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import userService from "../../Service/userService";

// function UserDelete() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   const deleteUser = async () => {
//     try {
//       const deletedUser = await userService.deleteUserById(id);
//       setUser(deletedUser);
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       navigate("/list");
//     }
//   };

//   useEffect(() => {
//     deleteUser();
//   }, [id]);

//   return (
//     <>
//       <h1>User Deleted Successfully</h1>
//       {user ? (
//         <>
//           <h4>ID: {user._id}</h4>
//           <h4>Name: {user.name}</h4>
//           <h4>Email: {user.email}</h4>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </>
//   );
// }

// export default UserDelete;
