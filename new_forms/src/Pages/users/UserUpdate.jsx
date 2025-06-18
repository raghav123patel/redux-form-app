import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../../Redux/features/users/userDetailSlice";
import { updateUser } from "../../Redux/features/users/userUpdateSlice";
import { useParams, useNavigate } from "react-router-dom";

function UserUpdateForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userDetail);
  const { loading, error } = useSelector((state) => state.userUpdate);

  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    dispatch(fetchUserDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) setFormData({ name: user.name, email: user.email });
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, userData: formData })).then(() => navigate("/"));
  };

  return (
    <div>
      <h2>Update User</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
    
        <br />
        <button type="submit" disabled={loading}>
          Update
        </button>
      </form>
    </div>
  );
}

export default UserUpdateForm;
