-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "pass" VARCHAR(255) NOT NULL,
    "createtAd" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update" TIMESTAMP(6) NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'none',
    "firstTime" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "padron" VARCHAR(255) NOT NULL,
    "carrerra" VARCHAR(255) NOT NULL,
    "plan" VARCHAR(255) NOT NULL,
    "userID" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_key" ON "Student"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_surname_key" ON "Student"("surname");

-- CreateIndex
CREATE UNIQUE INDEX "Student_padron_key" ON "Student"("padron");

-- CreateIndex
CREATE UNIQUE INDEX "Student_carrerra_key" ON "Student"("carrerra");

-- CreateIndex
CREATE UNIQUE INDEX "Student_plan_key" ON "Student"("plan");
