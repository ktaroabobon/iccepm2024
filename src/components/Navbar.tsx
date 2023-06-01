import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure,
  VStack,
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
      size={"xl"}
      w={"100%"}
      textAlign={"center"}
    >
      {mainLinkProps.name}
    </Link>
  );
};

export const MyNavbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Box bg={"#FCFCFC"} px={4}>
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
              display={{ base: "none", lg: "flex" }}
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
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg={"#FCFCFC"}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>
                <DrawerCloseButton size={"lg"} />
              </DrawerHeader>

              <DrawerBody>
                <VStack>
                  {NavMainLinks.map((mainLinkProps, index) => (
                    <NavMainLink key={index} mainLinkProps={mainLinkProps} />
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </>
  );
};
