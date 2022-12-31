import express from "express"
import mongoose from "mongoose";
import * as CategoryController from "./controllers/CategoryController.js"
import * as SubController from "./controllers/SubController.js"
import cors from "cors"

mongoose.connect(
  'mongodb+srv://admin:wwwwww@cluster0.soz1hvz.mongodb.net/1of2?retryWrites=true&w=majority')
  .then(() => console.log("DB OK"))
  .catch((err) => console.log("DB error", err))

const app = express();

app.use(express.json());
app.use(cors());

app.get('/categories', CategoryController.getAll);
app.get('/categories/:name', CategoryController.getOne);
app.get('/categories/:name/:id', SubController.getOne);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});