import { useNavigate, useParams } from "react-router-dom";
import authService from "../../Service/authService";

function VerifyEmail() {
  const navigate = useNavigate();
  const { token, id } = useParams();

  const verifyEmail = async () => {
    try {
      const isVerified = await authService.verifyEmail(token, id);
      console.log(isVerified);
      if (isVerified) {
        console.log("Email verified successfully");
      }
    } catch (error) {
      console.error("Verification error:", error);
    }
    navigate("/login");
  };

  return (
    <>
      <div>
        <input type="email" placeholder="enter your email" />
        <br />
        <button onClick={verifyEmail}>Email Verification</button>
      </div>
    </>
  );
}

export default VerifyEmail;
