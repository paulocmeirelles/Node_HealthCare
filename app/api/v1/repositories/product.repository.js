import Product from "../../../main/models/product.model.js";

async function createProduct(data) {
  try {
    return await Product.create(data);
  } catch (err) {
    throw err;
  }
}

async function createProducts(json) {
  try {
    return await Product.bulkCreate(json);
  } catch (err) {
    throw err;
  }
}

async function getProducts() {
  try {
    return await Product.findAll({
      where: { activate: true },
    });
  } catch (err) {
    throw err;
  }
}

async function getProductById(id) {
  try {
    return await Product.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getProductByName(name) {
  try {
    return await Product.findOne({
      where: {
        nome: name,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getProductBySUSEP(susep) {
  try {
    return await Product.findOne({
      where: {
        susep: susep,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function deleteProduct(id) {
  try {
    await Product.update(
      {
        activate: false,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return `Product ${id} was deactivated`;
  } catch (err) {
    throw err;
  }
}

async function updateProduct(data) {
  try {
    await Product.update(
      {
        nome: data.nome,
        susep: data.susep,
        expiracaoDeVenda: data.expiracaoDeVenda,
        valorMinimoAporteInicial: data.valorMinimoAporteInicial,
        valorMinimoAporteExtra: data.valorMinimoAporteExtra,
        idadeDeEntrada: data.idadeDeEntrada,
        idadeDeSaida: data.idadeDeSaida,
        carenciaInicialDeResgate: data.carenciaInicialDeResgate,
        carenciaEntreResgates: data.carenciaEntreResgates,
      },
      {
        where: {
          id: data.id,
        },
      }
    );
    return await getProductByName(data.nome);
  } catch (err) {
    throw err;
  }
}

export default {
  createProduct,
  createProducts,
  getProducts,
  deleteProduct,
  updateProduct,
  getProductBySUSEP,
  getProductById,
};
