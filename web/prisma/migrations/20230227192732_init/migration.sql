-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "pass" VARCHAR(255) NOT NULL,
    "createtAd" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" TEXT NOT NULL,
    "update" TIMESTAMP(6) NOT NULL,
    "updateBy" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'none',
    "firstTime" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "academicRegister" VARCHAR(255) NOT NULL,
    "careerCurriculum" VARCHAR(255) NOT NULL,
    "academicCredits" VARCHAR(255) NOT NULL,
    "userID" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "cuit" VARCHAR(255) NOT NULL,
    "bussinesName" VARCHAR(255) NOT NULL,
    "fantasyName" VARCHAR(255) NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "cuit" VARCHAR(255) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrameworkAgreement" (
    "id" SERIAL NOT NULL,
    "resolutionNumber" VARCHAR(255) NOT NULL,
    "hasDue" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "FrameworkAgreement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndividualAgreement" (
    "id" SERIAL NOT NULL,
    "resolutionNumber" VARCHAR(255) NOT NULL,
    "hasDue" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "IndividualAgreement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_key" ON "Student"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_surname_key" ON "Student"("surname");

-- CreateIndex
CREATE UNIQUE INDEX "Student_gender_key" ON "Student"("gender");

-- CreateIndex
CREATE UNIQUE INDEX "Student_academicRegister_key" ON "Student"("academicRegister");

-- CreateIndex
CREATE UNIQUE INDEX "Student_careerCurriculum_key" ON "Student"("careerCurriculum");

-- CreateIndex
CREATE UNIQUE INDEX "Student_academicCredits_key" ON "Student"("academicCredits");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_cuit_key" ON "Organization"("cuit");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_bussinesName_key" ON "Organization"("bussinesName");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_fantasyName_key" ON "Organization"("fantasyName");

-- CreateIndex
CREATE UNIQUE INDEX "Company_cuit_key" ON "Company"("cuit");

-- CreateIndex
CREATE UNIQUE INDEX "FrameworkAgreement_resolutionNumber_key" ON "FrameworkAgreement"("resolutionNumber");

-- CreateIndex
CREATE UNIQUE INDEX "IndividualAgreement_resolutionNumber_key" ON "IndividualAgreement"("resolutionNumber");
