import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyB2gzmNoxTnFoeeopRAA3dbDSNrr_XT8OY",
  authDomain: "thriftbooks-app.firebaseapp.com",
  // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};
const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div className="container login text-center">
        <h1>Thriftbooks</h1>
        <p>Xin mời đăng nhập:</p>
        <StyledFirebaseAuth
          className="button-login"
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return (
    <div className="container login text-center">
      <h1>Thriftbooks</h1>
      <p>
        Xin chào <b>{firebase.auth().currentUser.displayName}</b>! Bạn đã đăng
        nhập thành công!
      </p>
      <img src={firebase.auth().currentUser.photoURL} alt="" />
      <br />
      <button
        className="btn btn-logout"
        onClick={() => firebase.auth().signOut()}
      >
        Đăng xuất
      </button>
    </div>
  );
};

export default Login;
