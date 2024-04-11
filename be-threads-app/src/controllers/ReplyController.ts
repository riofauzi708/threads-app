import { Request, Response } from 'express';
import ReplyService from '../services/ReplyService';

class ReplyController {
  async find(req: Request, res: Response) {
    ReplyService.find(req, res);
  }

  async create(req: Request, res: Response) {
    ReplyService.create(req, res);
  }

  async update(req: Request, res: Response) {
    ReplyService.update(req, res);
  }

  async delete(req: Request, res: Response) {
    ReplyService.update(req, res);
  }
}

export default ReplyController;