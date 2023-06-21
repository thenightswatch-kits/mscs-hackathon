import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Stack, Box, StackDivider, HStack, Spacer } from '@chakra-ui/react'

export const DashRecent = ({ sorted_data }: any) => {
    const top_five = sorted_data.slice(0, 4);
    return (
        <Card h={'100%'} p={5} shadow={0} borderRadius={0}>
            <CardHeader>
                <Heading size='md'>Most Recent Socieites</Heading>
                <Text>List of the most recently registered societies:</Text>
            </CardHeader>

            <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
                {top_five.map((e: any, index:number) => {
                    return (
                        <Box>
                            <HStack>
                                <Heading size='xs' padding={3} borderRadius={50} h={'100%'} dropShadow={'xl'} shadow={10}>{index+1}</Heading>
                                <Heading size='xs' textTransform='uppercase'>
                                    {e.name}
                                </Heading>
                                <Spacer />
                                <Text pt='2' fontSize='sm'>
                                    {e.state}
                                </Text></HStack>
                        </Box>
                   )
                })}
             </Stack>
            </CardBody>
        </Card>
    )
}