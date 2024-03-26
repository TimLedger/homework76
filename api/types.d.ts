export interface Post {
    author: string;
    message: string;
    datetime: string;
}

export interface PostApi extends Post {
    id: string;
}

export type BodyPost = Omit<PostApi, 'id', 'datetime'>;