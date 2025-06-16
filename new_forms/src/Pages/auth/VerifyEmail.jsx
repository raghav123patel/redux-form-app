// src/components/VerifyEmail.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail } from "../../Redux/features/auth/verifyEmailSlice";
import { useParams, useNavigate } from "react-router-dom";

function VerifyEmail() {
  const { token, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.verifyEmail);

  useEffect(() => {
    dispatch(verifyEmail({ token, userId: id })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        alert("Email verified successfully");
        navigate("/login");
      }
    });
  }, [dispatch, token, id, navigate]);

  return (
    <center>
      <h2>Verifying your email...</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </center>
  );
}

export default VerifyEmail;

// import { useNavigate, useParams } from "react-router-dom";
// import authService from "../../Service/authService";

// function VerifyEmail() {
//   const navigate = useNavigate();
//   const { token, id } = useParams();

//   const verifyEmail = async () => {
//     try {
//       const isVerified = await authService.verifyEmail(token, id);
//       console.log(isVerified);
//       if (isVerified) {
//         console.log("Email verified successfully");
//       }
//     } catch (error) {
//       console.error("Verification error:", error);
//     }
//     navigate("/login");
//   };

//   return (
//     <>
//       <div>
//         <input type="email" placeholder="enter your email" />
//         <br />
//         <button onClick={verifyEmail}>Email Verification</button>
//       </div>
//     </>
//   );
// }

// export default VerifyEmail;
