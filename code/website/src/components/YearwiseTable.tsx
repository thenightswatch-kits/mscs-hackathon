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
} from '@chakra-ui/react'

import json from '../data/data'
import states from '../data/states'

function YearwiseTable() {
    const [filter_data, setFData] = useState<any>(json)
    const yearCount = {};
    var total = 0;

    const handleFilter = (state) => {console.log(state);
        setFData(json.filter((item: any) => {
            const stateMatch = state === "All" || item.state === state;
            return stateMatch;
        }))
    }

    filter_data.forEach(data => {
        const registrationDate = data.data_of_registration;

        if (registrationDate) {
            const year = registrationDate.split('/')[2]; // Extract the year from the date

            if (yearCount.hasOwnProperty(year)) {
                yearCount[year]++;
                total++;
            } else {
                yearCount[year] = 1;
                total++;
            }
        }
    });

    for (const year in yearCount) {
        console.log(`Year ${year}: ${yearCount[year]}`);
    }

    var sno = 1;

    const tableRows = Object.entries(yearCount).map(([year, count]) => (
        <Tr key={year}>
            <Td>{sno++}</Td>
            <Td>{year}</Td>
            <Td isNumeric>{count}</Td>
        </Tr>
    ));

    return (
        <>
            <Box width={'70%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                <Text>State: </Text>
                <Select defaultValue={'All'} width={"50%"} padding={2} onChange={(e) => {handleFilter(e.target.value)}}>   
                    <option value='All'>All</option>
                    {states.map(e => {
                        return <option value={e}>{e}</option>
                    })}
                </Select>
            </Box>
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
                                <Td>Total</Td>
                                <Td isNumeric>{total}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Center>
            </Box>
        </>
    )
}

export default dynamic (() => Promise.resolve(YearwiseTable), {ssr: false})