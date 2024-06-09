import { bot } from "./index.js";

export async function enableBot() {

    const webAppURL = 'https://ya.ru';
    const button = {
        reply_markup: {
            inline_keyboard: [
                [{text: 'ГО ФАРМИТЬ!!!', web_app: {url: webAppURL}}]
            ]
        }
    }


    bot.on('polling_error', (err) => console.log('BOT POLLING ERROR'));

    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const telegramId = msg.from.id;
        const message = msg.text || null;
        await bot.sendMessage(chatId, 'Стань крупнейшим холдером Zcoin 👇', button);
    });



    bot.on('callback_query', async (msg) => {
        const message = msg.data;
        const chatId = msg.message.chat.id;
        const telegramId = msg.from.id;
    });
}