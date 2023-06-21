import { ChakraBaseProvider, Container, Box, Text, Link } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
function Form1(){

  return (
    <>
      <Box padding='4' borderWidth='5px' borderColor="black" color='black' width='100%'>
        <Container centerContent>
          <Text as='b'>FORM – I</Text>
          <Text as='b'>[See sub-rule (1) of rule 3]</Text>
          <Text as='b'>Application for registration of a Multi-State Cooperative Society under the Multi-State Cooperative Societies Act, 2002</Text><br />
        </Container>
        <Box textAlign='left' width="100%">
          <Text>To,</Text>
          <Text>The Central Registrar of Cooperative Societies,</Text>
          <Text>New Delhi.</Text><br />
          <Text>Sir,</Text>
          <Text>We submit herewith a proposal for registration of the following Multi-State Cooperative Society along with enclosures as indicated below :</Text><br />
          <Text>2. We also declare that the information given herewith including that in the enclosures is correct to the best of our knowledge.</Text>
          <Text>(a) Name of the proposed Multi-State Co-operative Society;</Text>
          <Text>(b) Headquarters and address to be registered;</Text>
          <Text>(c) Area of operations;</Text>
          <Text>(d) Main objectives;</Text>
          <Text>(e) Why is it absolutely necessary for the society to be registered under the Multi-State Cooperative Societies Act,2002;</Text>
          <Text>(f) A certificate in respect of provisions of clause (b) or sub-section(1) of section 7;</Text>
          <Text>(g) A certificate in respect of provisions clause (c) of sub-section (1) of section 7;</Text>
          <Text>(h) A certificate in respect of provisions of clause (d) of sub-section (1) of section 7;</Text>
          <Text>(i) If all the members are individuals, indicate the number of persons from each State who have signed the application : Name of the State Number of persons who have Signed the application</Text>
          <Text>(j) Name and address of the applicant for the purpose of further correspondence.</Text><br />
          <Text>3. Following documents are enclosed :</Text><br />
          <Text>(a) A certificate from the _______________ Bank stating credit balance there in favour of the proposed multi-state cooperative society.</Text>
          <Text>(b) A scheme explaining how the proposed multi-state cooperative society has reasonable prospects of becoming a viable unit. We are sending herewith four copies of the bye-laws duly signed.</Text><br />
          <Text>4. Following persons are authorised to sign the bye-laws and also to make necessary alteration therein.</Text><br />
          <Text>5. The particulars of the applicants are given here under :</Text>
        </Box>
        <Box width={'100%'} textAlign={'center'}>
          <table>
            <tr>
              <td>S.No</td>
              <td>Name</td>
              <td>If representing a corporate body, <br /> name of the institution*</td>
              <td>If the applicant is an <br /> individual</td>
              <td>Age</td>
              <td>Nationality</td>
            </tr>
            <tr>
              <td>(1)</td>
              <td>(2)</td>
              <td>(3)</td>
              <td>(4)</td>
              <td>(4A)</td>
              <td>(4B)</td>
            </tr>
            <tr>
              <td><Text color="white">Hi</Text></td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
          </table>
          <br />
          <table>
            <tr>
              <td>Profession</td>
              <td>Name of the State</td>
              <td>Address</td>
              <td>Amount subscribed <br /> to share capital</td>
              <td>In the case of representative of society or <br />a multi-state cooperative society, whether <br />he is Chairpersons/ President or <br />Chief Executive of that society <br /></td>
              <td>Signature</td>
            </tr>
            <tr>
              <td>(4C)</td>
              <td>(5)</td>
              <td>(6)</td>
              <td>(7)</td>
              <td>(8)</td>
              <td>(9)</td>
            </tr>
            <tr>
              <td><Text color="white">Hi</Text></td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
          </table>
          <br />
        </Box>
        <Container centerContent>
          <Text as='b'>For Official Use</Text> <br />
        </Container>
        <Box textAlign='left'>
          <Text>Received by registered post on+ _________________ by+ ____________ in the office of the Central Registrar, or by hand from Shri+ _______________ entered in the register of application at S.No. _______________ .</Text><br /><br /><br />
        </Box>
        <Box textAlign='right'>
          <Text>Signature of officer receiving</Text><br /><br />
        </Box>
        <Box textAlign='left'>
          <Text>Received registration proposal No. ______________ on ___________ for registration of _______________ Society Ltd., (Proposed) alongwith the enclosures referred to above from ______________ by post/hand deliver.</Text><br />
          <Text>Place _____________</Text>
          <Text>Date _______________</Text>
        </Box>
        <Box textAlign='right'>
          <Text>Central Registrar</Text>
          <Text>Signature and Stamp</Text>
        </Box>
        <Box textAlign='left'>
          <Text>* If representing a co-operative or any other co-operative body enclose a copy of the Resolution or authorization of the competent authority, authorizing the person to sign the application for registration.</Text>
          <Text>+ blanks to be filled in.</Text>
          <Link color='teal.500'><Text as='u'>DOWNLOAD FORM 1 IN PDF</Text></Link>
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


export default dynamic (() => Promise.resolve(Form1), {ssr: false})