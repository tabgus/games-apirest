const expres = require("express");
const router = expres.Router();
const gameController = require("../../controllers/gameControlles");

router.get("/", gameController.getAllGames);
router.get("/:gameId", gameController.getOneGame);
router.post("/", gameController.createNewGame);
router.patch("/:gameId", gameController.updateOneGame);
router.delete("/:gameId", gameController.deleteOneGame);

module.exports = router;
