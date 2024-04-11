import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Users } from "../entities/Users"

export default new class AuthService {
    private readonly authRepository: Repository<Users> = 
    AppDataSource.getRepository(Users)

    async register(reqBody: any) : Promise<any> {
        try {
            const isCheckEmail = await AppDataSource.getRepository(Users).count({
                where: { email: reqBody.email }
            })

            if (isCheckEmail > 0) return "Email already exist"

            const user = await this.authRepository.save({
                full_name: reqBody.full_name,
                username: reqBody.username,
                email: reqBody.email,
                password: reqBody.password
            })

            return await this.authRepository.save(user)
        } catch (error) {
            throw error
        }
    }

    async login(reqBody: any) : Promise<any> {
        try {
            console.log(reqBody);
            
        } catch (error) {
            throw error
        }
    }

    async check(reqBody: any) : Promise<any> {
        try {
            const user = await this.authRepository.findOne({
                where: {
                    id: reqBody.id
                }
            })

            return user
        } catch (error) {
            throw error
        }
    }
}