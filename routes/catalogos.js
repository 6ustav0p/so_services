const { Router } = require("express");
const { check } = require("express-validator");
const {
  postCatalogos,
  getCatalogsWithProcess,
  getCatalogByIDWithProcess,
  getCatalogByNameWithProcess,
} = require("../controllers/catalogos");

const router = Router();

//** POST */

router.post(
  "/",
  [
    //? Validar los campos del catalogo
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    //? Validar los campos de los procesos del catalogo vieneb en un arreglo

    // PID, NOMBRE, USUARIO, DESCRIPCION, PRIORIDAD
    check("procesos", "Los procesos son obligatorios")
      .isArray()
      .not()
      .isEmpty(),
  ],
  postCatalogos
);

//** GET */

router.get("/byname/:name", [], getCatalogByNameWithProcess);
router.get("/byid/:id", [], getCatalogByIDWithProcess);
router.get("/", [], getCatalogsWithProcess);

module.exports = router;
