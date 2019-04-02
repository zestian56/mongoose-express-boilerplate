"use strict";

var _events = require("events");

var _server = _interopRequireDefault(require("./server/server"));

var _config = _interopRequireDefault(require("./config/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var serverSettings = _config.default.serverSettings,
    dbSettings = _config.default.dbSettings,
    db = _config.default.db;
process.on('uncaughtException', function (err) {
  console.error('Unhandled Exception', err);
});
process.on('uncaughtRejection', function (err, promise) {
  console.error('Unhandled Rejection', err);
});
var mediator = new _events.EventEmitter();

var main =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(models) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('Database ready');
            console.log('Initializing server...');
            _context.next = 4;
            return _server.default.start({
              port: serverSettings.port,
              host: serverSettings.host
            }, models);

          case 4:
            console.log("Server running on ".concat(serverSettings.host, ":").concat(serverSettings.port));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main(_x) {
    return _ref.apply(this, arguments);
  };
}();

mediator.on('db.ready', main);
mediator.on('db.error', function (err) {
  return console.log('Conection error...', err);
});
db.connect(dbSettings, mediator);
mediator.emit('boot.ready');
//# sourceMappingURL=index.js.map