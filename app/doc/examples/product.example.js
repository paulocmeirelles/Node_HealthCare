const exampleProduct = {
  type: "object",
  properties: {
    id: {
      type: "uuid",
      example: "04aac243-be46-4a72-830f-3f3d72f6082e",
    },
    nome: {
      type: "string",
      example: "Brasilprev Longo Prazo",
    },
    susep: {
      type: "string",
      example: "15414900840201817",
    },
    expiracaoDeVenda: {
      type: "timestamp",
      example: "2021-01-01T12:00:00.000Z",
      description: "Expired date to deposit",
    },
    valorMinimoAporteInicial: {
      type: "decimal",
      example: 1000.0,
      description: "Minimal to deposit - First time",
    },
    valorMinimoAporteExtra: {
      type: "decimal",
      example: 100.0,
      description: "Minimal to deposit",
    },
    idadeDeEntrada: {
      type: "integer",
      example: 18,
      description: "By years - time to start deposit it",
    },
    idadeDeSaida: {
      type: "integer",
      example: 60,
      description: "By years - limit of time to rescue the balance",
    },
    carenciaInicialDeResgate: {
      type: "integer",
      example: 60,
      description: "By days - length of time to ask first withdraw",
    },
    carenciaEntreResgates: {
      type: "integer",
      example: 30,
      description: "By days - length of time to ask another withdraw",
    },
    active: {
      type: "boolean",
      example: true,
    },
  },
};

export default {
  exampleProduct,
};
