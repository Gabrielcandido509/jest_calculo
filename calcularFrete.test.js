const calcularFrete = require("./calcularFrete");

describe("Testes para cálculo de frete", () => {

  // Cenário 1: Compra abaixo de R$ 200,00
  test("Compra abaixo de R$ 200,00 deve pagar R$ 30,00 de frete", () => {
    expect(calcularFrete(100)).toBe(30);
  });

  // Cenário 2: Compra entre R$ 200,00 e R$ 499,99
  test("Compra entre R$ 200,00 e R$ 499,99 deve pagar R$ 15,00 de frete", () => {
    expect(calcularFrete(300)).toBe(15);
  });

  // Cenário 3: Compra acima de R$ 500,00
  test("Compra acima de R$ 500,00 deve ter frete grátis", () => {
    expect(calcularFrete(600)).toBe(0);
  });

  // Cenário 4: Cliente Premium
  test("Cliente Premium deve ter frete grátis independentemente do valor", () => {
    expect(calcularFrete(50, true)).toBe(0);
  });

  // Cenário 5: Valor negativo
  test("Valor negativo deve gerar um erro", () => {
    expect(() => calcularFrete(-100)).toThrow();
  });

  // Cenário 6: Valor não numérico
  test("Valor não numérico deve gerar um erro", () => {
    expect(() => calcularFrete("100")).toThrow();
  });

  // Desafio extra: R$ 199,99
  test("Compra de R$ 199,99 deve pagar R$ 30,00 de frete", () => {
    expect(calcularFrete(199.99)).toBe(30);
  });

  // Desafio extra: R$ 200,00
  test("Compra de R$ 200,00 deve pagar R$ 15,00 de frete", () => {
    expect(calcularFrete(200)).toBe(15);
  });

  // Desafio extra: R$ 500,00
  test("Compra de R$ 500,00 deve pagar R$ 15,00 de frete", () => {
    expect(calcularFrete(500)).toBe(15);
  });

  // Desafio extra: R$ 500,01
  test("Compra de R$ 500,01 deve ter frete grátis", () => {
    expect(calcularFrete(500.01)).toBe(0);
  });

});

