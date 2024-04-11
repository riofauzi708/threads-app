import { AppDataSource } from "../data-source"
import { Users } from "../entities/Users"

export default new class AuthUserService {
    async getUser(email: string) : Promise<any> {
    try {
        const response = await AppDataSource.getRepository(Users).findOne({ where: {email: email}})

        return response
    } catch (error) {
        throw error
    }
}}
