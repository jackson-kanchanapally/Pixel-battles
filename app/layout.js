"use client";
import { AuthContextProvider } from "./context/AuthContext";
import { CacheProvider } from "@chakra-ui/next-js";
import "@fontsource/roboto-condensed";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const inter = Inter({ subsets: ["latin"], weight: "400" });
const theme = extendTheme({
  styles: {
    global: {
      body: {
        //bg: "#1A202C", // Replace with your desired background color
        bg: "black",
        // color:'gray.100'
      },
    },
  },
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <AuthContextProvider>{children}</AuthContextProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
