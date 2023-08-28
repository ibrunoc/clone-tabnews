test("nome do teste", callbackFunction);

function callbackFunction() {
  console.log("tome");
}

test("segundo nome", () => {
  console.log("outra maneira de escrever");
});

test("teste três", function () {
  console.log("3");
});

test("espero que 1 seja 1", () => {
  expect(1).toBe(1);
});
