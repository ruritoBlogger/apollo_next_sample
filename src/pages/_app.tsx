import type { AppProps } from "next/app";
import Head from "next/head";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  SuspenseCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>apollo/clientのサンプル</title>
      </Head>
      <div>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </div>
    </>
  );
}

export default MyApp;
