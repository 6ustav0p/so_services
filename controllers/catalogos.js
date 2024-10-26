const { CatalogModel } = require("../models/catalogos");
const { ProcessModel } = require("../models/procesos");

const postCatalogos = async (req, res) => {
  const { nombre, procesos } = req.body;

  try {
    const existCatalog = await CatalogModel.findCatalog(nombre);

    if (existCatalog) {
      return res.status(400).json({
        msg: "El catalogo ya existe",
      });
    }

    //! Hacer valiadcion si ya existe un catalogo con ese nombre

    // Crear un nuevo catalogo
    const catalog = await CatalogModel.postCatalog(nombre);
    // Crear los procesos del catalogo en la tabla procesos
    procesos.forEach(async (proceso) => {
      await ProcessModel.postProcess({
        ...proceso,
        Catalogo_CatalogoID: catalog.insertId,
      });
    });

    res.json({
      nombre,
      procesos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const getCatalogsWithProcess = async (req, res) => {
  try {
    const catalogos = await CatalogModel.getCatalog();

    if (catalogos.length === 0) {
      return res.status(400).json({
        msg: "No hay catalogos en la base de datos",
      });
    }

    const catalogosWithProcess = await Promise.all(
      catalogos.map(async (catalogo) => {
        const procesos = await ProcessModel.getProcessByCatalogID(
          catalogo.catalogoID
        );
        return {
          ...catalogo,
          procesos,
        };
      })
    );

    res.status(200).json({
      catalogosWithProcess,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const getCatalogByIDWithProcess = async (req, res) => {
  const CID = req.params.id;

  try {
    const catalogo = await CatalogModel.getCatalogByID(CID);
    if (catalogo.length === 0) {
      return res.status(400).json({
        msg: "No existe ese catalogo en la base de datos",
      });
    }

    const procesos = await ProcessModel.getProcessByCatalogID(CID);

    res.status(200).json({
      catalogo,
      procesos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
const getCatalogByNameWithProcess = async (req, res) => {
  const name = req.params.name;

  try {
    const catalogo = await CatalogModel.getCatalogByName(name);

    if (!catalogo) {
      return res.status(400).json({
        msg: "No existe ese catalogo en la base de datos",
      });
    }

    const procesos = await ProcessModel.getProcessByCatalogID(
      catalogo.catalogoID
    );

    res.status(200).json({
      catalogo,
      procesos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  postCatalogos,
  getCatalogsWithProcess,
  getCatalogByIDWithProcess,
  getCatalogByNameWithProcess,
};
