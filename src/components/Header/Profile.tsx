import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Thiago Giammattey</Text>
        <Text color="gray.300" fontSize="small">
          giammattey@gmail.com
      </Text>
      </Box>

      <Avatar
        size="md"
        name="Thiago Giammattey"
        src="https://github.com/giammacarioca.png"
      />
    </Flex>
  )
}