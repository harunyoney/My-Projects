import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyB2uh8uyhb55ocFPzm_QT_XpDOawAjCXq8",
  authDomain: "har-mus.firebaseapp.com",
  projectId: "har-mus",
  storageBucket: "har-mus.appspot.com",
  messagingSenderId: "115658426624",
  appId: "1:115658426624:web:eee785d4a490f3678dcbe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

  export default  auth