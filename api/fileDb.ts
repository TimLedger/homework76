import fs from 'fs/promises';
import crypto from 'crypto';
import {PostApi, BodyPost} from "./types";

const filename = './db.json';
let data: PostApi[] = [];

const fileDb = {
    async init() {
        try {
            const fileContent = await fs.readFile(filename);
            data = JSON.parse(fileContent.toString());
        } catch (e) {
            data = [];
        }
    },
    async getItems() {
        return data
    },
    async addItem(item: BodyPost) {
        const id = crypto.randomUUID();
        const post = {id, ...item};
        data.push(post);
        await this.save();

        return post;
    },
    async save() {
        await fs.writeFile(filename, JSON.stringify(data));
    }
};

export default fileDb;