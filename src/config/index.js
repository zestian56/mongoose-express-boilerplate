import config from './config'
import db from './db/mongo';
export default {
    ...config,
    db
}