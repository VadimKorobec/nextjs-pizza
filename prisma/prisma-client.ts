import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaClobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaClobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaClobal = prisma;
