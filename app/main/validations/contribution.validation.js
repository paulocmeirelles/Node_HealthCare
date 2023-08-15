function createContributionValidation(data) {
  if (!data.idCliente || !data.idPlano || !data.valorAporte) {
    return false;
  } else {
    return true;
  }
}

export default {
  createContributionValidation,
};
