import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import userService from "../../Service/userService";

function UserDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const getDetails = async () => {
    try {
      const userData = await userService.getUserById(id);
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user details:", error);
      navigate("/list");
    }
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <>
      <h1>User Data</h1>
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

export default UserDetail;
