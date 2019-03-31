import mongoose from 'mongoose'
import models from '../../common/models';

const getMongoURL = (options) => {
    const url = options.servers
        .reduce((prev, cur) => prev + cur + ',',
            `mongodb://${options.user}:${options.pass}@`);
    return `${url.substr(0, url.length - 1)}/${options.db}`
};

const connect = (options, mediator) => {
    mediator.once('boot.ready', () => {
        console.log('Connecting to database...')
        mongoose.connect(getMongoURL(options), {
            useNewUrlParser: true
        }).then((db) => mediator.emit('db.ready', models),
            err => mediator.emit('db.error', err));
    });
};
const db = {
    connect
}

export default db