import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
 
 export const createApolloClient = () => {
   return new ApolloClient({
     ssrMode: true,
     link: new HttpLink({
       uri: process.env.NEXT_PUBLIC_FASTVOLT_GRAPHQL_API_URL,
     }),
     cache: new InMemoryCache(),
   });
 };