const exampleContribution = {
  type: "object",
  properties: {
    id: {
      type: "uuid",
      example: "7e468f2e-11b6-41d1-b9f9-ca46dd9f5d8e",
    },
    idCliente: {
      type: "uuid",
      example: "77a819c5-bb2f-4ade-84a2-a81dfc67428b",
    },
    idPlano: {
      type: "uuid",
      example: "24fb6c42-6234-402e-ac84-2306d8c16137",
    },
    valorAporte: {
      type: "decimal",
      example: 100.0,
    },
    feitoEm: {
      type: "timestamp",
      example: "2023-08-16T12:00:00.000Z",
    },
    rollback: {
      type: "boolean",
      example: false,
    },
  },
};

export default {
  exampleContribution,
};
