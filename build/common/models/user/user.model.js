"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  }
});
userSchema.set('toObject', {
  virtuals: true
});
userSchema.method("toGraph", function toGraph() {
  return JSON.parse(JSON.stringify(this));
});
var User = (0, _mongoose.model)('User', userSchema);
var _default = User;
exports.default = _default;
//# sourceMappingURL=user.model.js.map