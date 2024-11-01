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
    //Create AY fully based on the colors you have taken from Color Picker
    AY:{ 
      primaryColor:'#1A1F71',
      200:'#2B3B4B'
    }
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="brand.100" minH="100vh" color="gray.800">
        {/* Header */}
        <Box as="header" py={10} textAlign="center">
          <Heading size="2xl" color="AY.primaryColor">Anson's Portfolio</Heading>
          <Text fontSize="xl" color="AY.200">Young Developer & Artist</Text>
        </Box>

        {/* TODO: Fill up the texts that you like */}
        <Box maxW="600px" mx="auto" py={8} px={6} textAlign="center">
          <Heading as="h3" size="lg" mb={4}>About Me</Heading>
          <Text fontSize="md">
            Hello! I'm Anson, a 10-year-old with a passion for coding and creating! I 
          </Text>
        </Box>

        {/* Projects Section */}
        <Box maxW="800px" mx="auto" py={8} px={6}>
          <Heading as="h3" size="lg" mb={4} textAlign="center">
            My Projects
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {/* Project Card Example */}
            <ProjectCard
              title="Stickman Wars"
              description="A shooter game which has cheat codes and guns of all kinds!"
              imgSrc="https://scratch.mit.edu/projects/1076316337/"
              srcLink=""
            />
            <ProjectCard
              title="Level ! Run for your life"
              description="A game based on Level ! of the Backrooms (Warning: jumpscare)."
              imgSrc="https://scratch.mit.edu/projects/1050333827/"
              srcLink=""
            />
            <ProjectCard
              title="The Backrooms"
              description="A 3d game that is set in the Backrooms!"
              imgSrc="https://scratch.mit.edu/projects/1051251493/"
              srcLink=""
            />
          </SimpleGrid>
        </Box>

        {/* Footer */}
        <Box as="footer" py={8} textAlign="center" bg="brand.200" position="fixed" bottom={0} width="100%">
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
const ProjectCard = ({ title, description, imgSrc, srcLink }) => (
  <Link to={imgSrc}>
  <Box borderRadius="md" overflow="hidden" boxShadow="lg" bg="white">
    <Image src={srcLink} alt={title} boxSize="150px" mx="auto" mt={4} />
    <Box p={4} textAlign="center">
      <Heading as="h4" size="md" mb={2} color="brand.500">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.700">
        {description}
      </Text>
    </Box>
  </Box>
  </Link>
);

export default App;
