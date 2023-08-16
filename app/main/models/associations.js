import { Association } from "sequelize";
import Client from "./client.model.js";
import Contribution from "./contribution.model.js";
import Plan from "./plan.model.js";
import Product from "./product.model.js";

Client.sync({ force: true });
Contribution.sync({ force: true });
Plan.sync({ force: true });
Product.sync({ force: true });

export default Association;
