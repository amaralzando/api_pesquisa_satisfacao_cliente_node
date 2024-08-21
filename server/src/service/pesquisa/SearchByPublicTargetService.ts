import prismaClient from "../../prisma";

interface PesquisaRequest {
  publicTarget: string;
  orderStar: "asc" | "desc";
}

export class SearchByPublicTargetService {
  async execute({ publicTarget, orderStar }: PesquisaRequest) {
    if (!publicTarget || !orderStar) {
      throw new Error("Um dos campos se encontra vazio");
    }

    const pesquisa = await prismaClient.pesquisaSatisfacaoCliente.findMany({
      where: { publicTarget: publicTarget },
      orderBy: {
        numberStar: orderStar,
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
