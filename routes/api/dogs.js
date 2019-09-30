const router = require("express").Router();
const dogsController = require("../../controllers/dogsController");

// Matches with "/api/dogs"
router
  .route("/")
  .get(dogsController.findAll)
  .post(dogsController.create);

// Matches with "/api/dogs/:id"
router
  .route("/:id")
  .get(dogsController.findById)
  .put(dogsController.update)
  .delete(dogsController.remove);

module.exports = router;
