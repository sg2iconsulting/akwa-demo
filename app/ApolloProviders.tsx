"use client";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo-client";

export function ApolloProviders({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
