import { Box, Container, Heading, VStack, Image, Text } from "@chakra-ui/react";
import me from "../assets/IMG_1326.jpg.jpeg";

const About = () => {
  return (
    <Box id="about" py={16}>
      <Container maxW="container.md">
        <VStack spacing={8} alignItems="flex-start">
          <Heading as="h2" size="xl">
            Elías Andri Ásgeirsson
          </Heading>
          <Image
            src={me}
            alt="Your Name"
            borderRadius="full"
            boxSize="200px"
            objectFit="cover"
          />
          <Text fontSize="lg">
            I am a 28-year-old professional based in Reykjavik, Iceland, with a
            diverse background that blends finance, technology, and fitness
            coaching. My career journey reflects a strong commitment to
            continuous learning, personal growth, and making a meaningful impact
            on both individuals and society.
          </Text>
          <Text fontSize="lg">
            With an M.Sc. in Finance from ESADE, a B.Sc. in Business
            Administration with a minor in Computer Science from Reykjavik
            University, and additional certifications in Financial Management
            and Frontend Development, I possess a solid foundation in financial
            analysis, corporate finance, and technological solutions. My
            professional experiences at Deloitte Iceland and Mar Advisors have
            honed my skills in financial consulting, valuations, investor
            presentations, and corporate finance, enabling me to deliver
            data-driven insights and strategic recommendations.
          </Text>
          <Text fontSize="lg">
            Parallel to my corporate career, I am deeply passionate about sports
            and personal development. Having practiced various sports throughout
            my life, I currently coach and train at a functional fitness gym,
            where I lead CrossFit classes for individuals of all ages and
            abilities. This role not only fuels my enthusiasm for health and
            fitness but also strengthens my leadership, motivational, and
            communication skills.
          </Text>
          <Text fontSize="lg">
            Outside of work, I am an avid reader with a keen interest in
            finance, technology, and self-development literature. I am
            fascinated by topics that explore the intricacies of the human mind
            and soul, always seeking new perspectives to enhance
            self-understanding and personal growth.
          </Text>
          <Text fontSize="lg">
            Driven by a desire to create impactful contributions to society and
            help others improve, I strive to blend my financial acumen,
            technical expertise, and coaching experience to inspire positive
            change and support both organizational goals and individual
            aspirations.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
