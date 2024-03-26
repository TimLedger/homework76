import {promises as fs} from 'fs';

const fileName = './test.json';

interface FileContest {
    author: string;
    message: string;
}

const run = async () => {
    try {
        const fileContest = await fs.readFile(fileName);
        const result = JSON.parse(fileContest.toString());
        console.log('Result:', result.author);
    } catch (err) {
        console.error(err);
    }
};

void run();