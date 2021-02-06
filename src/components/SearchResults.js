import React, { useState } from 'react';

export const SearchResults = props => {
  console.log(props.location.state.results);

  return (
    <div>
      <h1>Search Results</h1>
    </div>
  );
};
