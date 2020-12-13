const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const KEY =
  "sk_test_51Hsl5qAav04ANH7nLYTCLZ5tarqkCBGNz20Xvf8omF52D71TQFsA5f84Lbpxv0ypIshjS4xGbFnkVPcJr7SrdT2200J3F5ratK";
//"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";
const stripe = require("stripe")(KEY);

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello!");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listener
exports.api = functions.https.onRequest(app);
