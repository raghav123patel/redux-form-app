import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../../Redux/features/users/userDetailSlice";
import { useParams, useNavigate } from "react-router-dom";

function UserDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // Get the userId from URL

  const {
    user = null,
    loading,
    error,
  } = useSelector((state) => state.userDetail || {});

  useEffect(() => {
    if (id) {
      dispatch(fetchUserDetail(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!user) return <p>No user data found.</p>;

  return (
    <div>
      <h2>User Detail</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <button onClick={() => navigate("/userlist")}>Back to List</button>
    </div>
  );
}

export default UserDetail;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserDetail } from "../../Redux/features/users/userDetailSlice";
// import { useParams } from "react-router-dom";

// function UserDetail() {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const { user, loading, error } = useSelector((state) => state.userDetail);

//   useEffect(() => {
//     dispatch(fetchUserDetail(id));
//   }, [dispatch, id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;
//   if (!user) return <p>No user data found.</p>;

//   return (
//     <div>
//       <h1>User Detail</h1>
//       <p>
//         <strong>Name:</strong> {user.name}
//       </p>
//       <p>
//         <strong>Email:</strong> {user.email}
//       </p>
//     </div>
//   );
// }

// export default UserDetail;

// // src/pages/users/UserDetail.jsx
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserDetail } from "../../Redux/features/users/userDetailSlice";
// import { useParams } from "react-router-dom";

// function UserDetail() {
//   const { id } = useParams();
//   //const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { selectedUser, loading, error } = useSelector((state) => state.users);

//   useEffect(() => {
//     dispatch(fetchUserDetail(id));
//   }, [dispatch, id]);

//   return (
//     <div>
//       <h1>User Data</h1>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {selectedUser && (
//         <>
//           <h4>ID: {selectedUser._id}</h4>
//           <h4>Name: {selectedUser.name}</h4>
//           <h4>Email: {selectedUser.email}</h4>
//         </>
//       )}
//     </div>
//   );
// }

// export default UserDetail;

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import userService from "../../Service/userService";

// function UserDetail() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   const getDetails = async () => {
//     try {
//       const userData = await userService.getUserById(id);
//       setUser(userData);
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//       navigate("/list");
//     }
//   };

//   useEffect(() => {
//     getDetails();
//   }, [id]);

//   return (
//     <>
//       <h1>User Data</h1>
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

// export default UserDetail;
