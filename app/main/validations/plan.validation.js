function createPlanValidation(data) {
  if (
    !data.idCliente ||
    !data.idProduto ||
    !data.aporte ||
    !data.idadeDeAposentadoria
  ) {
    return false;
  } else {
    return true;
  }
}

export default {
  createPlanValidation,
};
