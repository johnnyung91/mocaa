import React from 'react';
import { Tr, Td } from '@chakra-ui/react';

export const EmployeeRow = ({ employee }) => {
  const {name, jobTitle, jobType, age} = employee

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{jobTitle}</Td>
      <Td>{jobType}</Td>
      <Td isNumeric>{age}</Td>
    </Tr>
  );
};
