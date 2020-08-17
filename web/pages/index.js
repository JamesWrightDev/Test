import { useEffect } from "react";
import Head from "next/head";
import bookingApi from "../util/api";
import { fb, provider } from "../util/firebase";
import { getToken } from "../util/firebase";
import { initBookingService } from "../util/api";

export default function Home() {
  useEffect(() => {
      getToken()
      .then((id) => {
        console.log(id);
      })
  }, []);

  const get = async () => {
    const service = await initBookingService();

    service.createBooking((data) => {
      console.log(data);
    });
  };

  const post = async () => {
    const service = await initBookingService();

    service.createBooking((data) => {
      console.log(data);
    });
  };

  const signIn = () => {
    fb.auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <div className="container">
      <h1>Test</h1>

      <button onClick={get}>Get</button>
      <button onClick={post}>Post</button>

      <button onClick={signIn}>SIGN IN </button>
    </div>
  );
}
