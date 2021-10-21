import { Request, Response } from "express";
import { GetUserProfileService } from "../services/GetUserProfileService";

export class GetUserProfileController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const service = new GetUserProfileService();
    const user = await service.execute(user_id);
    
    return response.json(user);
  }
}