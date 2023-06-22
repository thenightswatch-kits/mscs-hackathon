import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import signIn from '../../firebase/auth/signin';
  
  export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter()

    const handleForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/account")
    }

    return (
      <Flex
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} width={'auto'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  {/* <Checkbox>Remember me</Checkbox>
                  <Link color={'#5A6ACF'}>Forgot password?</Link> */}
                </Stack>
                <Button
                  bg={'#5A6ACF'}
                  color={'white'}
                  onClick={(e)=>{handleForm(e)}}
                  _hover={{
                    bg: '#4D4DAE',
                  }}>
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
              <Text align={'center'}>
                New user? <Link color={'#5A6ACF'} href='/account/signup' >Sign-up</Link>
              </Text>
            </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }