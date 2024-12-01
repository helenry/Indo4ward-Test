const { axiosInstance } = require("./axios")

// for sending prompts and getting the response
const sendPrompt = async(message, prompt) => {
    const response = await axiosInstance.post({
        model: "gpt-4o",
        messages: [
            {
                role: 'system',
                content: prompt
            },
            {
                role: "user",
                content: message
            }
        ]
    })
    return response.data.choices[0].message.content
}

module.exports = { sendPrompt }