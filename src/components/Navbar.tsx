import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface NavMainLinkProps {
  name: string;
  href: string;
  suvLinks?: NavSubLinkProps[];
}

interface NavSubLinkProps {
  name: string;
  href: string;
}

const NavMainLinks: NavMainLinkProps[] = [
  {
    name: "About",
    href: "/about",
    suvLinks: [
      {
        name: "Conference Organizers",
        href: "/about/conference-organizers",
      },
      {
        name: "Technical Committee",
        href: "/about/technical-committee",
      },
      {
        name: "Sponsors and Supporters",
        href: "/about/sponsors",
      },
    ],
  },
  {
    name: "Program",
    href: "/program",
    suvLinks: [
      {
        name: "Keynote Speakers",
        href: "/program/keynote-speakers",
      },
      {
        name: "Detailed Schedule",
        href: "/program/detailed-schedule",
      },
      {
        name: "Business Seminars and Workshops",
        href: "/program/business-seminars-and-workshops",
      },
    ],
  },
  {
    name: "Proceedings",
    href: "/proceedings",
  },
  {
    name: "Submission",
    href: "/submission",
  },
  {
    name: "Registration",
    href: "/registration",
  },
  {
    name: "Venue",
    href: "/venue",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavMainLink = ({
  mainLinkProps,
}: {
  mainLinkProps: NavMainLinkProps;
}) => {
  if (mainLinkProps.suvLinks && mainLinkProps.suvLinks.length > 0) {
    return (
      <Menu>
        <MenuButton
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
        >
          {mainLinkProps.name}
          <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          {mainLinkProps.suvLinks.map(
            (subLinkProps: NavSubLinkProps, index) => (
              <MenuItem key={index}>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  href={subLinkProps.href}
                >
                  {subLinkProps.name}
                </Link>
              </MenuItem>
            )
          )}
        </MenuList>
      </Menu>
    );
  } else {
    return (
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={mainLinkProps.href}
      >
        {mainLinkProps.name}
      </Link>
    );
  }
};

export const MyNavbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {NavMainLinks.map((mainLinkProps, index) => (
                <NavMainLink key={index} mainLinkProps={mainLinkProps} />
              ))}
            </HStack>
          </HStack>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {NavMainLinks.map((mainLinkProps, index) => (
                <NavMainLink key={index} mainLinkProps={mainLinkProps} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
