import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler} from "@as-integrations/next"
import { readFileSync } from "fs";
import { join } from "path";

import { Resolvers } from "../../graphql/dist/generated-server";

const path = join(process.cwd(), "graphql", "schema.graphql");
const typeDefs = readFileSync(path).toString("utf-8");

// TODO: DBから取得するように変更する
const resolvers: Resolvers = {
  Query: {
    todos: () => [{id: "TODO_1", title: "title", content: "content"}]
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer)

export const config = {
  api: {
    bodyParser: false,
  },
};