import React from "react";
import "./ChOutPro.css";
import { useStateValue } from "./StateProvider";

function ChOutPro({ id, image, title, price, rating, hidden }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div id={id} className="prod">
      <img className="image" src={image} alt="" />
      <div className="prod_info">
        <p className="prod_title">{title}</p>
        <p className="price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hidden && (
          <button className="btn" onClick={removeFromBasket}>
            Remove From Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default ChOutPro;
