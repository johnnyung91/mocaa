import React, { useState } from 'react';
import {
  Flex,
  Text,
  VStack,
  Heading,
  Button,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

export const FilterModal = ({ isOpen, onClose, jobTypes, handleApply }) => {
  const [filteredJobType, setFilteredJobType] = useState('');
  const [filteredActive, setFilteredActive] = useState(false);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(0);

  const handleClick = () => {
    handleApply(filteredJobType, filteredActive, minAge, maxAge);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Heading textAlign="center" my="30px">
            Apply these filters
          </Heading>
          <VStack as="form" wrap="wrap" spacing={5}>
            {jobTypes && (
              <FormControl>
                <FormLabel>Job Type</FormLabel>
                <Select
                  placeholder="Select option"
                  value={filteredJobType}
                  onChange={e => setFilteredJobType(e.currentTarget.value)}
                >
                  {jobTypes.map((x, i) => (
                    <option key={i} value={x}>{x}</option>
                  ))}
                </Select>
              </FormControl>
            )}
            <FormControl>
              <FormLabel>Active Status</FormLabel>
              <Select
                placeholder="Select option"
                value={filteredActive}
                onChange={e => setFilteredActive(e.currentTarget.value)}
              >
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Filter by Age</FormLabel>
              <Flex align="center">
                <NumberInput size="md" maxW={20} min={22} max={65}>
                  <NumberInputField
                    value={minAge}
                    onChange={e => setMinAge(Number(e.currentTarget.value))}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Text mx="10px">to</Text>
                <NumberInput size="md" maxW={20} min={22} max={65}>
                  <NumberInputField
                    value={maxAge}
                    onChange={e => setMaxAge(Number(e.currentTarget.value))}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <Button colorScheme="red" mr={3} onClick={onClose} w="40%">
            Close
          </Button>
          <Button
            colorScheme="blue"
            w="40%"
            type="submit"
            onClick={handleClick}
          >
            Secondary Action
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
