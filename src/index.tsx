import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "store";
import Footer from "components/Footer/Footer";
import Toast from "utils/Toast/Toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Toast />
    <App />
    <Footer />
  </Provider>
);
