import { Divider, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import { IoIosHome } from "react-icons/io";
import { BiSolidCameraMovie } from "react-icons/bi";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px" position="fixed" w="100%" zIndex={3} >
        <Flex mx={7}>
          <BiSolidCameraMovie color="orange" size={40} />
          <Heading size='lg' mx={2} color="orange">MovieHive</Heading>
        </Flex>

        <HStack spacing={1}>
          <IoIosHome />
          <Link as={RouterLink} to="/" fontSize="lg">
            Home
          </Link>
        </HStack>
        <ColorModeSwitch />
      </HStack>
      <Divider />
    </>
  )
}

export default NavBar;
