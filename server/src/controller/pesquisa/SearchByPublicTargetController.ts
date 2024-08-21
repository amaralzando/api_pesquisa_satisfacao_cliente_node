import { Request, Response } from "express";
import { SearchByPublicTargetService } from "../../service/pesquisa/SearchByPublicTargetService";

export class SearchByPublicTargetController {
  async handle(req: Request, res: Response) {
    const { publicTarget, orderStar } = req.query;

    const searchByPublicTargetService = new SearchByPublicTargetService();

    try {
      const searchByPublicTarget = await searchByPublicTargetService.execute({
        publicTarget: String(publicTarget).trim(),
        orderStar: orderStar as "asc" | "desc",
      });

      return res.status(200).json(searchByPublicTarget);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ error: error.message });
    }
  }
}
