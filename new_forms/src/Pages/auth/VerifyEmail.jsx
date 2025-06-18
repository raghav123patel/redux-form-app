import { useDispatch, useSelector } from "react-redux";
import { emailVerification } from "../../Redux/features/auth/verifyEmailSlice";
import { useParams, useNavigate } from "react-router-dom";

function VerifyEmail() {
  const { token, id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.verifyEmail); 

  const handleVerify = () => {
    dispatch(emailVerification({ token, id }))
      .unwrap()
      .then(() => {
        alert("Email verified successfully");
        navigate("/login");
      })
      .catch((err) => {
        alert(`Verification failed: ${err}`);
      });
  };

  return (
    <center>
      <button onClick={handleVerify}>Verify</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </center>
  );
}

export default VerifyEmail;







// // src/components/VerifyEmail.jsx
// import { useDispatch, useSelector } from "react-redux";
// import  verifyEmail from "../../Redux/features/auth/verifyEmailSlice";
// import { useParams, useNavigate } from "react-router-dom";

// function VerifyEmail() {
//   const { token, id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.verifyEmail);

  
//   const handleVerify = () =>{
//      dispatch(verifyEmail({ token,id })).then((res) => {
      
//         alert("Email verified successfully");
//         navigate("/login");
//       })
//   }

//   return (
//     <center>
//       <button onClick={handleVerify}>verify</button>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </center>
//   );
// }

// export default VerifyEmail;

// // import { useNavigate, useParams } from "react-router-dom";
// // import authService from "../../Service/authService";

// // function VerifyEmail() {
// //   const navigate = useNavigate();
// //   const { token, id } = useParams();

// //   const verifyEmail = async () => {
// //     try {
// //       const isVerified = await authService.verifyEmail(token, id);
// //       console.log(isVerified);
// //       if (isVerified) {
// //         console.log("Email verified successfully");
// //       }
// //     } catch (error) {
// //       console.error("Verification error:", error);
// //     }
// //     navigate("/login");
// //   };

// //   return (
// //     <>
// //       <div>
// //         <input type="email" placeholder="enter your email" />
// //         <br />
// //         <button onClick={verifyEmail}>Email Verification</button>
// //       </div>
// //     </>
// //   );
// // }

// // export default VerifyEmail;
