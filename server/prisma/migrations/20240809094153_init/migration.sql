-- CreateTable
CREATE TABLE "AirtimeTransaction" (
    "id" SERIAL NOT NULL,
    "provider" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AirtimeTransaction_pkey" PRIMARY KEY ("id")
);
