import { Request, Response } from "express";
import { GetUserRankingService } from "../services/GetUserRankingService";

class GetUserRankingController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const service = new GetUserRankingService();

    const result = await service.execute(user_id);

    return response.json(result);
  }
}

export { GetUserRankingController };
