/*
'use client';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './SignIn.css';



export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signing in with:', { email, password, rememberMe });
  };

  return (
    <div className="sign-in-container">

      <div className="sign-in-form-container">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="form-input">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or mobile number"
              required
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          <div className="form-options">
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
          </div>
        </form>
        <div className="signup-prompt">
          <span>New to Netflix?</span> <a href="/">Sign up now.</a>
        </div>
        <div className="recaptcha-info">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a href="#" className="learn-more">
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
*/

'use client';
import React from 'react';
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
  VStack,
  useStyleConfig,
  extendTheme,
  ChakraProvider
} from '@chakra-ui/react';


const theme = extendTheme({
  colors: {
    netflix: {
      red: '#E50914',
      black: '#000',
      darkGray: '#333',
      lightGray: '#8c8c8c',
      white: '#fff',
    }
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          color: 'netflix.white',
          _placeholder: {
            color: 'netflix.lightGray',
          },
        }
      },
      variants: {
        netflix: {
          field: {
            bg: '#333',
            height: '50px',
            padding: '16px 20px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            _focus: {
              boxShadow: 'none',
              outline: 'none',
            }
          }
        }
      },
      defaultProps: {
        variant: 'netflix',
      }
    },
    Button: {
      variants: {
        netflix: {
          bg: 'netflix.red',
          color: 'netflix.white',
          height: '50px',
          fontSize: '16px',
          fontWeight: '700',
          borderRadius: '4px',
          width: '100%',
          _hover: {
            bg: '#f40612',
          }
        }
      }
    }
  }
});

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function SignIn() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('Signing in with:', data);
  };

  return (
   
    <ChakraProvider theme={theme}>
      
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        bgColor="netflix.black"
        bgImage="linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(/assets/mainBackground.png)"
        bgSize="cover"
        bgPosition="center"
        color="netflix.white"
        padding="20px"
      >
        <Flex justify="center" align="center" flex="1">
          <Box
            maxWidth="450px"
            width="100%"
            padding={{ base: "30px 20px", md: "60px 68px 40px" }}
            bgColor="rgba(0, 0, 0, 0.75)"
            borderRadius="10px"
          >
            <Heading as="h1" size="lg" mb="28px" fontWeight="700">
              Sign In
            </Heading>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing="16px">
                <FormControl isInvalid={!!errors.email}>
                  <Input
                    placeholder="Email or mobile number"
                    {...register("email", { 
                      required: "Email is required", 
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <Text color="netflix.red" fontSize="13px" mt="6px">
                      {errors.email.message}
                    </Text>
                  )}
                </FormControl>

                <FormControl isInvalid={!!errors.password}>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...register("password", { 
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must contain at least one uppercase letter, one number, and one special character",
                      },
                    })}
                  />
                  {errors.password && (
                    <Text color="netflix.red" fontSize="13px" mt="6px">
                      {errors.password.message}
                    </Text>
                  )}
                </FormControl>

                <Button variant="netflix" type="submit" mt="24px" mb="12px">
                  Sign In
                </Button>

                <Flex width="100%" justify="space-between" alignItems="center" fontSize="13px" color="#b3b3b3" mb="40px">
                  <Checkbox 
                    {...register("rememberMe")} 
                    colorScheme="gray"
                    size="sm"
                  >
                    <Text fontSize="13px">Remember me</Text>
                  </Checkbox>
                  <Link color="#b3b3b3" fontSize="13px" _hover={{ textDecoration: "underline" }}>
                    Forgot password?
                  </Link>
                </Flex>
              </VStack>
            </form>

            <Text fontSize="16px" color="#737373" mt="16px">
              New to Netflix?{" "}
              <Link color="netflix.white" _hover={{ textDecoration: "underline" }} href="/">
                Sign up now.
              </Link>
            </Text>

            <Text fontSize="13px" color="#8c8c8c" mt="15px">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
              <Link color="#0071eb" textDecoration="underline" ml="5px" _hover={{ textDecoration: "underline" }}>
                Learn more.
              </Link>
            </Text>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}