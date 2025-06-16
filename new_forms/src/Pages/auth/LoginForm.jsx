import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/features/auth/loginSlice";
import { useNavigate } from "react-router-dom";
import "../../styles/authForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.login);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/list");
      }
    });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginForm;

// // src/components/LoginForm.jsx
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../Redux/features/auth/loginSlice";
// import { useNavigate } from "react-router-dom";

// function LoginForm() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.login);

//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(credentials)).then((res) => {
//       if (res.meta.requestStatus === "fulfilled") {
//         navigate("/list");
//       }
//     });
//   };

//   return (
//     <center>
//       <h2>Login</h2>
//       <input
//         type="email"
//         name="email"
//         placeholder="Enter email"
//         value={credentials.email}
//         onChange={handleChange}
//       />
//       <br />
//       <br />
//       <input
//         type="password"
//         name="password"
//         placeholder="Enter password"
//         value={credentials.password}
//         onChange={handleChange}
//       />
//       <br />
//       <br />
//       <button onClick={handleSubmit} disabled={loading}>
//         {loading ? "Logging in..." : "Login"}
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </center>
//   );
// }

// export default LoginForm;

// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import authService from "../../Service/authService";

// // function LoginForm() {
// //   const navigate = useNavigate();

// //   const [data, setData] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setData({
// //       ...data,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSave = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const userData = await authService.login(data);
// //       console.log(userData);
// //       localStorage.setItem("token", userData.token);
// //       navigate("/list");
// //     } catch (error) {
// //       console.error(error);
// //       alert("Invalid credentials or network error!");
// //     }
// //   };

// //   return (
// //     <>
// //       <form>
// //         <center>
// //           <h1>LOGIN PAGE</h1>
// //           Email:{" "}
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="enter your email"
// //             value={data.email}
// //             onChange={handleChange}
// //           />
// //           <br />
// //           <br />
// //           Password:
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="enter your password"
// //             value={data.password}
// //             onChange={handleChange}
// //           />
// //           <br />
// //           <br />
// //           <button onClick={handleSave}> login</button>
// //           <br />
// //           <br />
// //           <button onClick={() => navigate("/register")}>add user</button>
// //           <br />
// //           <br />
// //           <a href="forgot-password" onClick={() => navigate("/forgot-password")}>
// //             Forgot Password
// //           </a>
// //         </center>
// //       </form>
// //     </>
// //   );
// // }

// // export default LoginForm;
