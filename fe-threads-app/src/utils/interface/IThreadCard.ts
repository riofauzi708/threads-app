export interface IThreadCard {
    id: number,
    profile_picture: string,
    full_name: string,
    username: string,
    posted_at: string,
    content: string,
    image: string | null,
    likes_count: number,
    replies_count: number
    iduser: number
    user: IUser
}

export interface IThreadPost {
    id?: number,
    content: string,
    image: string | null
}

export interface IUser {
    id: number;
    profile_picture: string;
    full_name: string;
    username: string;
  }