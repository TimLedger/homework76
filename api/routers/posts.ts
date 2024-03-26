import {Router} from 'express';
import fileDb from '../fileDb';
import {Post} from '../types';

const postsRouter = Router();

postsRouter.get('/', async (req, res) => {
    const posts = await fileDb.getItems();
    res.send(posts);
});

postsRouter.post('/', async (req, res) => {
    const post: Post = {
        author: req.body.author,
        message: req.body.message,
        datetime: (new Date()).toISOString(),
    }

    if (!post.author || !post.message) {
        return res.status(400).json({ error: 'Author and message must be present in the request' });
    }

    const newPost = await fileDb.addItem(post);
    res.send(newPost);

});

export default postsRouter;