import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { FaHome, FaSearch, FaUser, FaPlus, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");}

  return (
    <Box bg="#242424" color="rgba(255, 255, 255, 0.87)" px={4} border="1px" borderColor="gray.700" borderRadius="md" gap={2} width="21%">
      <Text variant="ghost" color="green.500" fontSize="6xl" px={2} fontWeight="bold" position="fixed" left={4}>
        circle
      </Text>
      <Box display="flex" flexDirection="column" pt={24} alignItems="start" position="fixed" gap={2}>
        <Button colorScheme="green" fontSize="lg" variant="ghost" color="white" leftIcon={<FaHome />}>
          <Link to="/">Home</Link>
        </Button>
        <Button colorScheme="green" fontSize="lg" variant="ghost" color="white" leftIcon={<FaSearch />}>
          Search
        </Button>
        <Button colorScheme="green" fontSize="lg" variant="ghost" color="white" leftIcon={<FaUser />}>
          Follows
        </Button>
        <Button colorScheme="green" fontSize="lg" mb={4} variant="ghost" color="white" leftIcon={<FaUser />}>
          Profile
        </Button>
        <Button
          bgColor="green"
          borderRadius="24px"
          px={12}
          py={6}
          colorScheme="green"
          fontSize="lg"
          variant="ghost"
          color="white"
          leftIcon={<FaPlus />}
        >
          Create post
        </Button>
        <Box bottom={6} position="fixed" left={8}>
          
            <Link to="/auth/login">
            <Button
              bgColor="gray.950"
              borderRadius="24px"
              px={12}
              py={6}
              colorScheme="gray"
              fontSize="xl"
              variant="ghost"
              color="white"
              leftIcon={<FaSignInAlt />}
              onClick={handleLogout}
            >
              Log out
            </Button>
            </Link>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;