const { handleMessage } = require('./lib/telegram')

const handler = async(req) => {
    const { body } = req

    if(body) {
        const messageObj = body.message
        if(messageObj) {
            await handleMessage(messageObj)
        }
    }

    return
}

module.exports = { handler }