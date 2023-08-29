function somar(n1, n2) {
  if (typeof n1 == "string" || typeof n2 == "string") {
    return "Erro, valor inválido!";
  } else if (n1 == null || n2 == null) {
    return "Insira um valor!";
  }

  return n1 + n2;
}

function dividi(n1, n2) {
  if (n1 == 0 || n2 == 0) {
    return "O número '0' não pode ser dividido!";
  }

  return n1 / n2;
}

exports.somar = somar;
exports.dividi = dividi;
