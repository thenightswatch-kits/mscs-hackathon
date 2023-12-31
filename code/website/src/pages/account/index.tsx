import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import { Grid, GridItem, Spacer, Text, Heading, AccordionPanel,Spinner, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Select, InputGroup, InputLeftAddon, Button, Accordion, AccordionButton, AccordionIcon, AccordionItem } from '@chakra-ui/react';
import firebase_app from '../../../firebase/config'
import { getAuth, } from 'firebase/auth'
import SignupCard from '@/components/SignUp'
const inter = Inter({ subsets: ['latin'] })
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    const auth = getAuth(firebase_app);
    const [user, setUser]: any = useState(null);
    const handleSignOut = async () => {
        try {
            await auth.signOut();
            // Optional: Perform any additional actions after signing out
        } catch (error) {
            // Handle sign out error
            console.log(error);
        }
    };


    useEffect(() => {
        // Check if a user is logged in
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                // If the user is not logged in, redirect to the login page
                router.push('/account/login');
            } else {
                setUser(user)
            }
        });

        // Clean up the event listener on unmount
        return () => unsubscribe();
    }, []);
    if (user) {
        return (
            <>
                <Head>
                    <title>Account</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="https://mscs.dac.gov.in/images/favicon.gif" />
                    <script src="//code.tidio.co/kdnuococyjb3hivo6vlv2bp68qztldvq.js" async></script>
                </Head>
                <main className={`${styles.main} ${inter.className}`}>
                    <Navbar children={undefined} />
                    <Box marginLeft={{ base: 0, md: 60 }} minHeight={'100vh'}>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} padding={10}>
                            <Heading size={'xl'} padding={10}>Welcome {user.email}</Heading>
                            <Button onClick={handleSignOut}>Sign Out</Button>
                        </Box>
                    </Box>
                    <Footer />
                </main>
            </>
        )
    } else {
        return <>
            <Head>
                <title>Account</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="https://mscs.dac.gov.in/images/favicon.gif" />
                <script src="//code.tidio.co/kdnuococyjb3hivo6vlv2bp68qztldvq.js" async></script>
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar children={undefined} />
                <Box marginLeft={{ base: 0, md: 60 }} minHeight={'100vh'}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} padding={10}>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    </Box>
                </Box>
                <Footer />
            </main>
        </>
    }

}
