import Sequelize from "sequelize";
import pg from "../../api/repositories/connectPG.js";

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
    activate: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
  },
  { timestamps: false }
);

Product.sync({ force: true });

export default Product;
