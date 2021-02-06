import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  VStack,
  Grid,
  Heading,
  Button,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { SearchForm } from './SearchForm';
import { useStateValue } from '../StateProvider';
import { EmployeeTable } from './EmployeeTable';
import _ from 'lodash';

export const SearchResults = () => {
  const [{ term }, dispatch] = useStateValue();
  const [employees, setEmployees] = useState(null);
  const [jobTypes, setJobTypes] = useState(null);

  useEffect(() => {
    const obj = { term };

    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(obj),
    };

    fetch('http://localhost:5000/api/get-employees', req)
      .then(res => res.json())
      .then(data => {
        const uniqueJobs = _.uniqBy(data, 'jobType').map(x => x.jobType);
        //Set Employees
        setEmployees(data);
        //Set Type List
        setJobTypes(uniqueJobs);
      });
  }, [term]);

  const filterEmployees = filter => {
    let filtered;
    switch (filter) {
      case 'ageAsc':
        filtered = _.orderBy(employees, ['age'], ['asc']);
        setEmployees(filtered);
        break;
      case 'ageDesc':
        filtered = _.orderBy(employees, ['age'], ['desc']);
        setEmployees(filtered);
        break;
      case 'jobType':
        filtered = _.orderBy(employees, ['jobType'], ['asc']);
        setEmployees(filtered);
        break;
      case 'ageDesc':
        filtered = _.orderBy(employees, ['jobTitle'], ['asc']);
        setEmployees(filtered);
        break;
      default:
        break;
    }
  };

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8} maxW="1140px" w="100%" m="0 auto" px={2}>
          <Heading>Mocaa Employee Search Page</Heading>
          <SearchForm />
          <Flex w="100%" justify="space-evenly">
            <Button>MAGIC BUTTON</Button>
            <Menu>
              <MenuButton as={Button} rightIcon={<FaChevronDown />} colorScheme="blue">
                Sort By
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => filterEmployees('ageAsc')}>
                  Age Ascending
                </MenuItem>
                <MenuItem onClick={() => filterEmployees('ageDesc')}>
                  Age Descending
                </MenuItem>
                <MenuItem onClick={() => filterEmployees('jobType')}>
                  Job Type
                </MenuItem>
                <MenuItem onClick={() => filterEmployees('jobTitle')}>
                  Job Title
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          {jobTypes && (
            <Select w="300px">
              <option value="">Select</option>
              {jobTypes.map((x, i) => (
                <option key={i} value={x}>
                  {x}
                </option>
              ))}
            </Select>
          )}

          {employees && <EmployeeTable employees={employees} />}
        </VStack>
      </Grid>
    </Box>
  );
};
