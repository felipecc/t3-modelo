// src/server/router/index.ts
import { t } from "../trpc";

import { exampleRouter } from "./example";
import { pacientesRouter } from "./pacientes";

export const appRouter = t.router({
  example: exampleRouter,
  pacientes: pacientesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
