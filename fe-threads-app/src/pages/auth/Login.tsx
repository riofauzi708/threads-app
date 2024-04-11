import { Box, FormControl, Text, Input, Button } from "@chakra-ui/react"
import UseLogin from "@/features/auth/components/hooks/useLogin"

const Login = () => {
    const { handleChange, handleSubmit } = UseLogin();

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
            width={"30%"}
            >
                <Text 
                    fontSize="5xl"
                    fontWeight="bold"
                    color={"green.500"}

                >
                    circle
                </Text>
                <Text mb={2} fontSize={"2xl"} fontWeight={"semibold"}>Login to Circle</Text>
                <FormControl>
                    <Input 
                    onChange={handleChange}
                    type="email"
                    name="email"
                    py={6} 
                    placeholder="Email" />
                    <Input 
                    onChange={handleChange}
                    type="password"
                    name="password"
                    py={6} 
                    placeholder="Password" />
                </FormControl>

                <Text
                textAlign={"right"}
                my={2}
                >
                    Forgot Password?
                </Text>
                <Button
                onClick={handleSubmit}
                bgColor="green"
                borderRadius="24px"
                px={"44%"}
                py={6}
                colorScheme="green"
                fontSize="lg"
                variant="ghost"
                color="white"
                >
                    Log In
                </Button>

                <Text
                textAlign={"center"}
                >Don't have an account ? <a href="/auth/register">Register</a></Text>
            </Box>
        </Box>
    )
}

export default Login