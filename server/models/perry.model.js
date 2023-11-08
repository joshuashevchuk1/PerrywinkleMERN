const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config/config.js')

// update Schema with company name WINDENG-4775

const perrySchema = new Schema({
    perryName: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

perrySchema.index(
    { createdAt: 1 },
    { expireAfterSeconds: 2 * config.weekInSeconds }
)

module.exports = mongoose.model('Perry', perrySchema, 'perrys')
