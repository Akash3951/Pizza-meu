import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Menu from "./components/Main";
import Footer from "./components/Footer";
import "./index.css";
import { store } from "./features/store";
import { Provider } from "react-redux";

function App() {
  // const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
