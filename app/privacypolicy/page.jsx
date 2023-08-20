"use client";
import { Flex, Box, Text, Stack } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";

export default function PPpage() {
  return (
    <Flex direction='column' alignItems='center' p='40px' color='gray.100'>
      <Box m="auto" mt="30px" mb='50px'>
        <Text fontSize="4xl" as="b" color='yellow.400'>
          Our Privacy Policy
        </Text>
      </Box>
      <Box w='80vw'>
    <Text fontSize="xl" fontWeight="bold" mb="8px">1. Introduction:</Text>
    <Text ml="20px" mb="16px">
        Welcome to PixelBattles’ Privacy Policy. This policy outlines how we collect, use, and protect your personal information when you use our website and services. We value your privacy and are committed to ensuring the security of your information. By using PixelBattles, you agree to the terms outlined in this Privacy Policy.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">2. Information We Collect:</Text>
    <Text ml="20px" mb="16px">
        a. Personal Information: When you register an account or use our services, we collect personal information such as your name, email address, date of birth, and payment details. b. Usage Information: We gather information about your interactions with our website, including the games you play, competitions you participate in, and the devices you use. c. Cookies and Similar Technologies: We use cookies and similar technologies to collect data about your usage patterns, preferences, and browsing behavior.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">3. How We Use Your Information:</Text>
    <Text ml="20px" mb="16px">
        a. Provide Services: We use your personal information to provide and improve our services, process transactions, and enable competitions. b. Personalization: We personalize your experience based on your preferences, gaming history, and interactions with our platform. c. Communication: We may send you emails related to your account, competitions, promotions, and updates. d. Analytics: We analyze user behavior to improve our services, enhance user experience, and optimize our website’s performance.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">4. Data Sharing:</Text>
    <Text ml="20px" mb="16px">
        a. We may share your information with third parties such as payment processors, service providers, and partners necessary to operate our platform. b. We may disclose your information if required by law, legal process, or regulatory authorities.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">5. Data Security:</Text>
    <Text ml="20px" mb="16px">
        a. We implement technical and organizational measures to protect your information from unauthorized access, loss, misuse, or alteration. b. However, no data transmission over the internet or electronic storage is entirely secure. We cannot guarantee absolute security.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">6. Third-Party Links:</Text>
    <Text ml="20px" mb="16px">
        PixelBattles may contain links to third-party websites. We are not responsible for their privacy practices. Please review their policies before providing any personal information.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">7. Children’s Privacy:</Text>
    <Text ml="20px" mb="16px">
        Our services are not directed at children under the age of [insert minimum age according to local laws]. We do not knowingly collect information from children.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">8. Your Choices:</Text>
    <Text ml="20px" mb="16px">
        a. You can update and correct your account information at any time. b. You can opt out of receiving promotional emails by following the unsubscribe instructions provided in the email.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">9. Changes to Privacy Policy:</Text>
    <Text ml="20px" mb="16px">
        a. We may update this Privacy Policy from time to time. The updated version will be effective upon posting. b. Continued use of PixelBattles after changes implies your acceptance of the updated Privacy Policy.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">10. Contact Us:</Text>
    <Text ml="20px">
        If you have any questions, concerns, or requests regarding your personal information or this Privacy Policy, please contact us at [email address]. By using PixelBattles, you acknowledge that you have read, understood, and agreed to this Privacy Policy. If you do not agree with any part of this policy, you must refrain from using our website and services.
    </Text>
</Box>
    <Box w='95vw'> 
    <Footer/>
    </Box>
    </Flex>
  );
}
