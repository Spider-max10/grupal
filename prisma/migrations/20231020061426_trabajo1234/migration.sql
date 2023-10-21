-- CreateTable
CREATE TABLE "SeriesId" (
    "id" SERIAL NOT NULL,
    "consumible" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "conexion" TEXT NOT NULL,
    "modeloId" INTEGER NOT NULL,

    CONSTRAINT "SeriesId_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClienteId" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "ClienteId_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistencia" (
    "id" SERIAL NOT NULL,
    "instancia" TEXT,
    "servicio" TEXT NOT NULL,
    "atencion" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "seriesId" INTEGER NOT NULL,
    "asistenteId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AsistenteId" (
    "id" SERIAL NOT NULL,
    "caracteristicas" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "soporte" TEXT NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "AsistenteId_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modelo" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,

    CONSTRAINT "Modelo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AreaId" (
    "id" SERIAL NOT NULL,
    "narea" INTEGER NOT NULL,

    CONSTRAINT "AreaId_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SeriesId_consumible_key" ON "SeriesId"("consumible");

-- CreateIndex
CREATE UNIQUE INDEX "ClienteId_name_key" ON "ClienteId"("name");

-- AddForeignKey
ALTER TABLE "SeriesId" ADD CONSTRAINT "SeriesId_modeloId_fkey" FOREIGN KEY ("modeloId") REFERENCES "Modelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "SeriesId"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_asistenteId_fkey" FOREIGN KEY ("asistenteId") REFERENCES "AsistenteId"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "ClienteId"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsistenteId" ADD CONSTRAINT "AsistenteId_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "AreaId"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
