const { ApolloServer, gql } = require("apollo-server");
const MyDatabase = require("./MyDatabase");

const knexConfig = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "postgres",
    password: "admin",
    database: "sushiparty",
  },
};

// you can also pass a knex instance instead of a configuration object
const db = new MyDatabase(knexConfig);

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  
  type Query {
    enterParty(username: String, party_code: String): Boolean
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    enterParty: checkParty,
  },
};

function checkParty(error, data) {
  if (data.party_code == "party1") {
    return true;
  }
  return false;
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ db }),
  csrfPrevention: true,
  cors: {
    origin: ["*"]
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
