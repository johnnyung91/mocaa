import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  VStack,
  Grid,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { SearchForm } from './SearchForm';
import { useStateValue } from '../StateProvider';
import { EmployeeTable } from './EmployeeTable';
import _ from 'lodash';
import { FilterModal } from './FilterModal';

export const SearchResults = () => {
  const [{ term }, dispatch] = useStateValue();
  const [employees, setEmployees] = useState(null);
  const [jobTypes, setJobTypes] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Filtered States
  // const [filteredJobType, setFilteredJobType] = useState('');
  // const [filteredActive, setFilteredActive] = useState('');

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
      case 'firstNameAsc':
        filtered = _.orderBy(employees, ['firstName'], ['asc']);
        setEmployees(filtered);
        break;
      case 'firstNameDesc':
        filtered = _.orderBy(employees, ['firstName'], ['desc']);
        setEmployees(filtered);
        break;
      case 'jobTitle':
        filtered = _.orderBy(employees, ['jobTitle'], ['asc']);
        setEmployees(filtered);
        break;
      case 'jobType':
        filtered = _.orderBy(employees, ['jobType'], ['asc']);
        setEmployees(filtered);
        break;
      case 'lastNameAsc':
        filtered = _.orderBy(employees, ['lastName'], ['asc']);
        setEmployees(filtered);
        break;
      case 'lastNameDesc':
        filtered = _.orderBy(employees, ['lastName'], ['desc']);
        setEmployees(filtered);
        break;
      default:
        break;
    }
  };

  const handleApply = (jobType, active, minAge, maxAge) => {
    const filter = {}
    if (jobType) filter.jobType = jobType
    if (active) filter.activeEmployee = (active === 'true')

    console.log(filter);

    let filteredList = employees.filter(employee => {
      for (const key in filter) {
        console.log(employee[key], filter[key]);
        if (employee[key] !== filter[key]) return false
      }
      return true
    })
    if (minAge) {
      filteredList = filteredList.filter(x => x.age >= Number(minAge))
    }
    if (maxAge) {
      filteredList = filteredList.filter(x => x.age <= Number(maxAge))
    }
    setEmployees(filteredList);
  };

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8} maxW="1380px" w="100%" m="0 auto" px={2}>
          <Heading>Mocaa Employee Search Page</Heading>
          <SearchForm />
          <Flex w="100%" justify="space-evenly">
            <Button colorScheme="blue" onClick={onOpen}>
              Apply Filters
            </Button>
            <FilterModal
              isOpen={isOpen}
              onClose={onClose}
              jobTypes={jobTypes}
              handleApply={handleApply}
            />
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<FaChevronDown />}
                colorScheme="blue"
              >
                Sort By
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => filterEmployees('ageAsc')}>
                  Age Ascending
                </MenuItem>
                <MenuItem onClick={() => filterEmployees('ageDesc')}>
                  Age Descending
                </MenuItem>
                <MenuItem onClick={() => filterEmployees('firstNameAsc')}>
                  First Name Ascending
                </MenuItem>
                <MenuItem onClick={() => filterEmployees('firstNameDesc')}>
                  First Name Descending
                </MenuItem>
                <MenuItem onClick={() => filterEmployees('jobTitle')}>
                  Job Title
                </MenuItem>
                <MenuItem onClick={() => filterEmployees('jobType')}>
                  Job Type
                </MenuItem>
                <MenuItem onClick={() => filterEmployees('lastNameAsc')}>
                  Last Name Ascending
                </MenuItem>
                <MenuItem onClick={() => filterEmployees('lastNameDesc')}>
                  Last Name Descending
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          {employees && <EmployeeTable employees={employees} />}
        </VStack>
      </Grid>
    </Box>
  );
};
