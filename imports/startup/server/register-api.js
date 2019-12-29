import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

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
const resolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    },
    resolutions() {
      return [
        { 
          _id: "stringTest",
          name: "Get stuff done!"
        },
        {
          _id: "stringTwo",
          name: "Lose some weight!!"
        }
      ];
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });