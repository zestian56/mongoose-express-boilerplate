"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

var dbSettings = {
  db: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
  servers: process.env.DB_SERVERS.split(" ")
};
var serverSettings = {
  port: process.env.PORT,
  host: process.env.SERVICEHOST
};
var config = {
  serverSettings: serverSettings,
  dbSettings: dbSettings
};
var _default = config;
exports.default = _default;
//# sourceMappingURL=config.js.map