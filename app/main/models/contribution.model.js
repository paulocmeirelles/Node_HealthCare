import Sequelize from "sequelize";
import pg from "../../api/repositories/connectPG.js";

const Contribution = pg.define(
  "contributions",
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
    idPlano: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valorAporte: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
    },
    feitoEm: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    rollback: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Contribution.sync({ force: true });

export default Contribution;
