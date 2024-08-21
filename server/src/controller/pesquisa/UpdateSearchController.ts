import { Request, Response } from "express";
import { UpdateSearchService } from "../../service/pesquisa/UpdateSearchService";

export class UpdateSearchController {
  async handle(req: Request, res: Response) {
    const pesquisa_id = String(req.params.pesquisa_id);
    const { publicTarget, email, numberStar } = req.body;

    const updateSearchService = new UpdateSearchService();

    try {
      const resPesquisa = await updateSearchService.execute({
        pesquisa_id,
        publicTarget,
        email,
        numberStar,
      });

      return res.status(200).json(resPesquisa);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ error: error.message });
    }
  }
}
