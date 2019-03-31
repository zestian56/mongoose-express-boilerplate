import { EventEmitter } from 'events'
import server from './server/server'
import config from './config/'

const { serverSettings, dbSettings, db } = config;

process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception', err)
});
process.on('uncaughtRejection', (err, promise) => {
    console.error('Unhandled Rejection', err)
});

const mediator = new EventEmitter();
const main = async (models) => {
    console.log('Database ready')
    console.log('Initializing server...')
    await server.start({
        port: serverSettings.port,
        host: serverSettings.host
    }, models);
    console.log(`Server running on ${serverSettings.host}:${serverSettings.port}`);
}

mediator.on('db.ready', main);
mediator.on('db.error', (err) => console.log('Conection error...', err));

db.connect(dbSettings, mediator);

mediator.emit('boot.ready');