-- CreateTable
CREATE TABLE "pesquisa_satisfacao_cliente" (
    "id" TEXT NOT NULL,
    "publicTarget" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numberStar" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "pesquisa_satisfacao_cliente_pkey" PRIMARY KEY ("id")
);
