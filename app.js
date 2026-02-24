import express from "express";
import router from "#api/employees";

const app = express();

export default app;

app.get("/", helloWorld);

app.use(express.json());
app.use("/employees", router);
app.use(errorHandling);

function errorHandling(err, request, response, next) {
  console.log(err);
  response.status(500).send("Sorry this resource is unavailable.");
}

function helloWorld(request, response) {
  response.send("Hello Employees");
}
