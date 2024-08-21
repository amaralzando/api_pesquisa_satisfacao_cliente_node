import { Request, Response, Router } from "express";
import { CreateSearchController } from "./controller/pesquisa/CreateSearchController";
import { SearchByPublicTargetController } from "./controller/pesquisa/SearchByPublicTargetController";
import { UpdateSearchController } from "./controller/pesquisa/UpdateSearchController";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ ok: true });
});

// NOTE: --- ROTAS PESQUISA SATISFAÇÃO CLIENTE ---
//1
router.post("/satisfacao-cliente", new CreateSearchController().handle);
//2
router.post(
  "/satisfacao-cliente/edit/:pesquisa_id",
  new UpdateSearchController().handle
);
//3
router.post("/satisfacao-cliente/preencher");
//4
router.get("/satisfacao-cliente", new SearchByPublicTargetController().handle);
