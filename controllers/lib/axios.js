require('dotenv').config();
const axios = require('axios')

const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

const getAxiosInstance = () => {
    return {
        // to send ads to telegram chat
        get(params) {
            return axios.get('/sendMessage', {
                baseURL: TELEGRAM_API_URL,
                params
            })
        },

        // to send prompt to openai
        post(data) {
            return axios({
                method: 'POST',
                baseURL: OPENAI_API_URL,
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                data
            })
        }
    }
}

module.exports = { axiosInstance: getAxiosInstance() }
