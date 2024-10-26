const { db } = require("../database/dbConnection");

const ProcessModel = {
  postProcess: ({
    nombre,
    usuario,
    descripcion,
    prioridad,
    Catalogo_CatalogoID,
    PID
  }) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO proceso (PID, nombre, usuario, descripcion, prioridad, Catalogo_CatalogoID) VALUES (?, ?, ?, ?, ?, ?)",
        [PID, nombre, usuario, descripcion, prioridad, Catalogo_CatalogoID],
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
  getProcess: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM proceso", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  getProcessByCatalogID: (CID) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM proceso WHERE Catalogo_CatalogoID = ?", CID, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = {
    ProcessModel,
};
