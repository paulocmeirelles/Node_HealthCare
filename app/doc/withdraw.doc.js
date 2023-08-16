const getWithdraws = {
  tags: ["withdraw"],
  summary: "Get actived withdraws",
  produces: ["application/json"],
  responses: {
    200: {
      description: "successful operation",
      schema: {
        type: "array",
        items: {
          $ref: "#/definitions/Withdraw",
        },
      },
    },
    400: {
      description: "Error occurred",
    },
  },
};

const putWithdraw = {
  tags: ["withdraw"],
  summary: "Update a withdraw",
  description: "Update a withdraw with the received parameters",
  consumes: ["application/json"],
  parameters: [
    {
      in: "body",
      name: "body",
      description: "Withdraw object",
      required: true,
      schema: {
        $ref: "#/definitions/Withdraw",
      },
    },
  ],
  responses: {
    200: {
      description: "Withdraw updated",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const postWithdraw = {
  tags: ["withdraw"],
  summary: "Create a new withdraw",
  description: "Create a new withdraw with the received parameters",
  consumes: ["application/json"],
  parameters: [
    {
      in: "body",
      name: "body",
      description: "Withdraw object",
      required: true,
      schema: {
        $ref: "#/definitions/Withdraw",
      },
    },
  ],
  responses: {
    200: {
      description: "Withdraw created",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const getById = {
  tags: ["withdraw"],
  description: "get a withdraw by id",
  parameters: [
    {
      in: "path",
      name: "id",
      description: "withdraw id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "withdraw founded",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const deleteWithdraw = {
  tags: ["withdraw"],
  description: "deactivate a withdraw by id",
  parameters: [
    {
      in: "path",
      name: "id",
      description: "withdraw id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "withdraw deactivate",
    },
    400: {
      description: "Error occurred",
    },
  },
};

export default {
  getWithdraws,
  putWithdraw,
  postWithdraw,
  getById,
  deleteWithdraw,
};
