import { Avatar, Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import React from "react";
import { FaUpload, FaPaperPlane } from "react-icons/fa";
import UseThreads from "../hooks/Usethreads";

const FormThread: React.FC = () => {
    const { handleChange, 
        handlePost, 
        handleContentClick,
        handleUpload,
        contentInputRef,
        fileInputRef
    } = UseThreads();

  return (
    <>
      <Text ml={4} fontSize="xl" fontWeight="bold">
        Home
      </Text>
      <FormControl ml={4} display="flex" alignItems="center" gap={4} pb={4} w={"115%"}>
        <Avatar
          src="https://png.pngtree.com/png-vector/20230531/ourlarge/pngtree-anime-girl-coloring-pages-vector-png-image_6787130.png"
          size="md"
          bottom={8}
        />
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} flex="1">
          <Input
            onChange={handleChange}
            type="text"
            name="content"
            placeholder="What's on your mind?"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              border: "none",
              padding: "10px",
              fontSize: "20px",
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              outline: "none",
            }}
            ref={contentInputRef}
            onClick={handleContentClick}
            rows={1}
            as="textarea"
          />
          <Input
            onChange={handleChange}
            type="text"
            name="image"
            placeholder="Enter image URL here..."
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "10px",
              border: "none",
              padding: "10px",
              fontSize: "20px",
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              outline: "none",
            }}
          />
          <Box display="flex" gap={2} w="100%">
            <Input
              type="file"
              name="imageFile"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleUpload}
            />
            <Button
              position={"absolute"}
              right={24}
              backgroundColor={"rgba(255, 255, 255, 0.05)"}
              bottom={7}
              onClick={() => fileInputRef.current?.click()}
            >
              <FaUpload size={15} color="white" />
            </Button>
          </Box>
        </Box>
        <Button
          onClick={handlePost}
          type="submit"
          bgColor="green"
          borderRadius="15px"
          pl={"5px"}
          pr={"10px"}
          py={"8%"}
          colorScheme="green"
          fontSize="lg"
          variant="ghost"
          color="white"
          leftIcon={<FaPaperPlane />}
        >
          Post
        </Button>
      </FormControl>
    </>
  );
};

export default FormThread;