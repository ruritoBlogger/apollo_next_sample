import { prisma } from "../../prisma";
import { QueryResolvers } from "../../../graphql/dist/generated-server";

export const todos: QueryResolvers["todos"] = async (
  parent,
  args,
  context,
  info
) => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return await prisma.todo.findMany({
    include: {
      comments: true,
    },
  });
};
