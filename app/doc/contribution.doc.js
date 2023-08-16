const getContributions = {
  tags: ["contribution"],
  summary: "Get actived contributions",
  produces: ["application/json"],
  responses: {
    200: {
      description: "successful operation",
      schema: {
        type: "array",
        items: {
          $ref: "#/definitions/Contribution",
        },
      },
    },
    400: {
      description: "Error occurred",
    },
  },
};

const postContribution = {
  tags: ["contribution"],
  summary: "Create a new contribution",
  description: "Create a new contribution with the received parameters",
  consumes: ["application/json"],
  parameters: [
    {
      in: "body",
      name: "body",
      description: "contribution object",
      required: true,
      schema: {
        $ref: "#/definitions/Contribution",
      },
    },
  ],
  responses: {
    200: {
      description: "contribution created",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const getById = {
  tags: ["contribution"],
  description: "get a contribution by id",
  parameters: [
    {
      in: "path",
      name: "id",
      description: "contribution id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "contribution founded",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const deleteContribution = {
  tags: ["contribution"],
  description: "deactivate a contribution by id",
  parameters: [
    {
      in: "path",
      name: "id",
      description: "contribution id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "contribution deactivate",
    },
    400: {
      description: "Error occurred",
    },
  },
};

export default {
  getContributions,
  postContribution,
  getById,
  deleteContribution,
};
