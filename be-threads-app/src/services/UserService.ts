import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Users } from "../entities/Users";

class UserService {
  private readonly userRepository: Repository<Users> = 
    AppDataSource.getRepository(Users);

  async find(req: Request, res: Response) {
    try {
      const users = await this.userRepository.find();
      console.log(users);
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while getting users" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const response = await this.userRepository.save(req.body);
      return res.status(201).send({
        message: "User created successfully",
        data: response
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while creating user" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await this.userRepository.findOne({where: { id: Number(id) }});
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      user.username = req.body.username;
      user.full_name = req.body.full_name;
      user.email = req.body.email;
      user.profile_picture = req.body.profile_picture;
      user.bio = req.body.bio;
      const updatedUser = await this.userRepository.save(user);
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while updating user" });
    }
  }
  
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await this.userRepository.findOne( { where: { id: Number(id) } });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      await this.userRepository.remove(user);
      return res.status(200).json({ message: "User deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while deleting user" });
    }
  }
}

export default new UserService();