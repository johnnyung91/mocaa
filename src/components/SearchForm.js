import React, { useState } from 'react';
import { Flex, Input, IconButton } from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

export const SearchForm = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    history.push('/searchresults')

  };

  return (
    <Flex
      as="form"
      align="center"
      justify="space-around"
      w={['100%', '75%', '75%']}
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Enter Name of Employee"
        w="90%"
        borderRadius="25px"
        value={name}
        onChange={e => setName(e.currentTarget.value)}
      />
      <IconButton
        type="submit"
        size="lg"
        fontSize="36px"
        bg="transparent"
        borderRadius="50%"
        icon={<BiSearchAlt />}
      />
    </Flex>
  );
};
