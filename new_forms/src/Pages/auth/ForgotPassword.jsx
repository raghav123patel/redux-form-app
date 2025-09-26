import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgot } from "../../Redux/features/auth/forgotPasswordSlice";
import { useNavigate } from "react-router-dom";

function ForgotPasswordForm() {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.forgot);

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(forgot({ email })).then( ()=> navigate("/login"))
  };

  return (
    <div className="auth-container">
      <center>
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </center>
    </div>
  );
}

export default ForgotPasswordForm;

// import { useState } from "react";
// import authService from "../../Service/authService";

// function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const forgotPassword = async () => {
//     try {
//       await authService.forgotPassword(email);
//       setMessage("Reset password link sent to your email.");
//     } catch (error) {
//       console.error(error);
//       setMessage("Error sending reset link.");
//     }
//   };

//   return (
//     <>
//       <center>
//         <h1>Forgot Password</h1>
//         <input
//           type="email"
//           placeholder="enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <br />
//         <button onClick={forgotPassword}>Send Reset Link</button>
//         <br />
//         <br />
//         {message && <p>{message}</p>}
//       </center>
//     </>
//   );
// }

// export default ForgotPassword;
