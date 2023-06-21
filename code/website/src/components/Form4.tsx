import { ChakraBaseProvider, Container, Box, Text, Link } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
function Form4() {

    return (
        <>
            <Box padding='4' borderWidth='5px' borderColor="black" color='black' width='100%'>
                <Container centerContent>
                    <Text as='b'>FORM – IV</Text>
                    <Text as='b'>[See paragraph 5 (b) of the Schedule]</Text>
                    <Text as='b'>Application for appointing election agent</Text><br /><br /><br /><br />
                </Container>
                <Box textAlign='left'>
                    <Text> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  I, ____________________ name of father/spouse ________________member of _____________ (name of the society) contesting for election of members of board of directors/office bearers do hereby nominate the following person an my election agent/counting agent in the election _____________(name of the society) to be held on _____________(specify the date).</Text><br /><br /><br />
                </Box>
                <Box textAlign='right'>
                    <Text>Name and Signature of the candidate   </Text><br /><br />
                </Box>
                <Box textAlign='left'>
                    <Link color='teal.500' href='https://mscs.dac.gov.in/Form/Form4.pdf' target='_blank'><Text as='u'>DOWNLOAD FORM 4 IN PDF</Text></Link>
                </Box>
            </Box>
        </>
    )
}


export default dynamic(() => Promise.resolve(Form4), { ssr: false })