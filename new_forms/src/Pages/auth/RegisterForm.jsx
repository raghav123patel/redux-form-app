import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../Service/authService";

function RegisterForm() {
  const navigate = useNavigate();
  const [register, setRegistration] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegistration({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const data = await authService.registerUser(register);
      console.log(data);
      const { emailVerificationTOken, id } = data;
      navigate(`/verification/${emailVerificationTOken}/${id}`);
    } catch (error) {
      console.error(error);
      alert("Invalid credentials or network error!");
    }
  };

  return (
    <>
      <form>
        <center>
          <h1>Registration page</h1>
          username:{" "}
          <input
            type="text"
            name="name"
            placeholder="username"
            value={register.name}
            onChange={handleChange}
          />
          <br />
          <br />
          Email:{" "}
          <input
            type="email"
            name="email"
            placeholder="email"
            value={register.email}
            onChange={handleChange}
          />
          <br /> <br />
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value={register.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <button onClick={handleSave}> save</button>
        </center>
      </form>
    </>
  );
}

export default RegisterForm;
