import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [totalItem, setTotalItem] = React.useState([]);

  function updateTotalItem(name, count) {
    let arr = [];
    if (totalItem.length === 0) {
      arr.push({ key: name, total: count });
    } else {
      let flag = 0;
      arr = totalItem.map((item) => {
        if (item.key === name) {
          flag = 1;
          return { ...item, total: count };
        } else return item;
      });
      if (flag === 0) {
        arr.push({ key: name, total: count });
      }
    }

    setTotalItem(arr);
  }

  // function handleAddItem(name, count) {
  //   updateTotalItem(name, count);
  // }

  // function handleMinusItem(name, count) {
  //   updateTotalItem(name, count);
  // }
  console.log(totalItem);
  return (
    <div className="container">
      <Header />
      <Menu onAddItem={updateTotalItem} onMinusItem={updateTotalItem} />
      <Footer totalItem={totalItem} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
