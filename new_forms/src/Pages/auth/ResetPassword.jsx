import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import authService from "../../Service/authService";

function ResetPassword() {
  const { userId, authToken } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const resetPassword = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await authService.resetPassword({ password, token: authToken, userId });
      navigate("/login");
    } catch (error) {
      console.error("Password reset error:", error);
      alert("Error resetting password. Please try again.");
    }
  };

  return (
    <>
      <input
        type="password"
        placeholder="Enter your new password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Confirm your new password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />
      <br />
      <br />
      <button onClick={resetPassword}>Reset Password</button>
    </>
  );
}

export default ResetPassword;
