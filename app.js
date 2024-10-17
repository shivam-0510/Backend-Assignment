const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const comicBookRoutes = require("./routes/comicBookRoutes");
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

app.use(express.json());
app.use("/api/v1/comics", comicBookRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
