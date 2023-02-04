import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { Resolvers } from "../../graphql/dist/generated-server";
import gql from "graphql-tag";

// TODO: schemaから取得したい
const typeDefs = gql`
  type Query {
    todos: [Todo!]!
  }

  type Todo {
    id: ID!
    title: String!
    content: String!
  }
`;

// TODO: DBから取得するように変更する
const resolvers: Resolvers = {
  Query: {
    todos: () => [{ id: "TODO_1", title: "title", content: "content" }],
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer);
