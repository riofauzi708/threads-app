import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  async find(req: Request, res: Response) {
    UserService.find(req, res);
  }

  async create(req: Request, res: Response) {
   UserService.create(req, res);
  }

  async update(req: Request, res: Response) {
    UserService.update(req, res);
  }

  async delete(req: Request, res: Response) {
    UserService.delete(req, res);
  }
}

export default new UserController();