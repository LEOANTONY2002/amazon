import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import ChOutPro from "./ChOutPro";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="left">
        <img
          className="ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/uk-certifiedrefurbished/renewed/UK_AR_Storebanner_Jul19.jpg"
          alt=""
        />
        <div>
          <h3>{user?.email}</h3>
          <h2 className="check_title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <ChOutPro
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
