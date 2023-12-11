import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Neo4jGraphQL } from "@neo4j/graphql";
import neo4j from "neo4j-driver";
import 'dotenv/config'

///////////////////////////////////////////////////////////////////////////

// GraphQL type definitions
export const typeDefs = `#graphql

type Person {
    name: String!
    born: Int!  
    actedInMovies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
    directedMovies: [Movie!]! @relationship(type: "DIRECTED", direction: OUT)
}

type Movie {
    title: String!
    headline: String @alias(property: "tagline")
    released: Int!
    actors: [Person!]! @relationship(type: "ACTED_IN", direction: IN, aggregate: false)
    director: Person! @relationship(type: "DIRECTED", direction: IN)
}

`;

///////////////////////////////////////////////////////////////////////////



// Authenticated Neo4j Token
const authToken = neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD);

// Driver instance of Neo4j connection
const driver = neo4j.driver(process.env.NEO4J_URI, authToken);

try {
    const serverInfo = await driver.getServerInfo();
    console.log(`Connected to ${serverInfo.address} as user ${serverInfo.protocolVersion}`);
    console.log(serverInfo);
} catch(err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
}

// Create Neo4jGraphQL instance
const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

// Create ApolloServer instance
const server = new ApolloServer({
    schema: await neoSchema.getSchema(),
});

// Start ApolloServer
const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ req }),
    listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);