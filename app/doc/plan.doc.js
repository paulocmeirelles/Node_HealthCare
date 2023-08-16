const getPlans = {
  tags: ["plan"],
  summary: "Get actived plans",
  produces: ["application/json"],
  responses: {
    200: {
      description: "successful operation",
      schema: {
        type: "array",
        items: {
          $ref: "#/definitions/Plan",
        },
      },
    },
    400: {
      description: "Error occurred",
    },
  },
};

const putPlan = {
  tags: ["plan"],
  summary: "Update a plan",
  description: "Update a plan with the received parameters",
  consumes: ["application/json"],
  parameters: [
    {
      in: "body",
      name: "body",
      description: "Plan object",
      required: true,
      schema: {
        $ref: "#/definitions/Plan",
      },
    },
  ],
  responses: {
    200: {
      description: "Plan updated",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const postPlan = {
  tags: ["plan"],
  summary: "Create a new plan",
  description: "Create a new plan with the received parameters",
  consumes: ["application/json"],
  parameters: [
    {
      in: "body",
      name: "body",
      description: "Plan object",
      required: true,
      schema: {
        $ref: "#/definitions/Plan",
      },
    },
  ],
  responses: {
    200: {
      description: "Plan created",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const getById = {
  tags: ["plan"],
  description: "get a plan by id",
  parameters: [
    {
      in: "path",
      name: "id",
      description: "plan id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "plan founded",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const deletePlan = {
  tags: ["plan"],
  description: "deactivate a plan by id",
  parameters: [
    {
      in: "path",
      name: "id",
      description: "plan id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "plan deactivate",
    },
    400: {
      description: "Error occurred",
    },
  },
};

export default {
  getPlans,
  putPlan,
  postPlan,
  getById,
  deletePlan,
};
