const getClients = {
  tags: ["client"],
  summary: "Get actived clients",
  produces: ["application/json"],
  responses: {
    200: {
      description: "successful operation",
      schema: {
        type: "array",
        items: {
          $ref: "#/definitions/Client",
        },
      },
    },
    400: {
      description: "Error occurred",
    },
  },
};

const putClient = {
  tags: ["client"],
  summary: "Update a client",
  description: "Update a client with the received parameters",
  consumes: ["application/json"],
  parameters: [
    {
      in: "body",
      name: "body",
      description: "Client object",
      required: true,
      schema: {
        $ref: "#/definitions/Client",
      },
    },
  ],
  responses: {
    200: {
      description: "Client updated",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const postClient = {
  tags: ["client"],
  summary: "Create a new client",
  description: "Create a new client with the received parameters",
  consumes: ["application/json"],
  parameters: [
    {
      in: "body",
      name: "body",
      description: "Client object",
      required: true,
      schema: {
        $ref: "#/definitions/Client",
      },
    },
  ],
  responses: {
    200: {
      description: "Client created",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const getById = {
  tags: ["client"],
  description: "get a client by id",
  parameters: [
    {
      in: "path",
      name: "id",
      description: "client id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "client founded",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const deleteClient = {
  tags: ["client"],
  description: "deactivate a client by id",
  parameters: [
    {
      in: "path",
      name: "id",
      description: "client id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "client deactivate",
    },
    400: {
      description: "Error occurred",
    },
  },
};

export default {
  getClients,
  putClient,
  postClient,
  getById,
  deleteClient,
};
