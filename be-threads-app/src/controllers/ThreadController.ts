import { Request, Response } from 'express';
import ThreadService from '../services/ThreadService';
import { createThreadSchema } from '../utils/validator/Threads';

class ThreadController {
  async find(req: Request, res: Response) {
    ThreadService.find(req, res);
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const loginSession = res.locals.loginSession;
  
      const { error, value } = createThreadSchema.validate(data);
  
      if (error) {
        return res.status(422).json({
          message: error.details[0].message
        });
      }
  
      const response = await ThreadService.create(value, loginSession);
  
      return res.status(201).json({
        message: "Thread created successfully",
        data: response
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while creating thread" });
    }
  }

  async update(req: Request, res: Response) {
    ThreadService.update(req, res);
  }

  async delete(req: Request, res: Response) {
    ThreadService.delete(req, res);
  }
}

export default new ThreadController();