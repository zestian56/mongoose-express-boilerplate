import express from "express";
import cors from "cors";
import api from "./../api";
import bodyParser from "body-parser";

const start = async (options, models) => {
  return new Promise(async (resolve, reject) => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json({ limit: "5mb" }));
    app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));


    api(app, models);

    resolve(await app.listen(options.port));
  });
};

export default { start };
