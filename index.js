const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// ? 1

console.log(`--------------------------------------------------------`);
console.log(`A) Las pizzas que tengan un id impar.`);

pizzas.forEach(pizza => {
  if (pizza.id % 2 != 0) {
    console.log(`La ${pizza.nombre} tiene ID impar. (${pizza.id})`);
  }
});

// ? 2

console.log(`--------------------------------------------------------`);
console.log(`B) Responder: ¿Hay alguna pizza que valga menos de $600?`);

pizzas.forEach(pizza => {
  if (pizza.precio < 600) {
    console.log(`La ${pizza.nombre} vale ${pizza.precio}.`);
  }
});

// ? 3

console.log(`--------------------------------------------------------`);
console.log(`C) El nombre de cada pizza con su respectivo precio.`);

pizzas.forEach(pizza => {
  console.log(`La ${pizza.nombre} vale ${pizza.precio}.`);
})

// ? 4

console.log(`--------------------------------------------------------`);
console.log(`D) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).`);

pizzas.forEach(pizza => {
  console.log(`${pizza.id}) La ${pizza.nombre} tiene:`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log(ingrediente);
  });
  console.log(`------------`);
});