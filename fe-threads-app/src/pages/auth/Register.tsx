import { Box, Text, FormControl, Input, Button } from "@chakra-ui/react"
import React from "react"
import UseRegister from "@/features/auth/components/hooks/useRegister"

const FormRegister = (): React.JSX.Element => {
    const { handleChange, handleSubmit } = UseRegister();

    
    return (
        <Box 
            bg="#242424" 
            color="rgba(255, 255, 255, 0.87)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Box 
                w={"30%"}
            >
                <Text
                    fontSize="5xl"
                    fontWeight="bold"
                    color={"green.500"}
                >
                    circle
                </Text>
                <Text mb={4} fontSize={"2xl"} fontWeight={"semibold"}>Create account Circle</Text>
                <FormControl>
                    <Input 
                    onChange={handleChange}
                    type="text"
                    name="full_name" 
                    py={6} 
                    placeholder="full_name" />
                    <Input 
                    onChange={handleChange}
                    type="text"
                    name="username" 
                    my={2}
                    py={6} 
                    placeholder="username" />
                    <Input 
                    onChange={handleChange} 
                    type="email"
                    name="email"
                    my={2} 
                    py={6} 
                    placeholder="email" />
                    <Input 
                    onChange={handleChange}
                    type="password"
                    name="password"
                    py={6} 
                    placeholder="password" />
                </FormControl>
                <Button 
                    onClick={handleSubmit}
                    bgColor="green"
                    borderRadius="24px"
                    px={"44%"}
                    py={6}
                    my={4}
                    colorScheme="green"
                    fontSize="lg"
                    variant="ghost"
                    color="white"
                >
                    Create
                </Button>
                <Text textAlign={"center"}>Already have an account ? <a href="/auth/login">Login</a></Text>
            </Box>
        </Box>
    )
}

export default FormRegister