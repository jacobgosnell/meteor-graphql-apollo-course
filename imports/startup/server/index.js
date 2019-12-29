import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

//schema that defines data in database
const typeDefs = `
  type Query {
    hi: String
  }
`;

// hits database like meteor method
const resolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });