import "reflect-metadata";
import { sequelize } from "./database/sequelize-source";
import express from "express";
import router from "./routes/index";

const app = express();

// Middleware for parsing requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route setup
app.use("/api", router);

const PORT = 3000;

// Test connection to the database
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});

export default app;
