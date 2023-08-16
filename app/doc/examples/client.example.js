const exampleClient = {
  type: "object",
  properties: {
    id: {
      type: "uuid",
      example: "7e468f2e-11b6-41d1-b9f9-ca46dd9f5d8e",
    },
    cpf: {
      type: "string",
      example: "45645645600",
    },
    nome: {
      type: "string",
      example: "José da Silva",
    },
    email: {
      type: "string",
      example: "jose@cliente.com",
    },
    dataDeNascimento: {
      type: "timestamp",
      example: "2010-08-24T12:00:00.000Z",
    },
    genero: {
      type: "string",
      example: "Masculino",
    },
    rendaMensal: {
      type: "decimal",
      example: 2899.5,
    },
    active: {
      type: "boolean",
      example: true,
    },
  },
};

export default {
  exampleClient,
};
