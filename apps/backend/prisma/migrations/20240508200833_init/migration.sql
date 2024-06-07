-- CreateTable
CREATE TABLE "User" (
    "authSchId" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("authSchId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
