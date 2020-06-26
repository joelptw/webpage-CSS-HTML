const express = require("express");
const app = express();
const connect = require("./config/db");
const dotenv = require("dotenv");

// App middlewares
dotenv.config({ path: "./config/config.env" });
app.use(express.json());
// Routes

app.use("/api/devices", require("./routes/device"));
app.use("/api/users", require("./routes/users"));
app.use("/api/send", require("./routes/send-notification"));
app.use("/api/auth", require("./routes/auth"));

app.use(express.static("public"));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

connect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server starts at port ${PORT}`));

/*
curl -X POST -H "Authorization: key=AAAA2JK1Kwg:APA91bEQTsVLY6pPp3jBiG9kPlyiyhBdojv-ht3r_0EAPBir2wDy9XnOnNq8j12z5JiQ_-LZInBtCuuBQzDjRLaMNvzgwkysufGeMIrHcUVebWv1kfsZZFwyYKg0mhvKq_tbCD6W5AAr" -H "Content-Type: application/json"    -d '{
  "data": {
    "notification": {
        "title": "FCM Message",
        "body": "This is an FCM Message gaaaaaaaaaaaaaaaaaaaaaaa",
        "icon": "/ab-logo.png",
    }
  },
  "to": "eFjLhuXqpR0:APA91bHAbdNramU7OuL8_NHhLC0cfce9ast3X0-gr2I-xy1W6hjs5pd5fC68JN0xgSSJ-qaMNOrS69gfJMAIQ8x5dF3_gH1Xzfk7zWRXwf8vqSMh9hoHx-wmrkcH8dRWpEseyDDR-B6b"
}' https://fcm.googleapis.com/fcm/send

http://localhost:5000/api/send

{
  "token":"eFjLhuXqpR0:APA91bHAbdNramU7OuL8_NHhLC0cfce9ast3X0-gr2I-xy1W6hjs5pd5fC68JN0xgSSJ-qaMNOrS69gfJMAIQ8x5dF3_gH1Xzfk7zWRXwf8vqSMh9hoHx-wmrkcH8dRWpEseyDDR-B6b",
  "message":"porque loco que te hecho"
}

*/
