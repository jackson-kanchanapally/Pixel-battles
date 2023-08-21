"use client";
// import { AuthContextProvider } from "../context/AuthContext";
import AuthWrapper from "@/src/components/AuthWrapper";

export default function Layout({ children }) {
  return <AuthWrapper >{children}</AuthWrapper>;
}
