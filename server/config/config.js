/**
 * Config module.
 *
 * @module config/config
 */

const dayInSeconds = 60 * 60 * 24
const weekInSeconds = dayInSeconds * 7
const minuteInSeconds = 60

const mongoSettings = {
    host: process.env.MONGO_DATA_URL || 'localhost',
    port: process.env.MONGO_DATA_PORT || 27017,
    dbName: process.env.MAP_DB_NAME || 'perry-data',
    env: process.env.MONGO_DATA_ENV || 'dev',
    debug: true,
}

module.exports = Object.assign(
    {},
    {
        mongoSettings,
        weekInSeconds,
        minuteInSeconds,
    }
)
