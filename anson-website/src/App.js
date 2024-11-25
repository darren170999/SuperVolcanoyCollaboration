import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Link,
  SimpleGrid,
  VStack,
  extendTheme
} from '@chakra-ui/react';
import SkyIsland from "./SkyIsland.png";
import TheBackrooms from "./TheBackrooms.png";
import Level from "./Level.png";
import AnsonYu from "./AnsonYu.png";
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
        <img src={AnsonYu} boxSize="150px" mx="auto" mt={4} /> 
          <Heading as="h3" size="lg" color='AY.600' mb={4}>About Me</Heading>
          <Text fontSize="md" color='AY.600'>
            Hello! I'm Anson, a 10-year-old with a passion for coding and creating! I specialise with Scratch, and you can see my projects down below!
          </Text>
        </Box>
{/* Study how Project Card is used. And do the same thing to add your profile picture above the About me section */}
        <Box maxW="800px" mx="auto" py={8} px={6}>
          <Heading as="h3" size="lg" mb={4} textAlign="center" color='AY.600'>
            My Projects
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            <ProjectCard
              title="Sky Island"
              description="A shooter game which has cheat codes and guns of all kinds!"
              imgSrc={SkyIsland}
              srcLink="https://scratch.mit.edu/projects/1076316337/"
            />
            <ProjectCard
              title="Level ! Run for your life"
              description="A game based on Level ! of the Backrooms (Warning: jumpscare)."
              imgSrc={Level}
              srcLink="https://scratch.mit.edu/projects/1050333827/"
            />
            <ProjectCard
              title="The Backrooms"
              description="A 3d game that is set in the Backrooms!"
              imgSrc={TheBackrooms}
              srcLink="https://scratch.mit.edu/projects/1051251493/"
            />
          </SimpleGrid>
        </Box>

        <Box as="footer" textAlign="center" bg="AY.400" position="fixed" bottom={0} width="100%">
          <Text fontSize="sm" mt={2}>
            © 2024 Anson's Template Portfolio. Built with ❤️ using Chakra UI.
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

const ProjectCard = ({ title, description, imgSrc, srcLink }) => (
  <Box borderRadius="md" overflow="hidden" boxShadow="lg" bg="white">
    {imgSrc && (
      <img src={imgSrc} alt={title} boxSize="150px" mx="auto" mt={4} /> // This line here tells u that this is an image
    )}
    <Box p={4} textAlign="center">
      <Heading as="h4" size="md" mb={2} color="AY.100">
        {title}
      </Heading>
      <Text fontSize="sm" color="AY.100" mb={4}>
        {description}
      </Text>
      <Link href={srcLink} color="AY.400" isExternal>
        View Project
      </Link>
    </Box>
  </Box>
);


export default App;