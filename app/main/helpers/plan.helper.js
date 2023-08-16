function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function createContribution(data) {
  const contribution = {
    idCliente: data.idCliente,
    idPlano: data.id,
    valorAporte: data.aporte,
  };
  return contribution;
}

export default {
  getAge,
  createContribution,
};
