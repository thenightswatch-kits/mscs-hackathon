import { ChakraBaseProvider, Container, Box, Text, Link } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
function Form5() {

    return (
        <>
            <Box padding='4' borderWidth='5px' borderColor="black" color='black' width='100%'>
                <Container centerContent>
                    <Text as='b'>FORM V</Text>
                    <Text as='b'>[See sub-paragraph (3) of paragraph 7 of the Schedule]</Text>
                    <Text>Nomination form for election of office bearers</Text><br />
                </Container>
                <Box textAlign='left' width="100%">
                    <Text> 1.	Name of the Multi-State Cooperative Society and Address</Text>
                    <Text>2.	Office for which contesting</Text>
                    <Text>3.	Name of the candidate in case of an Individual member or name of the delegate and the <br /> member cooperative Society or multi-state cooperative society which he is representing</Text>
                    <Text>4.	Serial no. in the register of members</Text>
                    <Text>5.	Father’s or husband’s name (in case of individual member)</Text>
                    <Text>6.	Address</Text>
                    <Text>7.	Name of the proposer in case the proposer is an individual member and the name of <br /> the society and The delegate in the case proposer Is a delegate of a society</Text>
                    <Text>8.	Serial no. of the proposer in the Register of members</Text>
                    <Text>9.	Signature of the proposer</Text>
                    <Text>10.	Name of the seconder when the seconder is an individual member and name of the <br /> society and the delegate in case the seconder is a delegate of a society</Text>
                    <Text>11.	Serial no. of the seconder in the register of members</Text>
                    <Text>12.	Signature of the seconder</Text><br />
                </Box>
                <Container centerContent>
                    <Text as='b'>CANDIDATES DECLARATION</Text> <br />
                </Container>
                <Box textAlign='left'>
                    <Text> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   I declare that I am willing to stand for election of office of the President/Chairperson/Vice-President/ Vice-Chairperson (specify for any other office) and that, to the best of my knowledge and belief I have not incurred any disqualification for membership of the board of ___________________ multi-state cooperative society in terms of the Act, the rules and the bye-laws of the multi-state cooperative society.</Text><br /><br /><br />
                </Box>
                <Box textAlign='right'>
                    <Text>(Signature of the candidate)</Text><br /><br />
                </Box>
                <Container centerContent>
                    <Text as='b'>ENDORSEMENT BY THE RETURNING OFFICER</Text> <br />
                </Container>
                <Box textAlign='left'>
                    <Text> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  This nomination paper was presented to me in person by ___________/ received by registered post on _____ at _____ hrs.</Text><br />
                    <Text>Place _____________</Text>
                    <Text>Date _______________</Text><br /><br /><br />
                </Box>
                <Box textAlign='left'>
                </Box>
                <Box textAlign='right'>
                    <Text>Signature of Returning Officer Or person authorized by him</Text>
                </Box>
                <Box textAlign='left'>
                    <Link color='teal.500'><Text as='u'>DOWNLOAD FORM 5 IN PDF</Text></Link>
                </Box>
            </Box>
        </>
    )
}


export default dynamic(() => Promise.resolve(Form5), { ssr: false })