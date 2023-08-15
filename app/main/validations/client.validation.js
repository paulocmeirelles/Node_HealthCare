function createClientValidation(data) {
  if (
    !data.cpf ||
    !data.nome ||
    !data.nome ||
    !data.email ||
    !data.dataDeNascimento ||
    !data.genero ||
    !data.rendaMensal
  ) {
    return false;
  } else {
    return true;
  }
}

export default {
  createClientValidation,
};
