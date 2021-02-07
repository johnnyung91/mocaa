import React from 'react';
import { Table, Thead, Tbody, Th, Tr, Heading } from '@chakra-ui/react';
import { EmployeeRow } from './EmployeeRow';

export const EmployeeTable = ({ employees }) => {
  return employees.length > 1 ? (
    <Table size="md" variant="striped" colorScheme="gray" mb="50px">
      <Thead>
        <Tr>
          <Th>Last Name</Th>
          <Th>First Name</Th>
          <Th isNumeric>Age</Th>
          <Th>Email</Th>
          <Th>Job Title</Th>
          <Th>Job Type</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {employees.map(employee => (
          <EmployeeRow key={employee.id} employee={employee} />
        ))}
      </Tbody>
    </Table>
  ) : (
    <Heading>No employees available</Heading>
  );
};
