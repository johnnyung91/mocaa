import React from 'react';
import { Table, Thead, Tbody, Th, Tr, Heading } from '@chakra-ui/react';
import { EmployeeRow } from './EmployeeRow';

export const EmployeeTable = ({ employees }) => {
  return employees.length > 1 ? (
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
  ) : (
    <Heading>No employees</Heading>
  );
};
