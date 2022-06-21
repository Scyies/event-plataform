import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o86ljn16jp01xi97ad9ats/master',
  cache: new InMemoryCache()
})