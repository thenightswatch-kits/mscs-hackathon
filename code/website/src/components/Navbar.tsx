import React, { ReactNode } from 'react';
import ChatBot from './ChatBot';
import { useRouter } from 'next/router';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Heading,
    Input,
    InputLeftElement,
    InputGroup

} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiMenu,
    FiBriefcase,
    FiUser,
} from 'react-icons/fi';
import {BsMailbox, BsBank} from 'react-icons/bs';

import {GoLaw} from 'react-icons/go';
import {BiNotepad} from 'react-icons/bi'
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface LinkItemProps {
    name: string;
    url: string;
    icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Dashboard', icon: FiHome, url: "/" },
    { name: 'Societies', icon: FiBriefcase, url: "/societies" },
    { name: 'Forms', icon: BiNotepad, url: "/forms" },
    { name: 'Acts', icon: GoLaw, url: "/acts" },
    { name: 'Banks', icon: BsBank, url: "/banks" },
    { name: 'Contact Us', icon: BsMailbox, url: "/contact" },
    { name: 'Account', icon: FiUser, url: "/account" },

];

export default function Navbar({
    children,
}: {
    children: ReactNode;
}) {
   
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="auto" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            {/* <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box> */}
            <ChatBot/>
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    const router = useRouter();
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">

                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} url={link.url} isActive={router.pathname === link.url}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    url: string
    icon: IconType,
    isActive: Boolean,
    children: ReactText;
}
const NavItem = ({ url, icon, isActive, children, ...rest }: NavItemProps) => {
    return (
        <Link href={url} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                bg={isActive ? '#DBDFFF' : undefined}
                color={isActive ? '#404A87' : undefined}
                fontWeight={isActive ? 'medium': 'normal'}
                _hover={{
                    bg: '#A1ACEF',
                    color: '#37375C',
                    opacity: '100%'
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: '#37375C',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'space-between' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />  
            <Box display={{base:'grid',md:'none'}}>
            <img src='https://mscs.dac.gov.in/images/MSCS_LOGO.png' width={'60px'} height={'60px'}></img>
            </Box>
            <HStack padding={'5'} display={{ base: 'none', md: 'flex' }}>
                <img src='https://mscs.dac.gov.in/images/MSCS_LOGO.png' width={'70px'} height={'70px'}></img>
                <Heading color={'#5A67BA'} size={'md'} display={{ base: 'none', md: 'flex' }}>MULTI-STATE CO-OPERATIVE SOCIETIES</Heading>
            </HStack>
            
            <HStack padding={'5'} display={{ base: 'flex', md: 'none' }}>

            </HStack>
            {/*
                 <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex></HStack> */}

        </Flex>
    );
};