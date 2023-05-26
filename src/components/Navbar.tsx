import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface NavMainLinkProps {
  name: string;
  href: string;
}

const NavMainLinks: NavMainLinkProps[] = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Program",
    href: "/program",
  },
  {
    name: "Venue",
    href: "/venue",
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
    name: "Contact",
    href: "/contact",
  },
];

const NavMainLink = ({
  mainLinkProps,
}: {
  mainLinkProps: NavMainLinkProps;
}) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"xl"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("blue.200", "blue.700"),
      }}
      href={mainLinkProps.href}
    >
      {mainLinkProps.name}
    </Link>
  );
};

export const MyNavbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link
            href={"/"}
            fontWeight={"bold"}
            fontSize={"lg"}
            _hover={{ textDecoration: "none" }}
          >
            ICCEPM 2024
          </Link>
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
            size={"lg"}
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
