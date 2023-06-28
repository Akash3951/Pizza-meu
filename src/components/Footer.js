import React from "react";
import "../index.css";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <>
          <Order closeHour={closeHour} />
          {/* <AddedPizza /> */}
        </>
      ) : (
        <p>We are closed now. We will welcome you next day at {openHour}:00.</p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// function AddedPizza() {
//   return <h1>hello</h1>;
// }
