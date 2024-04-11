export interface IThreadCard {
    id: number,
    author_picture: string,
    author_full_name: string,
    author_username: string,
    posted_at: string,
    content: string,
    image: string | null,
    likes_count: number,
    replies_count: number
    iduser: number
}

export interface IThreadPost {
    id?: number,
    content: string,
    image: string | null
}

export interface IUser {
    id: number;
    picture: string;
    full_name: string;
    username: string;
  }