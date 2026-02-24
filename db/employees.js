const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

export default employees;

export function getEmployees() {
  return employees;
}

export function getEmployee(id) {
  return employees.find((employee) => employee.id === id);
}

export function getRandomEmployee() {
  const random = employees[Math.floor(Math.random() * employees.length)];
  console.log(random);
  return random;
}

export function createEmployee(nameValue) {
  if (!nameValue || typeof nameValue !== "string" || nameValue === "") {
    console.error("employee name is null")
    return null;
  }
  const id = employees[employees.length - 1].id + 1;
  const employee = { id: id, name: nameValue };
  employees.push(employee);
  return employee;
}
