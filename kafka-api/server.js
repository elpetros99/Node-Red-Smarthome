const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8765;

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Origin', 'localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); //call that will support
	res.setHeader('Access-Control-Allow-Headers', "Content-Type, Authorization, X-OBSERVATORY-AUTH"); //headers that it will support(authentication)
	res.setHeader('Access-Control-Allow-Credentials', 'true');
next();
});
//app.use(cors());
const allowedOrigins = [
  'http://localhost:3000'
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
//app.setHeader('Access-Control-Allow-Credentials', 'true');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*  
    Producer Route- This endpoint will accept requests
    from our simulation script and produce records
    to the correct kafka topic
*/

app.use("/events", require("./routes/events/producer.js"));
app.use("/lamp", require("./routes/lamp/lamp"));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
