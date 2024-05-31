import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { CreateTaskUseCase } from "../../application/use-case/create-task-use-case";
import { PostgresqlTaskRepository } from "../../infrastructure/repository/postgresql-task-repository";

export const createTaskController = new Hono();

createTaskController.post(
  "/tasks/new",
  zValidator("json", z.object({ title: z.string() }), (result, c) => {
    if (!result.success) {
      return c.text("invalid title", 400);
    }

    return;
  }),
  async (context) => {
    const title = context.req.valid("json").title;

    const repository = new PostgresqlTaskRepository();
    const useCase = new CreateTaskUseCase(repository);

    const payload = await useCase.invoke({ title });
    return context.json(payload);
  },
);
