import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/features/auth/registerSlice";
import { useNavigate } from "react-router-dom";
import "../../styles/authForm.css";

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { loading, error, registrationData } = useSelector(
    (state) => state.register
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (registrationData) {
      const { emailVerificationTOken, id } = registrationData;
      if (emailVerificationTOken && id) {
        navigate(`/verification/${emailVerificationTOken}/${id}`);
      } else {
        alert("Registration successful, but verification info missing.");
      }
    }
  }, [registrationData, navigate]);

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

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../../Redux/features/auth/registerSlice";
// import { useNavigate } from "react-router-dom";
// import "../../styles/authForm.css";
// function RegisterForm() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const { loading, error, registrationData } = useSelector(
//     (state) => state.register
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(registerUser(formData));
//   };

//   useEffect(() => {
//     if (registrationData) {
//       alert("Registration successful! Please verify your email.");
//       navigate("/verify-email");
//     }
//   }, [registrationData, navigate]);

//   return (
//     <div className="auth-container">
//       <center>
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <br />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <br />
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <br />
//           <button type="submit" disabled={loading}>
//             {loading ? "Registering..." : "Register"}
//           </button>
//           <br />
//           <br />
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </form>
//       </center>
//     </div>
//   );
// }

// export default RegisterForm;

// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import authService from "../../Service/authService";

// // function RegisterForm() {
// //   const navigate = useNavigate();
// //   const [register, setRegistration] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setRegistration({
// //       ...register,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSave = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const data = await authService.registerUser(register);
// //       console.log(data);
// //       const { emailVerificationTOken, id } = data;
// //       navigate(`/verification/${emailVerificationTOken}/${id}`);
// //     } catch (error) {
// //       console.error(error);
// //       alert("Invalid credentials or network error!");
// //     }
// //   };

// //   return (
// //     <>
// //       <form>
// //         <center>
// //           <h1>Registration page</h1>
// //           username:{" "}
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="username"
// //             value={register.name}
// //             onChange={handleChange}
// //           />
// //           <br />
// //           <br />
// //           Email:{" "}
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="email"
// //             value={register.email}
// //             onChange={handleChange}
// //           />
// //           <br /> <br />
// //           Password:
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="password"
// //             value={register.password}
// //             onChange={handleChange}
// //           />
// //           <br />
// //           <br />
// //           <button onClick={handleSave}> save</button>
// //         </center>
// //       </form>
// //     </>
// //   );
// // }

// // export default RegisterForm;
