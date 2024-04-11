import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const SuggestedForYouCard: React.FC<ISuggestedForYouCard> = (props) => {
  return (
    <Box display="flex" 
      alignItems="center" 
      justifyContent={"space-between"} 
      gap={2} background={"gray.950"} 
      pl={6} 
      pr={3}
      pt={4}
      pb={4}
      position={"relative"}
      left={"80px"} 
      border={"1px"} 
      borderColor={"gray.700"} 
      boxShadow={"lg"} 
      borderRadius={"lg"}
      width={"80%"}
      >
      <Box display={"flex"} gap={2}>
      <Avatar src={props.author_picture} size="md" />
      <Box display={"flex"} flexDirection={"column"} alignItems="start" gap={1}>
        <Text fontWeight="bold" pl={1}>{props.author_fullname}</Text>
        <Text color="gray.500">@{props.author_username}</Text>
      </Box>
      </Box>
      <Box>
        <Button px={3} py={2} borderRadius="full" >Follow</Button>
      </Box>
    </Box>
  );
};

export default SuggestedForYouCard;