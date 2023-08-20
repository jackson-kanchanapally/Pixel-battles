"use client";
import { Flex, Box, Text, Stack } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";

export default function Tpage() {
  return (
    <Flex direction='column' alignItems='center' p='40px' color='gray.100'>
      <Box m="auto" mt="30px" mb='50px'>
        <Text fontSize="4xl" as="b" color='yellow.400'> 
          Terms & Conditions
        </Text>
      </Box>
      <Box w={["80vw","60vw"]}>
    <Text fontSize="xl" fontWeight="bold" mb="8px">1. Introduction:</Text>
    <Text ml="20px" mb="16px" >
        Welcome to PixelBattles! These Terms and Conditions govern your use of our website and services. By accessing or using PixelBattles, you agree to comply with these terms. Please read them carefully before participating in any competitions, placing bets, or using our services.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">2. Eligibility:</Text>
    <Text ml="20px" mb="16px">
        a. You must be of legal age to participate in real-money gaming in your jurisdiction.
        <br/>
         b. Residents of certain jurisdictions may be restricted from using our services. It is your responsibility to comply with local laws and regulations.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">3. Account Registration:</Text>
    <Text ml="20px" mb="16px">
        a. You agree to provide accurate and complete information during registration.
        <br/>
         b. You are responsible for maintaining the confidentiality of your account information.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">4. User Conduct:</Text>
    <Text ml="20px" mb="16px">
        a. You are solely responsible for your actions on PixelBattles.
        <br/>
         b. You must not engage in any fraudulent, illegal, or unethical activities on our platform.
        <br/>
         c. You must respect the rights and privacy of other users.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">5. Payments and Withdrawals:</Text>
    <Text ml="20px" mb="16px">
        a. Users may deposit funds into their accounts to participate in competitions.
        <br/>
         b. PixelBattles takes a commission from each competition&rsquo;s prize pool.
        <br/>
         c. Withdrawals are subject to processing times and verification procedures.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">6. Competitions and Betting:</Text>
    <Text ml="20px" mb="16px">
        a. PixelBattles hosts competitive gaming events where players can win real money.
        <br/>
         b. Results of competitions are final and binding.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">7. Fair Play:</Text>
    <Text ml="20px" mb="16px">
        a. Cheating, exploiting, or using any unfair advantage is strictly prohibited.
        <br/>
         b. Any suspicious activity may result in account suspension or termination.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">8. Intellectual Property:</Text>
    <Text ml="20px" mb="16px">
        a. All content and trademarks on PixelBattles are owned or licensed by us.
        <br/>
        b. Users must not use, copy, or distribute any content without our permission.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">9. Disclaimer of Warranty:</Text>
    <Text ml="20px" mb="16px">
        a. PixelBattles provides services &ldquo;as is&ldquo; without any warranties.
        <br/>
         b. We do not guarantee continuous, error-free, or secure access to our website.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">10. Limitation of Liability:</Text>
    <Text ml="20px" mb="16px">
        a. PixelBattles is not liable for any direct, indirect, or consequential damages.
        <br/>
         b. Our liability is limited to the amount you deposited on the platform.
        <br/>
         c. PixelBattles shall not be held responsible for any losses, damages, or injuries incurred by users while using our website or participating in competitions.
        <br/>
         d. By using PixelBattles, you acknowledge and agree that you participate at your own risk, and you assume full responsibility for any consequences that may arise from such participation.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">11. Termination:</Text>
    <Text ml="20px" mb="16px">
        a. We reserve the right to suspend or terminate accounts for violations of these terms.
        <br/>
         b. You may terminate your account at any time by following the appropriate procedures.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mb="8px">12. Changes to Terms and Conditions:</Text>
    <Text ml="20px" mb="16px">
        a. We may update these terms from time to time, and the updated version will be effective upon posting.
        <br/>
        b. Continued use of PixelBattles after changes implies your acceptance of the updated terms.
    </Text>

    <Text mt="16px">
        By using PixelBattles, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you do not agree with any part of these terms, you must refrain from using our website and services.
    </Text>
</Box>

    <Box w='95vw'> 
    <Footer/>
    </Box>
    </Flex>
  );
}

