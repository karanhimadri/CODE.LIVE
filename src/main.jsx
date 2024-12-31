import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WebSocketProvider from "./contexts/WebSocketProvider.jsx";
import AuthContextProvider from "./contexts/authContext/AuthContextProvider.jsx";
import { Provider } from "react-redux";
import { ReduxStore } from "./reduxStore/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={ReduxStore}>
    <WebSocketProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </WebSocketProvider>
  </Provider>
);
