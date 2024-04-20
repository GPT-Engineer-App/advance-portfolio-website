import { Box, Flex, IconButton, Image, useColorMode, useColorModeValue, Text, Heading } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bgColor} color={color} minHeight="100vh">
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Text fontSize="2xl" fontWeight="bold">
          conte
        </Text>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode} aria-label="Toggle dark mode" />
      </Flex>
      <Flex flexDirection="column" alignItems="center" p={4}>
        <Heading as="h1" size="xl" mb={6}>
          Welcome to My Portfolio
        </Heading>
        <Flex justifyContent="space-between" alignItems="center" w="full" maxW="container.md">
          <IconButton icon={<FaArrowAltCircleLeft />} variant="ghost" aria-label="Previous image" fontSize="2xl" />
          <Image src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGltYWdlfGVufDB8fHx8MTcxMzY0MDQ4OHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" transform="skewX(-10deg)" />
          <Image src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGltYWdlfGVufDB8fHx8MTcxMzY0MDQ4OHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" transform="skewX(-10deg)" />
          <Image src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGltYWdlfGVufDB8fHx8MTcxMzY0MDQ4OHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" transform="skewX(-10deg)" />
          <IconButton icon={<FaArrowAltCircleRight />} variant="ghost" aria-label="Next image" fontSize="2xl" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;
