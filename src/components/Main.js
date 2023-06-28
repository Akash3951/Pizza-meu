import React from "react";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzaDataNum = pizzas.length;
  return (
    <main className="menu">
      <h2> Our Menu</h2>
      {pizzaDataNum > 0 ? (
        <>
          <p>
            Authentic Indian cuisine. 6 creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza data={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          We are still working on our menu. Resturent will open once will be
          ready with the menu.
        </p>
      )}
    </main>
  );
}

function Pizza(props) {
  // if (props.data.soldOut) return null;

  return (
    <li className={`pizza ${props.data.soldOut ? "sold-out" : ""}`}>
      <img src={props.data.photoName} alt="pizza" />
      <div>
        <h3>{props.data.name}</h3>
        <p>{props.data.ingredients}</p>
        <span>{props.data.soldOut ? "SOLD OUT" : props.data.price}</span>
      </div>
      <span>{props.data.soldOut ? null : <PizzaCount />}</span>
    </li>
  );
}

function PizzaCount() {
  // function addCount() {
  //   setCount((prevCount) => prevCount + 1);
  // }
  // function subCount() {
  //   setCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
  // }

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="pizza-count">
      <button className="count-btn" onClick={() => dispatch(increment())}>
        +
      </button>
      <p className="count">{count}</p>
      <button className="count-btn" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}
