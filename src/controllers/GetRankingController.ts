import { Request, Response } from "express";
import { GetRankingService } from "../services/GetRankingService";

export class GetRankingController {
  async handle(request: Request, response: Response) {
    const service = new GetRankingService();

    const result = await service.execute();

    return response.json(result);
  }
}
