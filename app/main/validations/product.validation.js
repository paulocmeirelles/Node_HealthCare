function createProductValidation(data) {
  if (
    !data.nome ||
    !data.susep ||
    !data.expiracaoDeVenda ||
    !data.valorMinimoAporteInicial ||
    !data.valorMinimoAporteExtra ||
    !data.idadeDeEntrada ||
    !data.idadeDeSaida ||
    !data.carenciaInicialDeResgate ||
    !data.carenciaEntreResgates
  ) {
    return false;
  } else {
    return true;
  }
}

function updateProductValidation(data) {
  if (
    !data.id ||
    !data.nome ||
    !data.susep ||
    !data.expiracaoDeVenda ||
    !data.valorMinimoAporteInicial ||
    !data.valorMinimoAporteExtra ||
    !data.idadeDeEntrada ||
    !data.idadeDeSaida ||
    !data.carenciaInicialDeResgate ||
    !data.carenciaEntreResgates
  ) {
    return false;
  } else {
    return true;
  }
}

export default {
  createProductValidation,
  updateProductValidation,
};
