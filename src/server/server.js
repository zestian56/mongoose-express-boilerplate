import express from 'express';
import cors from "cors";
import api from './../api';

const start = async (options, models) => {
  return new Promise(async (resolve, reject) => {
    const app = express();
    app.use(cors());
    api(app,models);
    
    resolve(await app.listen(options.port));
  });
};


export default { start };
