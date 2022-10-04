import { t } from "../trpc";
import { z } from "zod";

export const pacientesRouter = t.router({
    getAll: t.procedure.query(({ ctx }) => {
        return ctx.prisma.pacientes.findMany();
    }),
});
