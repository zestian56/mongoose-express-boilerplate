"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _models = _interopRequireDefault(require("../../common/models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMongoURL = function getMongoURL(options) {
  var url = options.servers.reduce(function (prev, cur) {
    return prev + cur + ',';
  }, "mongodb://".concat(options.user, ":").concat(options.pass, "@"));
  return "".concat(url.substr(0, url.length - 1), "/").concat(options.db);
};

var connect = function connect(options, mediator) {
  mediator.once('boot.ready', function () {
    console.log('Connecting to database...');

    _mongoose.default.connect(getMongoURL(options), {
      useNewUrlParser: true
    }).then(function (db) {
      return mediator.emit('db.ready', _models.default);
    }, function (err) {
      return mediator.emit('db.error', err);
    });
  });
};

var db = {
  connect: connect
};
var _default = db;
exports.default = _default;
//# sourceMappingURL=mongo.js.map