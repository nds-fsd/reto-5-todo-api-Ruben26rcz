const todoData = [
  {
    id: 0,
    text: "Hacer la cama",
    fecha: new Date("2022-05-21").toLocaleString("en-GB"),
    done: false
  },
  { 
    id: 1,
    text: "Ir al super",
    fecha: new Date("2022-05-14").toLocaleString("en-GB"),
    done: true
  }
];

module.exports = {
  todoData
};