import React from 'react';
import { useStateValue } from '../StateProvider';
import { useDataSearch } from '../useDataSearch';

export const SearchResults = () => {
  const [{ term }, dispatch] = useStateValue();
  const { employees } = useDataSearch(term);

  console.log(employees);

  return (
    <div>
      <h1>{term}</h1>
    </div>
  );
};
