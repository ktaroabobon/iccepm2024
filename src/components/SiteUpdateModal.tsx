import React from "react";
import {
  Button,
  Divider,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

interface UpdateInfoByTab {
  tab: string;
  updateInfo: string;
}

const UpdateInfoByTab: UpdateInfoByTab[] = [
  {
    tab: "ABOUT",
    updateInfo:
      "ICCEPM Consortium\n" +
      " \n" +
      "The International Consortium of Construction Engineering and Project Management (ICCEPM) has been reformulated in 2021 on the basis of continued collaborative efforts for ICCEPM conferences since 2005.\n" +
      "\n" +
      "ICCEPM is a global academic society committed to promoting advancement in the area of construction engineering and project management. ICCEPM aims to establish a knowledge base for the area, accurately forecast future technology demands, improve industry practices, and facilitate knowledge transfer in the field of construction management through international collaboration.\n" +
      " \n" +
      "The co-presidents of ICCEPM, professor Youngsoo Jung of Myongji University and professor Heng Li of Hong Kong Polytechnic University, are honored and grateful to have Japan as our host for 2024! \n" +
      " \n" +
      "Please visit our website at https://www.iccepm.org/ for further information about the consortium. \n" +
      "\n" +
      "\n" +
      "Conference Organizers: Conference chairs to be announced soon.\n" +
      "\n" +
      "Technical Committee: Technical committee chairs to be announced soon.\n" +
      "\n" +
      "List of academic paper reviewers - total 80 number of prominent academics and scholars worldwide to be announced soon.\n",
  },
  {
    tab: "PROGRAM",
    updateInfo: "No Updates",
  },
  {
    tab: "VENUE",
    updateInfo: "No Updates",
  },
  {
    tab: "PROCEEDINGS",
    updateInfo:
      "No updates.\n" +
      "Proceeding details to be uploaded prior to the conference in 2024.\n",
  },
  {
    tab: "SUBMISSION",
    updateInfo:
      "Submitted papers will be given the option of publishing their full paper on KICEM’s official journal, the Korean Journal of Construction Engineering and Management (KJCEM). The best papers selected from the conference will be given benefits, including partial discount of processing charges and fast tracking of the publication process. \n" +
      "The journal is in the process of being indexed on SCOPUS in the near future. \n" +
      "Please visit https://www.kicem.or.kr/eng/ for further information.\n" +
      "\n" +
      "Templates: Templates, and copyright transfer agreement to be uploaded soon.\n" +
      "These documents are required to be used for submission and presentation.\n",
  },
  {
    tab: "CONTACT",
    updateInfo: "No Updates",
  },
  {
    tab: "REGISTRATION",
    updateInfo:
      "We have updated the registration fee as below, which now includes the dinner banquet, package lunch and post-conference excursion. Early registration is strongly recommended as some of the activities may be limited to capacity.\n" +
      "\n" +
      "Registration Fee\n" +
      "                    CATEGORY                             FEE (YEN)                           \n" +
      "                     Regular                                    80,000                                                   \n" +
      "                     Early Bird                                 60,000\n" +
      "                     Student                                    50,000\n" +
      "\n" +
      "Information\n" +
      "DETAILS\n" +
      "・Deadline is Apr 20 2024\n" +
      "・Access to all academic paper presentations and business seminars&workshops included.\n" +
      "・Dinner banquet on the 3rd day to be included, subject to capacity.\n" +
      "・Post-conference excursion on the 4th day to be included, subject to capacity.\n" +
      "・Package lunch to be included. \n" +
      "         There are also two dining facilities within Hokkaido University.\n" +
      "　　Memorial center: 30 seats, 5 minutes-walk from Conference Hall\n" +
      "　　University main dining hall: 500 seats, 10 minutes-walk from Conference Hall\n" +
      "・Hotel fee is not included.\n" +
      "\n" +
      "REGISTGRATION NOW:   Link to Easy Chair conference system to be provided by early September 2023.\n",
  },
];

const ModalContents = () => {
  return (
    <>
      {/*UpdateInfoByTabの内容をforループを用いて書き出す*/}
      {UpdateInfoByTab.map((info, index) => (
        <VStack key={index} my={4}>
          <Text
            as={"b"}
            fontSize={"xl"}
            mb={2}
            color={"red"}
            width={"100%"}
            style={{ whiteSpace: "pre-line", textAlign: "left" }}
          >
            Tab: {info.tab}
          </Text>
          <Text
            fontSize="md"
            mb={3}
            width={"100%"}
            style={{ whiteSpace: "pre-line", textAlign: "left" }}
          >
            {info.updateInfo}
          </Text>
          <Divider />
        </VStack>
      ))}
    </>
  );
};

export const SiteUpdateModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme={"red"}>
        Page Updates
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading as={"h3"} color={"red"}>
              IMPORTANT UPDATES
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalContents />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
