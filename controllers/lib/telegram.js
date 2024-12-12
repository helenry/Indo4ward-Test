const { axiosInstance } = require("./axios")
const { sendPrompt } = require('./openai')

// for sending a message to the group
const sendMessage = (messageObj, messageText) => {
    return axiosInstance.get({
        chat_id: messageObj.chat.id,
        text: messageText
    })
}

// for handling the latest chat in group
const handleMessage = async(messageObj) => {
    const messageText = messageObj.text || ''

    // 'i want to buy batik from indonesia' => batik
    // 1. check if the message contains any indonesian product, ask openai to define the type specific product/brand
    // 2. send get request to indo4ward database, with the param of keyword of product/brand, sort it from best selling to least selling, only return 3 data
    // 3. tell openai to create the ad based on the user message and then promoting the 3 best selling products that linked to the user message

    // check if user chat message relevant for ad
    const checkIfAdFit = await sendPrompt(messageText, 'Please decide if the message text I sent indicating that the user is interested in buying/finding/searching product(s) from Indonesia, promoting product(s) from Indonesia, or interested in buying from these Indonesian marketplace: Tokopedia, Orami, Shopee, Bukalapak, Lazada, Blibli, Carousell, and many more. Please make sure to include Indonesian brands or any product that come from Indonesia. You need to reply with the word False if the indication is false, and if it is True, dont reply wityht he word True, but please reply with an ad of Indo4ward (start-up) based on the message I sent, include this link https://www.indo4ward.com/, make it sound casual just like normal people in a group chat, and write it in a length that can keep people attention, the company description is like this: Indo4ward works with merchants in Indonesia and forwards your purchases in Indonesia outwards to you. All you have to do is to: Find the product link from an Indonesia online store, Paste the link on our platform, Indicate the product variation or instructions needed for us to buy them, Pay, Receive your order. There are so much to shop from in Indonesia, but here are a few marketplace to start from: Tokopedia (All types of item) @ www.Tokopedia.com, Orami (Baby and Mother Care) @ www.Orami.co.id, Shopee ID (All types of item) @ www.Shopee.co.id, Bukalapak (All types of item) @ www.Bukalapak.com, Lazada (All types of item) @ www.lazada.co.id, Blibli (All types of item) @ www.blibli.com, Carousell (Preloved items) @ id.carousell.com. Of course, you don\'t have to just choose the above stores. We\'re opened to any online shops in Indonesia! Simply paste the link on our homepage and get started!')

    if(checkIfAdFit == 'False') {
        return Promise.resolve()
    } else {
        // send the ad to chat
        return sendMessage(messageObj, checkIfAdFit)
    }
}

module.exports = { handleMessage }
