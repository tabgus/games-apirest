const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllGames = () => {
  try {
    const games = DB.games;
    return games;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneGame = (gameId) => {
  try {
    const game = DB.games.find((game) => game.id === gameId);
    if (!game) {
      throw {
        status: 400,
        message: `No se encontró Game con id: ${gameId}`,
      };
    }
    return game;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewGame = (newGame) => {
  //comparar si el game que nos llega ya existe en db
  //La siguiente comparación devuelve -1 si el registro no está dentro del arreglo, si está devuelve la posición del index
  const isExist = DB.games.findIndex((game) => game.name === newGame.name) > -1;

  console.log(isExist);

  if (isExist) {
    throw {
      status: 400,
      message: `Game con el nombre ${newGame.name} ya existe`,
    };
  }

  try {
    //En memoria agregamos al arrego el nuevo registro
    DB.games.push(newGame);

    //Para modificar el fichero DB
    saveToDatabase(DB);

    return newGame;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneGame = (gameId, changes) => {
  try {
    const index = DB.games.findIndex((game) => game.id === gameId);
    if (index === -1) {
      throw {
        status: 400,
        message: `No se encontró Game con id: ${gameId}`,
      };
    }
    const game = DB.games[index];
    const updatedGame = {
      ...game,
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timezone: "UTC" }),
    };
    DB.games[index] = updatedGame;
    saveToDatabase(DB);
    return updatedGame;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneGame = (gameId) => {
  try {
    const index = DB.games.findIndex((game) => game.id === gameId);
    if (index === -1) {
      throw {
        status: 400,
        message: `No se encontró Game con id: ${gameId}`,
      };
    }
    DB.games.splice(index, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllGames,
  createNewGame,
  getOneGame,
  updateOneGame,
  deleteOneGame,
};
