import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registeredUsers } from "../../Redux/features/auth/registerSlice"; 
import { useNavigate } from "react-router-dom";
import "../../styles/authForm.css";

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { loading, error} = useSelector(
    (state) => state.register
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(registeredUsers(formData)).unwrap();
      console.log( result);
        const { emailVerificationTOken, id } = result;
      if (emailVerificationTOken && id) {
       navigate(`/verification/${emailVerificationTOken}/${id}`);
      } else {
        alert("Registration successful, but verification info missing.");
      }
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

 

  return (
    <div className="auth-container">
      <center>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}> 
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          /> 
          <br />
          <br />
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          <br />
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </center>
    </div>
  );
}

export default RegisterForm;
