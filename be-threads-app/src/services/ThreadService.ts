import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Threads } from "../entities/Threads";

class ThreadService {
  private readonly threadRepository: Repository<Threads> = 
  AppDataSource.getRepository(Threads);

  async find(req: Request, res: Response) {
    try {
      const threads = await this.threadRepository.find({
        relations: ["user", "likes", "replies"],
      });
      return res.status(200).json({
        status: "success",
        data: {
          threads
        },

      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while getting threads" });
    }
  }

  async create(reqBody: any, loginSession: any): Promise<object> {
    try {
      const { content, image } = reqBody;
      if (!content || content.trim() === "") {
        return { error: "Content is required" };
      }
  
      const response = await this.threadRepository.save({
        content: reqBody.content,
        image: reqBody.image,
        user: { 
          id: loginSession.id,
          username: loginSession.username,
          full_name: loginSession.full_name
        },
        posted_at: new Date()
      });
  
      return {
        response
      };
    } catch (error) {
      console.log(error);
      return { error: "Error while creating thread" };
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { content, image } = req.body;
      const thread = await this.threadRepository.findOne({where: { id: Number(id) }});
      if (!thread) {
        return res.status(404).json({ error: "Thread not found" });
      }
      thread.content = content;
      thread.image = image;
      const updatedThread = await this.threadRepository.save(thread);
      return res.status(200).json(updatedThread);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while updating thread" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const thread = await this.threadRepository.findOne({where: { id: Number(id) }});
      if (!thread) {
        return res.status(404).json({ error: "Thread not found" });
      }
      await this.threadRepository.remove(thread);
      return res.status(200).json({ message: "Thread deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while deleting thread" });
    }
  }
}

export default new ThreadService();