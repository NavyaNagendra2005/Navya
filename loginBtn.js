 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
    import { getAuth, GoogleAuthProvider, signInWithPopup } 
      from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyD88D6UWxDJnLI3pYpeKGWJ28XEZ0vTJYo",
      authDomain: "mobile-79cce.firebaseapp.com",
      projectId: "mobile-79cce",
      storageBucket: "mobile-79cce.firebasestorage.app",
      messagingSenderId: "501608586933",
      appId: "1:501608586933:web:fe54bd619bb5f011a928fc",
      measurementId: "G-DTVPHJ50QE"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    window.googleLogin = function () {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          alert("Logged in as: " + user.displayName);
          console.log(user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  