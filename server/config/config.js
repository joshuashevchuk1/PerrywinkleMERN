/**
 * Config module.
 *
 * @module config/config
 */

const dayInSeconds = 60 * 60 * 24
const weekInSeconds = dayInSeconds * 7
const minuteInSeconds = 60

module.exports = Object.assign(
    {},
    {
        weekInSeconds,
        minuteInSeconds,
    }
)
