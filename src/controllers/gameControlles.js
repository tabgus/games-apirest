const gameService = require("../services/gameService");

const getAllGames = (req, res) => {
  try {
    const allGames = gameService.getAllGames();
    //res.send({ status: "ok", data: allGames });
    res.status(200).json(allGames);
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "Hay un error",
      data: { error: error?.message || error },
    });
  }
};

const getOneGame = (req, res) => {
  const {
    params: { gameId },
  } = req;

  if (!gameId) {
    res.status(400).send({
      status: "Hay un error",
      data: { error: "Parametro ':gameId' no puede estar vacío" },
    });
  }

  try {
    const game = gameService.getOneGame(gameId);
    res.send({ status: "OK", data: game });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "Hay un error",
      data: { error: error?.message || error },
    });
  }
};

const createNewGame = (req, res) => {
  const { name, description, platform } = req.body;
  if (!name || !description || !platform) {
    res
      .status(400)
      .send({ status: "Hay un error", data: { error: "Datos incompletos" } });
  }
  const newGame = {
    name,
    description,
    platform,
  };

  try {
    const createdGame = gameService.createNewGame(newGame);
    res.send({ status: "OK", data: createdGame });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "Hay un error",
      data: { error: error?.message || error },
    });
  }
};

const updateOneGame = (req, res) => {
  const {
    body,
    params: { gameId },
  } = req;

  if (!gameId) {
    res.status(400).send({
      status: "Hay un error",
      data: { error: "Parametro ':gameId' no puede estar vacío" },
    });
  }

  try {
    const updatedGame = gameService.updateOneGame(gameId, body);
    res.send({ status: "OK", data: updatedGame });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "Hay un error",
      data: { error: error?.message || error },
    });
  }
};

const deleteOneGame = (req, res) => {
  const {
    params: { gameId },
  } = req;
  if (!gameId) {
    res.status(400).send({
      status: "Hay un error",
      data: { error: "Parametro ':gameId' no puede estar vacío" },
    });
  }

  try {
    gameService.deleteOneGame(gameId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "Hay un error",
      data: { error: error?.message || error },
    });
  }
};

module.exports = {
  getAllGames,
  getOneGame,
  createNewGame,
  updateOneGame,
  deleteOneGame,
};
