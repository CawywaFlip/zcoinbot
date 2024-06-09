
import { mongoose } from 'mongoose';
import cors from 'cors';
import express from 'express';
import router from './router.js';
import config from 'config';
import { enableBot } from './src/bot/script.js';

const app = express();

app.use(express.json());
// app.use(
//     cors({
//         origin: [`${config.get('serverURL')}:${config.get('clientPort')}`],
//         credentials: true,
//     }),
// );
app.use(cors());
app.use('/api', router);
const PORT = 5000;


async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'));
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
        await enableBot();
    } catch (e) {
        console.log('Подключение сломалося', e);
    }
}

start();