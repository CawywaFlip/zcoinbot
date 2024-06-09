import TelegramBot from "node-telegram-bot-api";
import config from 'config';

const botToken = config.get("botToken");

export const bot = new TelegramBot(botToken, {
    polling: {
        interval: 300,
        autoStart: true,
    },
});

