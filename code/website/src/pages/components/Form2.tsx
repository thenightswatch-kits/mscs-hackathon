//@ts-nocheck
import { ChakraBaseProvider, Container, Box, Text, Link } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
function Form2() {

    return (
        <>
            <Box padding='4' borderWidth='5px' borderColor="black" color='black' width='100%'>
                <Container centerContent>
                    <Text as='b'>FORM – II</Text>
                    <Text as='b'>[See sub-rule (1) of rule 4]</Text>
                    <Text as='b'>Register of applications for registration of multi-state co-operative societies received by the Central Registrar</Text><br />
                </Container>
                <Box width={'100%'} textAlign={'center'}>
                    <table>
                        <tr>
                            <td>S.No</td>
                            <td>Name of the proposed multi-state co-operative society <br /> and the Chief Promoter</td>
                            <td>Complete address</td>
                            <td>Date of receipt and how received</td>
                        </tr>
                        <tr>
                            <td>(1)</td>
                            <td>(2)</td>
                            <td>(3)</td>
                            <td>(4)</td>
                        </tr>
                        <tr>
                            <td><Text color="white">Hi</Text></td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                    </table>
                    <br />
                    <table>
                        <tr>
                            <td>Date and reference of <br /> acknowledgement</td>
                            <td>No. and date on which additional information <br /> in called </td>
                            <td>Prescribed date by which information is <br /> called</td>
                            <td>Date on which additional information <br /> received</td>
                        </tr>
                        <tr>
                            <td>(5)</td>
                            <td>(6)</td>
                            <td>(7)</td>
                            <td>(8)</td>
                        </tr>
                        <tr>
                            <td><Text color="white">Hi</Text></td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                    </table>
                    <br />
                    <table>
                        <tr>
                            <td rowspan="2">No. and date of the report, if any sent to the Central No. and <br /> date of order of Initial Remarks Government, if the society is not <br /> registered, within six months</td>
                            <td colspan="2">No. and date of order of </td>
                            <td>Initial Remarks</td>
                            <td>Signature</td>
                        </tr>
                        <tr>
                            <td>Registration</td>
                            <td>Refusal</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>(9)</td>
                            <td>(10)Container</td>
                            <td>(13)</td>
                        </tr>
                        <tr>
                            <td><Text color="white">Hi</Text></td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                    </table>
                    <br />
                </Box>
                <Box textAlign='left'>
                    <Link color='teal.500'><Text as='u'>DOWNLOAD FORM 2 IN PDF</Text></Link>
                </Box>
            </Box>
            <style>{`
    table{
     border:1px solid black;
  border-collapse: collapse;
  width:100%
    }
    th, td {
      border: 1px solid black;
    }
  `}</style>
        </>
    )
}


export default dynamic(() => Promise.resolve(Form2), { ssr: false })