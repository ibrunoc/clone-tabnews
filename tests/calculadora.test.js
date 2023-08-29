const calculadora = require("../modules/calculadora.js");

test("somar 5 + 5 deveria retornar 10", () => {
  const resultado = calculadora.somar(5, 5);
  expect(resultado).toBe(10);
});

test("somar 200 + 200 deveria retornar 400", () => {
  const resultado = calculadora.somar(200, 200);
  expect(resultado).toBe(400);
});

test("N + 200 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("N", 200);
  expect(resultado).toBe("Erro, valor inválido!");
});

test("200 + N deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar(200, "N");
  expect(resultado).toBe("Erro, valor inválido!");
});

// test("nome do teste", callbackFunction);

// function callbackFunction() {
//   console.log("tome");
// }

// test("segundo nome", () => {
//   console.log("outra maneira de escrever");
// });

// test("teste três", function () {
//   console.log("3");
// });

// test("espero que 1 seja 1", () => {
//   expect(1).toBe(1);
// });
