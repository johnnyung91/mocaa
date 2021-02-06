import React from 'react';
import { Table, Thead, Tbody, Th, Tr } from '@chakra-ui/react';
import { EmployeeRow } from './EmployeeRow';

export const EmployeeTable = ({ employees}) => {
  return (
    <Table size="md" variant="striped" colorScheme="gray">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Job Title</Th>
          <Th>Job Type</Th>
          <Th isNumeric>Age</Th>
        </Tr>
      </Thead>
      <Tbody>
        {employees.map(employee => (
          <EmployeeRow key={employee.id} employee={employee} />
        ))}
      </Tbody>
    </Table>
  );
};
