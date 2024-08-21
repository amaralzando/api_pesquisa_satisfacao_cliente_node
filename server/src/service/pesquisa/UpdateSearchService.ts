import validator from "validator";
import prismaClient from "../../prisma";

interface PesquisaRequest {
  pesquisa_id: string;
  publicTarget: string;
  email: string;
  numberStar: number;
}

export class UpdateSearchService {
  async execute({
    pesquisa_id,
    publicTarget,
    email,
    numberStar,
  }: PesquisaRequest) {
    const existPesquisa =
      await prismaClient.pesquisaSatisfacaoCliente.findFirst({
        where: {
          id: pesquisa_id,
        },
      });

    if (!existPesquisa) {
      throw new Error("Essa pesquisa não existe");
    }

    if (publicTarget === "" || email === "" || numberStar <= 0) {
      throw new Error("Um dos campos se encontra vazio");
    }

    if (!validator.isEmail(email)) {
      throw new Error("O Email está incorreto");
    }

    const pesquisa = await prismaClient.pesquisaSatisfacaoCliente.update({
      where: {
        id: pesquisa_id,
      },
      data: {
        publicTarget: publicTarget,
        email: email,
        numberStar: numberStar,
        update_at: new Date(),
      },
      select: {
        id: true,
        publicTarget: true,
        email: true,
        numberStar: true,
        created_at: true,
        update_at: true,
        deleted_at: true,
      },
    });

    return pesquisa;
  }
}
