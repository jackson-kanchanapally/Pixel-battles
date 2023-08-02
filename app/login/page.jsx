"use client";
import * as React from "react";
 import { Box, Button, Flex, VStack,} from "@chakra-ui/react";
import { Formik, Field,Form } from "formik";
import Formi from "../components/Form";
import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function LoginPage() {
    
  const vaildateSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    pass: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .required("Password is required"),
  });
  const onSubmit=async(val,{resetForm})=>{
    alert(val.email+"  "+val.pass)
    
  }
  return (
    <Flex bg="gray.800" align="center" justify="center" h="100vh">
      <Box bg="gray.200" p={6} rounded="md" w={80}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
        
          validationSchema={vaildateSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form >
              <VStack spacing={4} align="flex-start">
                <Formi
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                />
                <Formi
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  variant="filled"
                />

                <Button type="submit" bg="yellow.400" w="full">
                  Login
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
// 'use client'
// import React, { useState } from 'react';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Flex
// } from '@chakra-ui/react';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const auth = getAuth();

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Handle successful login, e.g., redirect the user to another page
//         console.log('Successfully signed in!', userCredential.user);
//       })
//       .catch((error) => {
//         // Handle login error, e.g., show an error message to the user
//         console.error('Error signing in:', error.message);
//       });
//   };

//   return (
//     <Flex bg="gray.800" align="center" justify="center" h="100vh">
//      <Box bg="gray.200" p={6} rounded="md" w={80}>
//       <form onSubmit={handleLogin}>
//         <FormControl>
//           <FormLabel color='black'>Email</FormLabel>
//           <Input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             borderColor='gray.400'
//             placeholder='Email Address'
//             color='black'
//           />
//         </FormControl>
//         <FormControl mt="4">
//           <FormLabel color='black'>Password</FormLabel>
//           <Input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             borderColor='gray.400'
//             placeholder='Password'
//             color='black'
//           />
//         </FormControl>
//         <Button type="submit" bg="yellow.400" mt="4" w='full' color='black'>
//           Login
//         </Button>
//       </form>
//       </Box>
//     </Flex>
//   );
// };

// export default LoginForm;


