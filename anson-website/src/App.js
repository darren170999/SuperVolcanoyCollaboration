import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Link,
  SimpleGrid,
  VStack,
  extendTheme
} from '@chakra-ui/react';

// Custom theme setup for a playful, elegant look
const theme = extendTheme({
  fonts: {
    heading: 'Comic Sans MS, sans-serif',
    body: 'Arial, sans-serif',
  },
  colors: {
    brand: {
      100: '#ffecd1',
      200: '#ffccd1',
      300: '#c1e1ff',
      400: '#d4b0ff',
      500: '#b8baff',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="brand.100" minH="100vh" color="gray.800">
        {/* Header */}
        <Box as="header" py={10} textAlign="center">
          <Heading size="2xl" color="brand.500">Anson's Portfolio</Heading>
          {/* <Text fontSize="xl" color="brand.300">Young Developer & Artist</Text> */}
        </Box>

        {/* About Section */}
        <Box maxW="600px" mx="auto" py={8} px={6} textAlign="center">
          <Heading as="h3" size="lg" mb={4}>About Me</Heading>
          <Text fontSize="md">
            Hello! I'm Anson, a 10-year-old with a passion for coding and creating! blah blah...
          </Text>
        </Box>

        {/* Projects Section */}
        <Box maxW="800px" mx="auto" py={8} px={6}>
          <Heading as="h3" size="lg" mb={4} textAlign="center">
            My Projects
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {/* Project Card Example */}
            {/* <ProjectCard
              title="Drawing App"
              description="A web app that lets you draw with different colors and sizes."
              imgSrc="https://via.placeholder.com/150"
            />
            <ProjectCard
              title="Calculator"
              description="A basic calculator for solving math problems."
              imgSrc="https://via.placeholder.com/150"
            />
            <ProjectCard
              title="Adventure Game"
              description="An interactive game where you go on adventures!"
              imgSrc="https://via.placeholder.com/150"
            /> */}
          </SimpleGrid>
        </Box>

        {/* Footer */}
        <Box as="footer" py={8} textAlign="center" bg="brand.200">
          <VStack spacing={4}>
            <Text>Connect with me!</Text>
          </VStack>
          <Text fontSize="sm" mt={4}>
            © 2024 Darren's Template Portfolio. Built with ❤️ using Chakra UI.
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

// Project Card Component
const ProjectCard = ({ title, description, imgSrc }) => (
  <Box borderRadius="md" overflow="hidden" boxShadow="lg" bg="white">
    <Image src={imgSrc} alt={title} boxSize="150px" mx="auto" mt={4} />
    <Box p={4} textAlign="center">
      <Heading as="h4" size="md" mb={2} color="brand.500">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.700">
        {description}
      </Text>
    </Box>
  </Box>
);

export default App;
