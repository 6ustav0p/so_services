const { db } = require("../database/dbConnection");

const CatalogModel = {
  postCatalog: (catalog) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO catalogo (nombre) VALUES (?)",
        [catalog],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  findCatalog: (nombre) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM catalogo WHERE nombre = ?",
        nombre,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result[0]);
          }
        }
      );
    });
  },
  getCatalog: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM catalogo", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  getCatalogByName: (nombre) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM catalogo WHERE nombre = ?",
        nombre,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result[0]);
          }
        }
      );
    });
  },
  getCatalogByID: (CID) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM catalogo WHERE CatalogoID = ?",
        CID,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result[0]);
          }
        }
      );
    });
  },
};

module.exports = {
  CatalogModel,
};
