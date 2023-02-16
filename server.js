const express = require("express");
const dotenv = require("dotenv");

// Route files
const bootcampsRoutes = require("./routes/bootcamps");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 3000;

// Mount Routers
app.use("/api/v1/bootcamps", bootcampsRoutes);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode, on port ${PORT}`)
);
