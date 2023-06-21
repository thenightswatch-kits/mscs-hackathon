import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Grid, GridItem, Spacer, Text, Heading, Box, Tabs, TabList, Tab, TabPanels, TabPanel, Select, Button, Link, Container } from '@chakra-ui/react'
import Form1 from '../../components/Form1'
import Form2 from '../../components/Form2'
import Form3 from '../../components/Form3'
import Form4 from '../../components/Form4'
import Form5 from '../../components/Form5'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Forms</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar children={undefined} />
        <Box marginLeft={{ base: 0, md: 60 }} minHeight={'100vh'}><Tabs>
                    <TabList>
                        <Tab>Form I</Tab>
                        <Tab>Form II</Tab>
                        <Tab>Form III</Tab>
                        <Tab>Form IV</Tab>
                        <Tab>Form V</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                        <Form1/>
                        </TabPanel>
                        <TabPanel>
                        <Form2/>
                        </TabPanel>
                        <TabPanel>
                          <Form3/>
                        </TabPanel>
                        <TabPanel>
                          <Form4/>
                        </TabPanel>
                        <TabPanel>
                          <Form5/>
                        </TabPanel>
                    </TabPanels>
                </Tabs></Box>
        <Footer />
      </main>
    </>
  )
}
