import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactGA from "react-ga4";
ReactGA.initialize("G-X26CJQ4N7P");
ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });


ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="711165076072-c7eela8r74om166rj4k879nse3a8v1c4.apps.googleusercontent.com">
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
);
