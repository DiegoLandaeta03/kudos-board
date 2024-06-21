-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "cardTitle" TEXT NOT NULL,
    "cardInfo" TEXT NOT NULL,
    "cardImage" TEXT NOT NULL,
    "cardOwner" TEXT NOT NULL,
    "boardId" INTEGER,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE SET NULL ON UPDATE CASCADE;
