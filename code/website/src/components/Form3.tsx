import { ChakraBaseProvider, Container, Box, Text, Link } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
function Form3() {

    return (
        <>
            <Box padding='4' borderWidth='5px' borderColor="black" color='black' width='100%'>
                <Container centerContent>
                    <Text as='b'>FORM – III</Text>
                    <Text as='b'>Nomination form for elections of Board of Directors</Text>
                    <Text as='b'>[See paragraph 3 (a) of the Schedule]</Text><br />
                </Container>
                <Box textAlign='left' width="100%">
                    <Text> 1.	Name of the Multi-State Cooperative Society and Address</Text>
                    <Text>2.	Name of the candidate in case of an Individual member or name of the delegate and the member cooperative Society or multi-state cooperative society which he is representing	:	</Text>
                    <Text>3.	Serial no. in the register of members</Text>
                    <Text>4.	Father’s or husband’s name (in case of individual member)</Text>
                    <Text>5.	Address</Text>
                    <Text>6.	Name of the proposer in case the proposer is an individual member and the name of the society and The delegate in the case proposer Is a delegate of a society</Text>
                    <Text>7.	Serial no. of the proposer in the Register of members</Text>
                    <Text>8.	Signature of the proposer</Text>
                    <Text>9.	Name of the seconder when the seconder is an individual member and name of the society</Text>
                    <Text>10.	Serial no. of the seconder in the register of members</Text>
                    <Text>11.	Signature of the seconder</Text><br />
                </Box>
                <Container centerContent>
                    <Text as='b'>CANDIDATES DECLARATION</Text> <br />
                </Container>
                <Box textAlign='left'>
                    <Text> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; I declare that I am willing to stand for election and that, to the best of my knowledge and belief I have not incurred any disqualification for membership of the board of ______________ multi-state cooperative society in terms of the Act, the rules and the bye-laws of the multi-state cooperative society.</Text><br /><br /><br />
                </Box>
                <Box textAlign='right'>
                    <Text>(Signature of the candidate)</Text><br /><br />
                </Box>
                <Container centerContent>
                    <Text as='b'>ENDORSEMENT BY THE RETURNING OFFICER</Text> <br />
                </Container>
                <Box textAlign='left'>
                    <Text> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; This nomination paper was presented to me in person by ___________/ received by registered post on _____ at _____ hrs.</Text><br />
                    <Text>Place _____________</Text>
                    <Text>Date _______________</Text><br /><br /><br />
                </Box>
                <Box textAlign='left'>
                </Box>
                <Box textAlign='right'>
                    <Text>Signature of Returning Officer Or person authorized by him</Text>
                </Box>
                <Box textAlign='left'>
                    <Link color='teal.500' href='https://mscs.dac.gov.in/Form/Form3.pdf' target='_blank'><Text as='u'>DOWNLOAD FORM 3 IN PDF</Text></Link>
                </Box>
            </Box>
        </>
    )
}


export default dynamic(() => Promise.resolve(Form3), { ssr: false })