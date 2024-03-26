import express from 'express';
import posts from "./routers/posts";
import fileDb from "./fileDb";
import cors from 'cors';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use('/messages', posts);

const run = async () => {
    await fileDb.init();

    app.listen(port, () => {
        console.log(`Server started on http://localhost:${port} port!`);
    });
};

void run();