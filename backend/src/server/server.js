import {} from "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import session from "express-session";

//middlewares
import { morganMiddleware } from "../middlewares/morgan/index.js";

//Routers
import apiRouter from "../routes/router.js";

const cOptions = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
};

const app = express();

app.use(cors(cOptions));

app.use(helmet());
// app.use(morgan("combined"));
app.use(morganMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("x-powered-by");

app.set("port", process.env.PORT || 3352);

app.set("trust proxy", 1);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    name: "sessionId",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 3600000,
    },
  })
);

app.get("/", async (req, res) => {
  res.json({
    name: "Country App",
    description: "API for the Country App Interview",
    author: "Daniel Saud",
    version: "1.0.0",
  });
});

app.get("/health", (req, res) => {
  return res.status(200).send("OK");
});

app.use("/api", apiRouter);

app.listen(app.get("port"));
console.log("Backend is Started on", `port: ${app.get("port")}`);

export default app;
