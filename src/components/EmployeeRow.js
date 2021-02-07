import React from 'react';
import { Tr, Td, Text } from '@chakra-ui/react';

export const EmployeeRow = ({ employee }) => {
  const {
    firstName,
    lastName,
    email,
    jobTitle,
    jobType,
    age,
    activeEmployee,
  } = employee;

  return (
    <Tr>
      <Td>{lastName}</Td>
      <Td>{firstName}</Td>
      <Td isNumeric>{age}</Td>
      <Td>{email}</Td>
      <Td>{jobTitle}</Td>
      <Td>{jobType}</Td>
      <Td>
        <Text color={activeEmployee ? 'green.500' : 'red.500'}>
          {activeEmployee ? 'Active' : 'Inactive'}
        </Text>
      </Td>
    </Tr>
  );
};
