import { Box, Avatar, Text, Button } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import React, { useState } from "react";
import { IThreadCard } from "@/utils/interface/IThreadCard";

const ThreadCard: React.FC<IThreadCard> = (props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(props.likes_count);
console.log(props);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Box bg="#242424" color="rgba(255, 255, 255, 0.87)" p={4} borderBottom="1px" borderRight={"1px"} borderColor="gray.700" width="118%">
      <Box display="flex" alignItems="start" justifyContent="space-between">
        <Avatar src={props.user?.profile_picture} mr={4} />
        <Box flex="1">
          <Box display="flex" alignItems="center">
            <Text fontWeight="bold" mr={2}>
              {props.user?.full_name}
            </Text>
            <Text color="gray.500" fontSize="sm">
              @{props.user?.username}
            </Text>
            <Text fontSize="sm" color="gray.500" ml={2}>
              {props.posted_at}
            </Text>
          </Box>
          <Box mt={2}>
            <Text mb={2}>{props.content}</Text>
            {props.image && <img src={props.image} width="80%" height="auto" />}
          </Box>
          <Box mt={4} display="flex" alignItems="center">
            <Button
            border={"1px"}
              variant="ghost"
              color="gray.500"
              size="sm"
              leftIcon={<FaHeart color={isLiked ? "red" : "inherit"} />}
              onClick={handleLike}
            >
              {likeCount}
            </Button>
            <Button border={"1px"} variant="ghost" color="gray.500" size="sm" ml={2}>
              {props.replies_count} replies
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThreadCard;