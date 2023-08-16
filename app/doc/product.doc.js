const getProducts = {
  tags: ["product"],
  summary: "Get actived products",
  produces: ["application/json"],
  responses: {
    200: {
      description: "successful operation",
      schema: {
        type: "array",
        items: {
          $ref: "#/definitions/Product",
        },
      },
    },
    400: {
      description: "Error occurred",
    },
  },
};

const putProduct = {
  tags: ["product"],
  summary: "Update a product",
  description: "Update a product with the received parameters",
  consumes: ["application/json"],
  parameters: [
    {
      in: "body",
      name: "body",
      description: "Product object",
      required: true,
      schema: {
        $ref: "#/definitions/Product",
      },
    },
  ],
  responses: {
    200: {
      description: "Product updated",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const postProduct = {
  tags: ["product"],
  summary: "Create a new product",
  description: "Create a new product with the received parameters",
  consumes: ["application/json"],
  parameters: [
    {
      in: "body",
      name: "body",
      description: "Product object",
      required: true,
      schema: {
        $ref: "#/definitions/Product",
      },
    },
  ],
  responses: {
    200: {
      description: "Product created",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const getById = {
  tags: ["product"],
  description: "get a product by id",
  parameters: [
    {
      in: "path",
      name: "id",
      description: "product id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "product founded",
    },
    400: {
      description: "Error occurred",
    },
  },
};

const deleteProduct = {
  tags: ["product"],
  description: "deactivate a product by id",
  parameters: [
    {
      in: "path",
      name: "id",
      description: "product id",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "product deactivate",
    },
    400: {
      description: "Error occurred",
    },
  },
};

export default {
  getProducts,
  putProduct,
  postProduct,
  getById,
  deleteProduct,
};
