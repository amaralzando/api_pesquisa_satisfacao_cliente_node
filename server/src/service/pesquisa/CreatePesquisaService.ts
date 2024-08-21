import validator from "validator";
import prismaClient from "../../prisma";

interface PesquisaRequest {
  publicTarget: string;
  email: string;
  numberStar: number;
}

export class CreateSearchService {
  async execute({ publicTarget, email, numberStar }: PesquisaRequest) {
    if (publicTarget === "" || email === "") {
      throw new Error("Um dos campos se encontra vazio");
    }

    if (numberStar < 1 || numberStar > 5) {
      throw new Error("Quantidades de Estrelas incorreto");
    }

    if (!validator.isEmail(email)) {
      throw new Error("O Email está incorreto");
    }

    // NOTE: Caso esta pesquisa aceite respostas apenas de e-mails cadastrados
    // const resEmail = await prismaClient.pesquisaSatisfacaoCliente.findFirst({
    //   where: {
    //     email: email,
    //   },
    // });

    // if (!resEmail) {
    //   throw new Error("Email não cadastrado");
    // }
    // NOTE: Caso esta pesquisa aceite respostas apenas de e-mails cadastrados

    // NOTE: Caso esta pesquisa aceite respostas apenas 1 vez por email e publico alvo
    // const resEmail = await prismaClient.pesquisaSatisfacaoCliente.findFirst({
    //   where: {
    //     email: email,
    //     publicTarget: publicTarget,
    //   },
    // });

    // if (!resEmail) {
    //   throw new Error("Pesquisa já realizada com esse e-amail e público alvo ");
    // }
    // NOTE: Caso esta pesquisa aceite respostas apenas 1 vez por email e publico alvo

    const pesquisa = await prismaClient.pesquisaSatisfacaoCliente.create({
      data: {
        publicTarget: publicTarget,
        email: email,
        numberStar: numberStar,
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
