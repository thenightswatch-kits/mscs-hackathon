//@ts-nocheck
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
    Text,
    Select,
} from '@chakra-ui/react'
import json from '../data/data'
import states from '../data/states'

function StatewiseTable() {
    const stateCount = {};
    var total = 0;

    json.forEach(data => {
        const state = data.state;

        if (state) {
            if (stateCount.hasOwnProperty(state)) {
                stateCount[state]++;
                total++;
            } else {
                stateCount[state] = 1;
                total++;
            }
        }
    });

    for (const state in stateCount) {
        console.log(`state ${state}: ${stateCount[state]}`);
    }

    var sno = 1;

    const tableRows = Object.entries(stateCount).map(([state, count]) => (
        <Tr key={state}>
            <Td>{sno++}</Td>
            <Td>{state}</Td>
            <Td isNumeric>{count}</Td>
        </Tr>
    ));

    return (

        <Box display={'flex'} justifyContent={'center'} width={'100%'}>
            <Center width={'70%'}>
                <Table variant='simple' size='md' width={'100%'}>
                    <Thead>
                        <Tr>
                            <Th>S.No</Th>
                            <Th>Year</Th>
                            <Th isNumeric>No. of Societies</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableRows}
                        <Tr>
                            <Td></Td>
                            <Th isNumeric>Total</Th>
                            <Td isNumeric>{total}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Center>
        </Box>
    )
}

export default dynamic (() => Promise.resolve(StatewiseTable), {ssr: false})