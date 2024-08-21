import { Request, Response } from "express";
import { CreateSearchService } from "../../service/pesquisa/CreatePesquisaService";

export class CreateSearchController {
  async handle(req: Request, res: Response) {
    const pesquisa = req.body;

    const createSearchService = new CreateSearchService();

    try {
      const resPesquisa = await createSearchService.execute({
        publicTarget: pesquisa.publicTarget,
        email: pesquisa.email,
        numberStar: pesquisa.numberStar,
      });

      return res.status(200).json(resPesquisa);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ error: error.message });
    }
  }
}
