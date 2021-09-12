import type { NextPage } from "next";
import {
  Heading,
  Text,
  Box,
  Container,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon, PhoneIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";

const features = [
  {
    icon: <PhoneIcon />,
    title: "No infinite scrolling, no curated feed",
    description:
      "Statuses are destroyed after 24 hours, no temptation to mindlessly scroll and waste time. Statuses are sorted by date posted, optimized for a quick scroll and closing back out of the app as quick as possible.",
  },
  {
    icon: <PhoneIcon />,
    title: "No links, no clickbait",
    description:
      "Today's social networks have become a breeding ground for false information, clickbait, and political nonsense, these are not relevant when you are checking in on your group of friends / family.",
  },
  {
    icon: <PhoneIcon />,
    title: "No advertisements, no spying",
    description:
      "Everyone hates advertisements, there is proven statistics that they do not work. They have no place in a social network, and 3rd parties have no business with your personal information.",
  },
  {
    icon: <PhoneIcon />,
    title: "Only the people you really care for",
    description:
      "It was a design decision to make it tedious to follow new people, you can realistically only tend to ~150 relationships at a given point in life, do you really care what all of your Facebook friends are doing?",
  },
  {
    icon: <PhoneIcon />,
    title: "No images or video, No likes or follower counts",
    description:
      "The rise of social networks centered around images and video have been proven to be psychologically harmful on children and young adults. ",
  },
  {
    icon: <PhoneIcon />,
    title: "No feature creep",
    description:
      "There is no plan to overload this social network with fancy bells and whistles, for example we will not be implementing in-app messaging or calling, users are instead encouraged to use SMS/Phone Calls",
  },
];

const Home: NextPage = () => {
  return (
    <Container minH="100vh" maxW="container.lg" py="4" display="flex" alignItems="center">
      <Box
        bgColor="white"
        borderColor="red.400"
        borderWidth="6px"
        py="10"
        borderRadius="md"
        alignItems="center"
      >
        <Box mx="5">
          <Heading fontSize="5xl" color="red.400">
            Cherry,
          </Heading>
          <Heading fontSize="2xl">
            The healthy alternative to social networking.
          </Heading>
          <Link href="https://testflight.apple.com/join/qTXFimQ1">
            <Button mt="4" size="lg" bgColor="red.400" color="white">
              iOS beta <ArrowForwardIcon />
            </Button>
          </Link>
          <Link href="https://expo.dev/@cherryapp/cherry" ml="2"> 
            <Button mt="4" size="lg" bgColor="red.400" color="white">
              Android Beta <ArrowForwardIcon />
            </Button>
          </Link>
        </Box>
        <Flex wrap="wrap">
          {features.map(({ icon, title, description }) => (
            <Box key={title} flex={1} minW="15rem" m="5">
              <Text fontSize="md" fontWeight="bold">
                {title}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {description}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default Home;
