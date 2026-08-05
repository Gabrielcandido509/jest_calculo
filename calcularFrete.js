
function calcularFrete(valorCompra, clientePremium = false) {
  if (typeof valorCompra !== "number") {
    throw new Error("O valor da compra deve ser um número");
  }

  if (valorCompra <= 0) {
    throw new Error("O valor da compra deve ser maior que zero");
  }

  // Cliente Premium possui frete grátis
  if (clientePremium) {
    return 0;
  }

  // Compras acima de R$ 500,00 possuem frete grátis
  if (valorCompra > 500) {
    return 0;
  }

  // Compras entre R$ 200,00 e R$ 499,99
  if (valorCompra >= 200) {
    return 15;
  }

  // Compras abaixo de R$ 200,00
  return 30;
}

module.exports = calcularFrete;

