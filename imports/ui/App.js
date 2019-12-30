import React from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './ResolutionForm';


const App = ({ loading, resolutions }) => {

  // prevents app from trying to load data that doesn't exist.
  if(loading) return null;
  return (
  <>
    <ResolutionForm />
    <ul>
      {resolutions.map(resolution => (
        <li key={resolution._id}>
          {resolution.name}
        </li>
      ))}
    </ul>
  </>
)
};

const resolutionsQuery= gql`
query Resolutions {
  hi
  resolutions {
    _id
    name
  }
}
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
  // give me all of the data, and assign them each as a prop using the spread operator 
})(App);
