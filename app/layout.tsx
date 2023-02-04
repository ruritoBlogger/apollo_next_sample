"use client";

import {
  ApolloClient,
  InMemoryCache,
  SuspenseCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

const cache = new SuspenseCache();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <ApolloProvider client={client} suspenseCache={cache}>
        <body>{children}</body>
      </ApolloProvider>
    </html>
  );
}
