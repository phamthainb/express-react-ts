import cors from "cors";
import express from "express";
import multer from "multer";
import path from "path";
import { AppDataSource, getDatabaseVersion } from "./config/data-source";
import { getConfig } from "./config/getEnv";
import { genWallet } from "./services/wallet";

const app = express();
const PORT = getConfig().APP_PORT;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });

AppDataSource.initialize()
  .then(async () => {
    console.log("Connected to the database!");
    await getDatabaseVersion();

    app.use(cors({ origin: "*" }));
    app.use(express.json());

    // Serve React static files
    const buildPath = path.join(__dirname, "../web");
    app.use(express.static(buildPath));

    // wallet
    app.get(`/api/wallet`, genWallet);

    // serve web index.html
    app.get("*", (req, res) => {
      res.sendFile(path.join(buildPath, "index.html"));
    });

    // app
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("Database connection error:", error));
