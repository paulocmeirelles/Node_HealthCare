export const swaggerDocument = {
  swagger: "2.0",
  info: {
    description: "API Documentation Retirement Plan",
    version: "1.0.0",
    title: "API documentation",
  },
  host: "localhost:3000",
  tags: [
    {
      name: "Client",
      description: "Client management",
    },
  ],
  paths: {
    "/api/clients": {
      get: {
        tags: ["client"],
        summary: "Get existing clients",
        description: "Get existing client description",
        produces: ["application/json"],
        responses: {
          200: {
            description: "successful operation",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/Lote",
              },
            },
          },
          400: {
            description: "Error occurred",
          },
        },
      },
      post: {
        tags: ["client"],
        summary: "Create a new client",
        description: "Create a new client with the received parameters",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Lote object",
            required: true,
            schema: {
              $ref: "#/definitions/Lote",
            },
          },
        ],
        responses: {
          200: {
            description: "Lote created",
          },
          400: {
            description: "Error occurred",
          },
        },
      },
    },
  },
  definitions: {
    Lote: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          example: 2,
        },
        nome: {
          type: "string",
          example: "Paulo Meirelles",
        },
        ativo: {
          type: "boolean",
          example: true,
        },
        criado_em: {
          type: "timestamp",
          example: "2023-07-12 14:27:30.005",
        },
      },
    },
  },
};
