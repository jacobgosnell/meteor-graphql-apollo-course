import React from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './ResolutionForm';


const App = ({data}) => {

  // prevents app from trying to load data that doesn't exist.
  if(data.loading) return null;
  return (
  <>
    <h1>{data.hi}</h1>
    <ResolutionForm refetch={data.refetch} />
    <ul>
      {data.resolutions.map(resolution => (
        <li key={resolution._id}>
          {resolution.name}
        </li>
      ))}
    </ul>
  </>
)
};

const hiQuery = gql` 
{
  hi
  resolutions {
    _id
    name
  }
}
`;

export default graphql(
  hiQuery
)(App);
