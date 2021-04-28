const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IQzJiKOCnNIUsECuYBF2Z8RhbmU7enKHFSqq3Uv4JLmWu5NKkluhjiIAWTQ7HbIiO8KmfGo5xIev1MhFzd1NktU00k3Ecvf45"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json()); // to return json

// - API routes   (backend usually runs in 5000 in local)
app.get("/", (request, response) => response.status(300).send("hello Sattu")); // 200 is usually good
// app.get('/biglol', (request, response) => response.status(200).send('Whats up biglol'))
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "INR",
  });
  // 201 is OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
