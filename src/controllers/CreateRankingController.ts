import { Request, Response } from "express";
import { CreateRankingService } from "../services/CreateRankingService";

class CreateRankingController {
  async handle(request: Request, response: Response) {
    const { guessedTags, time } = request.body;
    const { user_id } = request;

    const service = new CreateRankingService();
    const result = await service.execute(guessedTags, time, user_id);

    return response.json(result);
  }
}

export { CreateRankingController };
