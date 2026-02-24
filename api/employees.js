import express from "express";
import {
  getEmployees,
  getRandomEmployee,
  getEmployee,
  createEmployee,
} from "#db/employees";

const router = express.Router();

export default router;

router.get("/", fetchEmployees);
router.get("/random", fetchRandomEmployee);
router.get("/:id", fetchEmployeeById);
router.post("/", postEmployee);

function fetchRandomEmployee(request, response) {
  response.send(getRandomEmployee());
}

function postEmployee(request, response) {
  if (!request.body || !request.body.name) {
    return response
      .status(400)
      .send("Invalid Request: Must Provide Employee Name");
  }
  const newEmployee = createEmployee(request.body.name);
  if (newEmployee) {
    return response.status(201).send(JSON.stringify(newEmployee));
  }

  response.status(400).send("Invalid Request: Must Provide Employee Name");
}

function fetchEmployees(request, response) {
  response.send(getEmployees());
}

function fetchEmployeeById(request, response) {
  const employee = getEmployee(Number.parseInt(request.params.id));
  if (employee !== undefined) {
    return response.send(employee);
  }
  response.status(404).send("No employee found with id " + request.params.id);
}
