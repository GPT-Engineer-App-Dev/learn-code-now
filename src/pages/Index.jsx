import { Container, Box, Heading, Text, VStack, HStack, Avatar, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        {/* Hero Section */}
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>Welcome to CodeMaster</Heading>
          <Text fontSize="xl">Your journey to becoming a coding expert starts here.</Text>
        </Box>

        {/* Courses Section */}
        <Box>
          <Heading as="h2" size="xl" mb={6} textAlign="center">Our Courses</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Web Development</Heading>
              <Text mt={4}>Learn the basics of HTML, CSS, and JavaScript to build your own websites.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Data Science</Heading>
              <Text mt={4}>Dive into data analysis, visualization, and machine learning with Python.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Mobile Development</Heading>
              <Text mt={4}>Create mobile applications for Android and iOS using React Native.</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Instructors Section */}
        <Box>
          <Heading as="h2" size="xl" mb={6} textAlign="center">Meet Our Instructors</Heading>
          <HStack spacing={10} justify="center">
            <VStack>
              <Avatar size="xl" name="John Doe" src="https://bit.ly/broken-link" />
              <Text>John Doe</Text>
              <Text fontSize="sm" color="gray.500">Web Development Expert</Text>
            </VStack>
            <VStack>
              <Avatar size="xl" name="Jane Smith" src="https://bit.ly/broken-link" />
              <Text>Jane Smith</Text>
              <Text fontSize="sm" color="gray.500">Data Scientist</Text>
            </VStack>
            <VStack>
              <Avatar size="xl" name="Emily Johnson" src="https://bit.ly/broken-link" />
              <Text>Emily Johnson</Text>
              <Text fontSize="sm" color="gray.500">Mobile Developer</Text>
            </VStack>
          </HStack>
        </Box>

        {/* Testimonials Section */}
        <Box>
          <Heading as="h2" size="xl" mb={6} textAlign="center">What Our Students Say</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Text>"CodeMaster has transformed my career. The courses are well-structured and the instructors are top-notch!"</Text>
              <Text mt={4} fontWeight="bold">- Alex Brown</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Text>"I love the hands-on approach of the courses. I've built several projects that I'm really proud of."</Text>
              <Text mt={4} fontWeight="bold">- Lisa White</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;