import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import { ProjectLogin } from "./definitions/ProjectLogin";

const firebaseConfig = {
  apiKey: "AIzaSyBxYgu6UGK2AdBzsYFO6nBom9PRZSuRlfA",
  authDomain: "mmd-hovedopgaven.firebaseapp.com",
  databaseURL: "https://mmd-hovedopgaven-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mmd-hovedopgaven",
  storageBucket: "mmd-hovedopgaven.appspot.com",
  messagingSenderId: "676255958131",
  appId: "1:676255958131:web:c368091b440d88d043d606",
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ProjectLogin />
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
