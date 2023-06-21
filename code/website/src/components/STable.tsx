//@ts-nocheck
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Heading,
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import dynamic from 'next/dynamic'


function STable(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [mdata, setMdata] = useState({});
    const handleModel = (e) => {
        setMdata(e);
        onOpen()
    }
    return (<>
        <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{mdata.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Heading as='h4' size='md'>Address :</Heading>
                    <Text>{mdata.address}</Text>
                    <br></br>
                    <Heading as='h4' size='md'>State :</Heading>
                    <Text>{mdata.state}</Text>
                    <br></br>
                    <Heading as='h4' size='md'>District :</Heading>
                    <Text>{mdata.district}</Text>
                    <br></br>
                    <Heading as='h4' size='md'>Date Of Registeration :</Heading>
                    <Text>{mdata.date_of_registraion}</Text>
                    <br></br>
                    <Heading as='h4' size='md'>Area Of Operation :</Heading>
                    <Text>{mdata.area_of_operation}</Text>
                    <br></br>
                    <Heading as='h4' size='md'>Sector :</Heading>
                    <Text>{mdata.sector}</Text>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
            <Table variant='simple' size='md' >
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>State</Th>
                        <Th>Sector Type</Th>
                        <Th>Details</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.data.map((e) => {
                        return <Tr>
                            <Td >{e.name}</Td>
                            <Td>{e.state}</Td>
                            <Td>{e.sector}</Td>
                            <Td><Button onClick={() => handleModel(e)}>Details</Button></Td>
                        </Tr>
                    })}
                </Tbody>
            </Table>
    </>)
}
export default dynamic (() => Promise.resolve(STable), {ssr: false})
