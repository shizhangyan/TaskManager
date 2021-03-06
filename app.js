const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const { Deck, CardsGame, Player, Card } = require("./routes/Deck");
require("dotenv").config();

// load config
//dotenv.config({ path: "./config/config.env" });

//middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

const port = 3000;

const start = async () => {
  const game = new CardsGame();
  console.log(game.deck.cards);

  // const deck = new Deck();
  // deck.shuffle();
  // console.log(deck.cards);
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port 3000...`));
  } catch (error) {
    console.log(error);
  }
};

start();
