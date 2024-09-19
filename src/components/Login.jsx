import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../App";
import personImage from "../Assets/user-solid.svg";

//need to work on google auth from firebase

export default function Login() {
  const { setUser } = useContext(UserContext);

  const handleGoogleLogin = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };

  return (
    <section className="login-section">
      <h2 className="login-title">Please login to add a new medication!</h2>
      <button className="google-btn" onClick={handleGoogleLogin}>
        <img className="bust" src={personImage} alt="person bust"></img>
        <br />
        Google Login
      </button>
    </section>
  );
}
