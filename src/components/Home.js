import React from 'react';
import { Box, VStack, Grid, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { SearchForm } from './SearchForm';

export const Home = ({getEmployees}) => {

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="98vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8} maxW="1140px" w="100%" m="0 auto" px={2}>
          <Heading>Mocaa Employee Search Page</Heading>
          <SearchForm getEmployees={getEmployees} />
        </VStack>
      </Grid>
    </Box>
  );
};
