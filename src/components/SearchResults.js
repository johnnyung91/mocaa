import React from 'react';
import { Box, VStack, Grid, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { SearchForm } from './SearchForm';
import { useStateValue } from '../StateProvider';
import { useDataSearch } from '../useDataSearch';
import { EmployeeTable } from './EmployeeTable';

export const SearchResults = () => {
  const [{ term }, dispatch] = useStateValue();
  const { employees } = useDataSearch(term);

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8} maxW="1140px" w="100%" m="0 auto" px={2}>
          <Heading>Mocaa Employee Search Page</Heading>
          <SearchForm />
          {employees && <EmployeeTable employees={employees} />}
        </VStack>
      </Grid>
    </Box>
  );
};
