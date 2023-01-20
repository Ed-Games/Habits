import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";

export async function AppRoutes(app: FastifyInstance) {
  app.get("/hello", async () => {
    const habits = await prisma.habit.findMany();
    return habits;
  });
}
