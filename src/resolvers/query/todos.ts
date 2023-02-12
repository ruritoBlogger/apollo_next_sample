import { prisma } from "../../prisma";
import { QueryResolvers } from "../../../graphql/dist/generated-server";

export const todos: QueryResolvers["todos"] = async (
  parent,
  args,
  context,
  info
) => {
  return await prisma.todo.findMany();
};
