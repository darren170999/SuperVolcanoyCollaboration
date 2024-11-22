import React from 'react';
import {
  ChakraProvider,
  Box,
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
      100:'#0D0E0F',
      200:'#1A1F71',
      300:'#E5E3DD',
      400:'#F8B600',
      500:'#FEFEFE',
      600:'#FFFFFF'

    }
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="AY.200" minH="100vh" color="gray.800">
        {/* Header */}
        <Box as="header" py={10} textAlign="center">
          <Heading size="2xl" color="AY.600">Anson's Portfolio</Heading>
          <Text fontSize="xl" color="AY.600">Young Developer & Artist</Text>
        </Box>

        {/* TODO: Fill up the texts that you like */}
        <Box maxW="600px" mx="auto" py={8} px={6} textAlign="center">
          <Heading as="h3" size="lg" color='AY.600' mb={4}>About Me</Heading>
          <Text fontSize="md" color='AY.600'>
            Hello! I'm Anson, a 10-year-old with a passion for coding and creating! I 
          </Text>
        </Box>

        {/* Projects Section */}
        <Box maxW="800px" mx="auto" py={8} px={6}>
          <Heading as="h3" size="lg" mb={4} textAlign="center" color='AY.600'>
            My Projects
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {/* Project Card Example */}
            <ProjectCard
              title="Sky Island"
              description="A shooter game which has cheat codes and guns of all kinds!"
              imgSrc="and.png"
              srcLink="https://scratch.mit.edu/projects/1076316337/"
            />
            <ProjectCard
              title="Level ! Run for your life"
              description="A game based on Level ! of the Backrooms (Warning: jumpscare)."
              imgSrc=""
              srcLink="https://scratch.mit.edu/projects/1050333827/"
            />
            <ProjectCard
              title="The Backrooms"
              description="A 3d game that is set in the Backrooms!"
              imgSrc=""
              srcLink="https://scratch.mit.edu/projects/1051251493/"
            />
          </SimpleGrid>
        </Box>

        {/* Footer */}
        <Box as="footer" py={8} textAlign="center" bg="AY.400" position="fixed" bottom={0} width="100%">
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
      <Heading as="h4" size="md" mb={2} color="AY.100">
        {title}
      </Heading>
      <Text fontSize="sm" color="AY.100">
        {description}
      </Text>
    </Box>
  </Box>
  </Link>
);

export default App;