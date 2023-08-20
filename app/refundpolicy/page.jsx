"use client";
import { Flex, Box, Text, Stack } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";

export default function Rpage() {
  return (
    <Flex direction="column" alignItems="center" p="40px">
      <Box m="auto" mt="30px" mb="50px">
        <Text fontSize="4xl" as="b" color="yellow.400">
          Cancellation and Refund Policy – PixelBattles:
        </Text>
      </Box>
      <Box w="80vw">
        <Text fontSize="xl" fontWeight="bold" mb="8px">
          Cancellation and Refund Policy:
        </Text>
        <Text>
          At PixelBattles, we understand that circumstances may arise that
          require cancellations or refunds. This policy outlines the terms and
          conditions under which cancellations and refunds are processed for our
          services. By using PixelBattles, you agree to comply with this policy.
        </Text>

        <Text fontSize="lg" fontWeight="bold" mb="8px" mt="16px">
          1. Cancellation of Competitions:
        </Text>
        <Text ml="20px" mb="16px">
          a. If a competition is canceled by PixelBattles due to technical
          issues, unforeseen circumstances, or any other reason, all
          participants will be notified, and entry fees will be automatically
          refunded.
        </Text>
        <Text ml="20px" mb="16px">
          b. If a competition does not have the minimum required number of
          participants, it may be canceled, and entry fees will be refunded.
        </Text>

        <Text fontSize="lg" fontWeight="bold" mb="8px" mt="16px">
          2. User-Requested Cancellations:
        </Text>
        <Text ml="20px" mb="16px">
          a. Users can request to cancel their participation in a competition
          before the competition’s start time.
        </Text>
        <Text ml="20px" mb="16px">
          b. If a user cancels their participation before the competition’s
          start time, the entry fee will be refunded to their account.
        </Text>

        <Text fontSize="lg" fontWeight="bold" mb="8px" mt="16px">
          3. Refunds:
        </Text>
        <Text ml="20px" mb="16px">
          a. Refunds for canceled competitions or user-requested cancellations
          will be processed back to the user’s PixelBattles account.
        </Text>
        <Text ml="20px" mb="16px">
          b. Refunds will be credited within [insert time frame, e.g., 3-5
          business days].
        </Text>
        <Text ml="20px" mb="16px">
          c. Refunds will be issued in the same currency as the original
          payment.
        </Text>

        <Text fontSize="lg" fontWeight="bold" mb="8px" mt="16px">
          4. No-Show Policy:
        </Text>
        <Text ml="20px" mb="16px">
          a. If a user fails to show up for a competition without canceling in
          advance, no refund will be issued.
        </Text>
        <Text ml="20px" mb="16px">
          b. In cases where a competition involves a participation fee, the fee
          will be forfeited if a user does not participate as scheduled.
        </Text>

        <Text fontSize="lg" fontWeight="bold" mb="8px" mt="16px">
          5. Disputes and Disqualifications:
        </Text>
        <Text ml="20px" mb="16px">
          a. If a user is disqualified from a competition due to a breach of our
          terms of use or fair play policies, no refund will be issued.
        </Text>
        <Text ml="20px" mb="16px">
          b. Disputes over competition results will be resolved according to our
          fair play policies, and refunds will be issued if appropriate.
        </Text>

        <Text fontSize="lg" fontWeight="bold" mb="8px" mt="16px">
          6. Exceptions:
        </Text>
        <Text ml="20px" mb="16px">
          a. In certain exceptional cases, such as technical errors causing
          incorrect results or unfair gameplay, refunds may be considered at the
          discretion of PixelBattles.
        </Text>

        <Text fontSize="lg" fontWeight="bold" mb="8px" mt="16px">
          7. Contacting Support:
        </Text>
        <Text ml="20px" mb="16px">
          If you believe you are entitled to a refund or have questions about
          our cancellation and refund policy, please contact our support team at
          [pixelbattles80@gmail.com](mailto: pixelbattles80@gmail.com).
        </Text>

        <Text mt="16px">
          Please note that while we strive to provide a seamless and fair
          experience, circumstances may vary, and decisions will be made based
          on the individual situation. PixelBattles reserves the right to
          update, modify, or change this policy at any time. Users are
          encouraged to review this policy periodically.
        </Text>

        <Text mt="16px">
          By using PixelBattles, you acknowledge that you have read, understood,
          and agreed to this Cancellation and Refund Policy. If you do not agree
          with any part of this policy, you must refrain from using our website
          and services.
        </Text>
      </Box>

      <Box w="95vw">
        <Footer />
      </Box>
    </Flex>
  );
}
