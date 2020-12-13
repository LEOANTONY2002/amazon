import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Orders.css";
import Order from "./Order";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.email)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snap) =>
          setOrders(
            snap.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="order_item">
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
