import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { Resolvers } from "../../../graphql/dist/generated-server";
import gql from "graphql-tag";
import * as query from "../../resolvers/query";

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

const resolvers: Resolvers = {
  Query: query,
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer);
