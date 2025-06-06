import { useState } from "react";
import authService from "../../Service/authService";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const forgotPassword = async () => {
    try {
      await authService.forgotPassword(email);
      setMessage("Reset password link sent to your email.");
    } catch (error) {
      console.error(error);
      setMessage("Error sending reset link.");
    }
  };

  return (
    <>
      <center>
        <h1>Forgot Password</h1>
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button onClick={forgotPassword}>Send Reset Link</button>
        <br />
        <br />
        {message && <p>{message}</p>}
      </center>
    </>
  );
}

export default ForgotPassword;
