export interface Post {
    author: string;
    message: string;
    datetime: string;
}

export interface BodyPost {
    author: string;
    message: string;
}

export interface PostApi extends Post {
    id: string;
}