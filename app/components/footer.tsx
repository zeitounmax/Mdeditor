import React from "react";
import { Box, Text, Link, VStack, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={10} px={4} bg="gray.800" color="white">
      <Container maxW="container.xl">
        <VStack spacing={4} align="center">
          <Text textAlign="center" fontSize="sm">
            Copyright &copy; Zeima (ZeitounCode)
          </Text>
          <Text fontSize="sm">
            Yeah it&apos;s free, but if you want to pay or support just say
            Hello on my social network.
          </Text>
          <Link
            href="https://shelter.moe/@Zeitounmax"
            isExternal
            color="blue.400"
            _hover={{ color: "blue.300" }}
          >
            my mastodon profile
          </Link>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
