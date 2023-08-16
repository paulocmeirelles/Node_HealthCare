import Sequelize from "sequelize";
import pg from "../../api/connectPG.js";

const Plan = pg.define(
  "plans",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    idCliente: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    idProduto: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    aporte: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
    },
    dataDaContratacao: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    idadeDeAposentadoria: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
  },
  { timestamps: false }
);

export default Plan;
