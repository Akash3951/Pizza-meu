import React from "react";
import "../index.css";

export default function Footer({ totalItem }) {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <>
          <Order closeHour={closeHour} totalItem={totalItem} />
          {/* <AddedPizza /> */}
        </>
      ) : (
        <p>We are closed now. We will welcome you next day at {openHour}:00.</p>
      )}
    </footer>
  );
}

function Order(props) {
  console.log(props);
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <p>
        {props.totalItem.map((item) => (
          <span>
            {item.key}:<em>{item.total}</em>
            {"  "}
          </span>
        ))}
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// function AddedPizza() {
//   return <h1>hello</h1>;
// }
