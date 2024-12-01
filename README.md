# Indo4ward-Test

How to run this bot:
1. Find @BotFather on Telegram, send `/newbot`, then send the bot's name, then send the bot's username. It will return you a token, copy and save that token. After that, send `/mybots`, select your bot, click `Bot Settings` > `Group Privacy`, then select `Turn off` to ensure the bot's API can retrieve the latest message from a group chat.
2. Download this code and store it in your preferred directory. Make sure you have the .env file.
3. Open the folder on a text editor, create a new terminal, run `npm install` to install all the needed packages, then run `npm run start` to start the server.
4. Go to [ngrok](https://ngrok.com/), sign up/in, then download the desktop application. Open the application, run `ngrok config add-authtoken $YOUR_TOKEN` (your token is available on the previous ngrok page), then run `ngrok HTTP 4040`. It will return you a link, copy and save that link. Ngrok is used to create a public URL for your local server, allowing Telegram Webhook to use it as a redirection endpoint for your Telegram bot.
5. Create a new POST request on Postman, and paste this link `https://api.telegram.org/bot$BOT_TOKEN/setWebhook?url=$NGROK_URL` (change $BOT_TOKEN and $NGROK_URL with your own). It should return a message `Webhook was set`. Any user message on chat/group chat will go through our API now.

Now you can invite the bot to a group chat, or chat with it directly. Try to send a message that indicates that you are interested in Indonesian products or marketplaces. Here are a few examples:
![image](https://github.com/user-attachments/assets/7b390e59-83ab-4c14-bb54-cc69d2cd55dc)
![image](https://github.com/user-attachments/assets/1e124fe8-93cd-49d0-9014-4294585e12a0)
![image](https://github.com/user-attachments/assets/3db710a9-5a98-44b8-9cdf-44da3425a91e)
