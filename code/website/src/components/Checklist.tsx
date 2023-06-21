import { ChakraBaseProvider, Container, Box, Text, Link, Center } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
function Checklist(){

  return (
    <>
      <Box padding='4' borderWidth='5px' borderColor="black" color='black' width='100%'>
        <Center width="100%">
          <Text as='b'>Check List regarding documents to be submitted with the proposal for the registration of a Multi state Cooperative Society.</Text>
        </Center>
        <Box textAlign='left' width="100%">
        <br /><br /><br /><Text as='b'>[A]</Text><br /><br />
          <Text>1.Form 1: To be submitted in the format annexed with the MSCS Act 2002 along with the documents required under Form I.</Text>
          <Text>2.A certificate from the bank stating credit balance there in favour of the proposed multi-state co-operative society.</Text>
          <Text>3.A scheme explaining how the proposed multi state co-operative society has reasonable prospects of becoming a viable unit.</Text>
          <Text>4.Four copies of bye-laws in original.</Text>
          <Text>5.Proposed area of operation for registration shall initially be permitted for two contagious states only.</Text>
          <Text>6.List of at least 50 members from each state. The lsit has to be submitted in the format annexed with the MSCS Act 2002 along with the copies of ID prooofs of the members duly attested by Chief promoter.</Text>
          <Text>7.Certified copies of the resolutions passed by the proposed society along with the certified copy of the resolution of the promoters which shall specify the name and address of one of the applicant(s) to whom the Central Registrar may address correspondence under the rules before registration and dispatch or hand over registration documents.</Text>
          <Text>8.Contact number and e-mail address of the Chief Promoter or Society on cover page.</Text><br /><br />
          <Text as='b'>[B]</Text><br />
          <Text as='b'>For societies having objects related to thrift and credit and for multi-purpose societies following additional documents are required to be submitted along with documents mentioned at point [A] above:</Text><br /><br />
          <Text>1.No objection Certificate from the Registrar of Cooperative Societies of the States/U.T. where the area of operation of the society is proposed to be confined.</Text>
          <Text>2.A certificate to the effect that the credentials of the Chief Promoter/Promoters have been verified by the Registrar of Co-operative Societies of the state where the head office is proposed to be located.</Text><br /><br />
          <Text as='b'>All documents to be submitted in original with the signatures of the Chief Promoter/Promoters on each page.</Text><br /><br />
          <Text>Note: Societies which are already registered under the MSCS Act, 2002 and are desirous of expanding their area of operations falling under category (B) above shall be required to submit an NoC as mentioned at [B](1)</Text>
        </Box>
      </Box>
    </>
  )
}


export default dynamic (() => Promise.resolve(Checklist), {ssr: false})