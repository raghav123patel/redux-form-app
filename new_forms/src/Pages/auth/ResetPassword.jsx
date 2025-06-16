// src/components/ResetPasswordForm.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../Redux/features/auth/ResetPasswordSlice";
import { useParams, useNavigate } from "react-router-dom";

function ResetPasswordForm() {
  const { userId, authToken } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.reset);

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = () => {
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    dispatch(resetPassword({ password, token: authToken, userId })).then(
      (res) => {
        if (res.meta.requestStatus === "fulfilled") {
          alert("Password reset successfully!");
          navigate("/login");
        }
      }
    );
  };

  return (
    <center>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Resetting..." : "Reset Password"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </center>
  );
}

export default ResetPasswordForm;

// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import authService from "../../Service/authService";

// function ResetPassword() {
//   const { userId, authToken } = useParams();
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();

//   const resetPassword = async () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     try {
//       await authService.resetPassword({ password, token: authToken, userId });
//       navigate("/login");
//     } catch (error) {
//       console.error("Password reset error:", error);
//       alert("Error resetting password. Please try again.");
//     }
//   };

//   return (
//     <>
//       <input
//         type="password"
//         placeholder="Enter your new password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />
//       <br />
//       <br />
//       <input
//         type="password"
//         placeholder="Confirm your new password"
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         value={confirmPassword}
//       />
//       <br />
//       <br />
//       <button onClick={resetPassword}>Reset Password</button>
//     </>
//   );
// }

// export default ResetPassword;
