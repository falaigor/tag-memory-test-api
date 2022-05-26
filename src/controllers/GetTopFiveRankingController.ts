import { Request, Response } from "express";
import { GetTopFiveRankingService } from "../services/GetTopFiveRankingService";

class GetTopFiveRankingController {
  async handle(request: Request, response: Response) {
    const service = new GetTopFiveRankingService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { GetTopFiveRankingController };
