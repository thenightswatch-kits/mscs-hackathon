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
  
  export default function SignIn() {
    return (
      <Flex
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} width={'30%'} py={12} px={6}>
          <Stack align={'center'}>
            {/* <Heading fontSize={'4xl'}>Sign in to your account</Heading> */}
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'#5A6ACF'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'#5A6ACF'}
                  color={'white'}
                  _hover={{
                    bg: '#4D4DAE',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }