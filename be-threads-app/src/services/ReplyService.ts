import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Replies } from "../entities/Replies";

class ReplyService {
  private readonly replyRepository: Repository<Replies> = 
    AppDataSource.getRepository(Replies);

  async find(req: Request, res: Response) {
    try {
      const replies = await this.replyRepository.find();
      console.log(replies);
      return res.status(200).json(replies);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while getting replies" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const response = await this.replyRepository.save(req.body);
      return res.status(201).send({
        message: "Reply created successfully",
        data: response,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while creating reply" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const reply = await this.replyRepository.findOne({ where: { id: Number(id) } });
      if (!reply) {
        return res.status(404).json({ error: "Reply not found" });
      }
      reply.content = req.body.content;
      const updatedReply = await this.replyRepository.save(reply);
      return res.status(200).json(updatedReply);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while updating reply" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const reply = await this.replyRepository.findOne({ where: { id: Number(id) } });
      if (!reply) {
        return res.status(404).json({ error: "Reply not found" });
      }
      await this.replyRepository.remove(reply);
      return res.status(200).json({ message: "Reply deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while deleting reply" });
    }
  }
}

export default new ReplyService();