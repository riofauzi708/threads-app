import { Avatar, Box, Text, Image, Button } from "@chakra-ui/react";
import React from "react";

const ProfileCard: React.FC<IMyProfileCard> = (props) => {
  return (
    <Box position="relative" left={20} bg="gray.950" border="1px" borderColor="gray.700" boxShadow="lg" borderRadius="lg" mt={3} p={4} w="80%">
      <Text fontWeight="bold" mb={2}>
        My Profile
      </Text>
      <Box position="relative">
        <Box height="150px" borderRadius="md" overflow="hidden">
          <Image src={props.author_banner} alt="Cover Photo" width="100%" height="100%" objectFit="cover" />
        </Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Box position="absolute" bottom={-55} left={2} textAlign="start" w={"100%"}>
          <Avatar src={props.author_picture} left={1} size="xl" mb={2} />
          <Text fontWeight="bold" fontSize="lg">
            {props.author_full_name}
          </Text>
          <Text color="gray.500" fontSize="sm">
            @{props.author_username}
          </Text>
        </Box>
          <Button left={"85%"} borderRadius={"full"} top={2} transform={"translateX(-50%)"}>
            Edit Profile
          </Button>
        </Box>
      </Box>
      <Text mt={16} fontSize="sm" textAlign="start">
        {props.bio}
      </Text>
      <Box display="flex" mt={4} fontSize="sm">
        <Box display={"flex"} alignItems="center" mr={4} gap={1}>
          <Text fontWeight="bold">{props.following_count}</Text>
          <Text color="gray.500">Following</Text>
        </Box>
        <Box display={"flex"} alignItems="center" mr={4} gap={1}>
          <Text fontWeight="bold">{props.followers_count}</Text>
          <Text color="gray.500">Followers</Text>
        </Box>
      </Box>
    </Box>
    
  );
};

export default ProfileCard;