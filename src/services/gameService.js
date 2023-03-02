const Game = require("../database/Game");
const { v4: uuid } = require("uuid");
const { all } = require("../v1/routes/gameRoutes");

const getAllGames = () => {
  try {
    const allGames = Game.getAllGames();
    return allGames;
  } catch (error) {
    throw error;
  }
};

const getOneGame = (gameId) => {
  try {
    const game = Game.getOneGame(gameId);
    return game;
  } catch (error) {
    throw error;
  }
};

const createNewGame = (newGame) => {
  const gameToInsert = {
    ...newGame,
    //Al registro que nos llega debemos agregar un id único y las fechas de creación y actualización
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdGame = Game.createNewGame(gameToInsert);
    return createdGame;
  } catch (error) {
    throw error;
  }
};

const updateOneGame = (gameId, changes) => {
  try {
    const updatedGame = Game.updateOneGame(gameId, changes);
    return updatedGame;
  } catch (error) {
    throw error;
  }
};

const deleteOneGame = (gameId) => {
  try {
    Game.deleteOneGame(gameId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllGames,
  getOneGame,
  createNewGame,
  updateOneGame,
  deleteOneGame,
};
