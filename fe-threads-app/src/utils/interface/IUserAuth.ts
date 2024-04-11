export type IUserRegister = {
    full_name: string;
    username: string;
    email: string;
    password: string;
}

export type IUserLogin = {
    email: string;
    password: string;
}

export type IAuth = {
    id: number;
    email: string;
    full_name: string;
    username: string;
}