import Sequelize from "sequelize";
import pg from "../../api/connectPG.js";

const Product = pg.define(
  "products",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    susep: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    expiracaoDeVenda: {
      type: "TIMESTAMP",
      allowNull: false,
    },
    valorMinimoAporteInicial: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
    },
    valorMinimoAporteExtra: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
    },
    idadeDeEntrada: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    idadeDeSaida: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    carenciaInicialDeResgate: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    carenciaEntreResgates: {
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

export default Product;
