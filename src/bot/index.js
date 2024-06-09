import TelegramBot from "node-telegram-bot-api";

const botToken = "7498075751:AAFmRf2kVcQF4Fw85PR4cJUxSV80Bj-1Rrc";

export const bot = new TelegramBot(botToken, {
    polling: {
        interval: 300,
        autoStart: true,
    },
});

