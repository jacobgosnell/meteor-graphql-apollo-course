import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

//schema that defines data in database
const typeDefs = [
  testSchema,
  ResolutionsSchema
]; 

// schema that hits database like meteor method
const resolver = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
};

const resolvers = merge(
  resolver, ResolutionsResolvers
);
console.log(resolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });