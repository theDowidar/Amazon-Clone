const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51KOCQIHS5h0vOi3KDQdM1aCSPwE4lMaZjdU9Pnc1WoXDs6cvPHGE3D5azwxMJlfbq1BKulKJrWDFolSgLXS8xG9y00gEV7V9N9")

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("test"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    
    console.log("Payment request received for this amount", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)