import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import userService from "../../Service/userService";

function UserDelete() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const deleteUser = async () => {
    try {
      const deletedUser = await userService.deleteUserById(id);
      setUser(deletedUser);
    } catch (error) {
      console.error("Error deleting user:", error);
      navigate("/list");
    }
  };

  useEffect(() => {
    deleteUser();
  }, [id]);

  return (
    <>
      <h1>User Deleted Successfully</h1>
      {user ? (
        <>
          <h4>ID: {user._id}</h4>
          <h4>Name: {user.name}</h4>
          <h4>Email: {user.email}</h4>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default UserDelete;
