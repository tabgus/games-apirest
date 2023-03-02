const express = require("express");
const v1GameRouter = require("./v1/routes/gameRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/games", v1GameRouter);

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
