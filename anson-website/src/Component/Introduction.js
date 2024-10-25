import { Box, Image, Heading, Text, VStack, HStack, Divider, Tag } from "@chakra-ui/react";

function Introduction() {
  return (
    <Box p={10} bg="gray.50" minH="100vh" display="flex" justifyContent="center">
      <Box w="full" maxW="container.md" bg="white" shadow="lg" borderRadius="lg" overflow="hidden">
        {/* Profile Picture and Intro */}
        <Box textAlign="center" p={5} bg="gray.100">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="/path-to-your-photo.jpg" 
            alt="Your Photo"
            mx="auto"
            mb={4}
          />
          <Heading as="h1" size="lg">
            Anson Yu
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Aspiring Computer Science Student | Game Developer
          </Text>
          <HStack justify="center" spacing={4} mt={3}>
          </HStack>
        </Box>
        <Box p={5}>
          <Heading as="h2" size="md" mb={3}>
            Skills
          </Heading>
          <HStack wrap="wrap" spacing={3}>
            <Tag>JavaScript</Tag>
            <Tag>React</Tag>
            <Tag>Game Development</Tag>
            <Tag>Python</Tag>
            <Tag>Data Structures</Tag>
          </HStack>
        </Box>

        <Divider />
        <Box p={5}>
          <Heading as="h2" size="md" mb={3}>
            Experience
          </Heading>
          <VStack align="start" spacing={3}>
            <Box>
              <Heading as="h3" size="sm">
                Game Developer
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Scratch | Summer 2024
              </Text>
              <Text fontSize="sm">
                Worked on developing interactive game features and collaborated with designers on storyboarding. 
              </Text>
            </Box>
          </VStack>
        </Box>

        <Divider />

        {/* Contact Section */}
        <Box p={5} textAlign="center">
          <Text fontSize="sm" color="gray.600">
            Feel free to reach out for collaboration or inquiries.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Introduction;
