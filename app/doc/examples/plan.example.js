const examplePlan = {
  type: "object",
  properties: {
    id: {
      type: "uuid",
      example: "f3f4e1ee-e310-41c4-8ba7-23e4e414b396",
    },
    idCliente: {
      type: "uuid",
      example: "18dfeb91-459a-4bc7-9cdd-d93b41f7bf62",
    },
    idProduto: {
      type: "uuid",
      example: "30f6b23f-c93d-4cf9-8916-bcdb9fac83df",
    },
    aporte: {
      type: "decimal",
      example: 2000.0,
    },
    dataDaContratacao: {
      type: "timestamp",
      example: "2022-04-05T12:00:00.000Z",
    },
    idadeDeAposentadoria: {
      type: "integer",
      example: 60,
    },
    active: {
      type: "boolean",
      example: true,
    },
  },
};

export default {
  examplePlan,
};
