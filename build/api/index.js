"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _users = _interopRequireDefault(require("./users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = function api(app, models) {
  (0, _users.default)(app, models);
};

var _default = api;
exports.default = _default;
//# sourceMappingURL=index.js.map