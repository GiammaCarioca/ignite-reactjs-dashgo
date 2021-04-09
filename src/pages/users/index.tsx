import Link from "next/link";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr, Td, Text, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { useQuery } from 'react-query'

import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

export default function Userlist() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    return data;
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading fontSize="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
                <Text>
                  Falha ao obter dados dos usuários.
                </Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px="6" width="8" color="gray.300">
                    </Th>
                    <Th>Usuário</Th>
                    { isWideVersion && <Th>Data de Cadastro</Th> }
                    <Th width="6" />
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Thiago Giammattey</Text>
                        <Text fontSize="sm" color="gray.300">
                          giammattey@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>02 de Abril de 2021</Td>}
                    
                    { isWideVersion &&
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                          Editar
                      </Button>
                      </Td> }

                  </Tr>
                  <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Thiago Giammattey</Text>
                        <Text fontSize="sm" color="gray.300">
                          giammattey@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>02 de Abril de 2021</Td>}
                    
                    {isWideVersion &&
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                          {isWideVersion ? 'Editar' : ''}
                        </Button>
                      </Td>
                    }
                  </Tr>
                  <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Thiago Giammattey</Text>
                        <Text fontSize="sm" color="gray.300">
                          giammattey@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>02 de Abril de 2021</Td>}
                    
                    {isWideVersion &&
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                          {isWideVersion ? 'Editar' : ''}
                        </Button>
                      </Td>
                    }
                  </Tr>
                  <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Thiago Giammattey</Text>
                        <Text fontSize="sm" color="gray.300">
                          giammattey@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>02 de Abril de 2021</Td>}
                    
                    {isWideVersion &&
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                          {isWideVersion ? 'Editar' : ''}
                        </Button>
                      </Td>
                    }
                  </Tr>
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}