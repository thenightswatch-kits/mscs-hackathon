//@ts-nocheck
import { useState } from 'react';
import dynamic from 'next/dynamic';
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
    Box,
    Center,
    Select,
    Text,
    Link,
    Heading,
} from '@chakra-ui/react'

function ActsTable() {

    var sno = 1;

    const acts = [
        {
            "name":"MSCS Act, 2002",
            "link":"https://mscs.dac.gov.in/Guidelines/GuidelineAct2002.pdf"
        },
        {
            "name":"MSCS Rules, 2002",
            "link":"https://mscs.dac.gov.in/Form/Rules2002.pdf"
        },
        {
            "name":"Model Bye-laws",
            "link":"https://mscs.dac.gov.in/Form/Model2002.pdf"
        },
        {
            "name":"National Policy on Cooperative, 2002",
            "link":"https://mscs.dac.gov.in/Form/NatPolicy02.pdf"
        },
    ]

    return (
        <>
            <Box display={'flex'}  justifyContent={'center'} width={'100%'}>
                <Center width={'70%'}>
                    <Table variant='simple' size='md' width={'100%'}>
                        <Thead>
                            <Tr>
                                <Th>S.No</Th>
                                <Th>Name</Th>
                                <Th isNumeric>Download</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {acts.map(data=>{
                                return(
                                    <Tr>
                                        <Td>{sno++}</Td>
                                        <Td>{data.name}</Td>
                                        <Td isNumeric><Link href={data.link} target='_blank'><Text as='u' color="blue.600">Download</Text></Link></Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </Center>
            </Box>
        </>
    )
}

export default dynamic (() => Promise.resolve(ActsTable), {ssr: false})