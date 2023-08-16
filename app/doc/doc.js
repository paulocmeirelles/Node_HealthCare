import withdrawDoc from "./withdraw.doc.js";
import clientDoc from "./client.doc.js";
import contributionDoc from "./contribution.doc.js";
import planDoc from "./plan.doc.js";
import productDoc from "./product.doc.js";
import productExample from "./examples/product.example.js";
import clientExample from "./examples/client.example.js";
import contributionExample from "./examples/contribution.example.js";
import planExample from "./examples/plan.example.js";

export const swaggerDocument = {
  swagger: "2.0",
  info: {
    description: "Documentation about API - Retirement Plan",
    version: "1.0.0",
    title: "API documentation Retirement Plan",
  },
  host: "localhost:3000",
  paths: {
    "/api/clients": {
      get: clientDoc.getClients,
      put: clientDoc.putClient,
      post: clientDoc.postClient,
    },
    "/api/clients/{id}": {
      get: clientDoc.getById,
      delete: clientDoc.deleteClient,
    },
    "/api/contributions": {
      get: contributionDoc.getContributions,
      post: contributionDoc.postContribution,
    },
    "/api/contributions/{id}": {
      get: contributionDoc.getById,
      delete: contributionDoc.deleteContribution,
    },
    "/api/plans": {
      get: planDoc.getPlans,
      post: planDoc.postPlan,
      put: planDoc.putPlan,
    },
    "/api/plans/{id}": {
      get: planDoc.getById,
      delete: planDoc.deletePlan,
    },
    "/api/products": {
      get: productDoc.getProducts,
      post: productDoc.postProduct,
      put: productDoc.putProduct,
    },
    "/api/products/{id}": {
      get: productDoc.getById,
      delete: productDoc.deleteProduct,
    },
    "/api/withdraw": {
      post: withdrawDoc.postWithdraw,
    },
    "/api/withdraw/{id}": {
      get: withdrawDoc.getById,
    },
  },
  definitions: {
    Client: clientExample.exampleClient,
    Contribution: contributionExample.exampleContribution,
    Plan: planExample.examplePlan,
    Product: productExample.exampleProduct,
  },
};
