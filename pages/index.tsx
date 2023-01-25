import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from 'pricingRoot/styles/Home.module.css'
import React from "react";
import {Box} from "@chakra-ui/react";
import {Pricing} from "pricingRoot/pages/components/Pricing";
import {Features} from "pricingRoot/pages/components/Features";
import {Header} from "pricingRoot/pages/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Pricing UI"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <Box textAlign="center" fontSize="xl">
          <Header/>
          <Pricing/>
          <Features/>
        </Box>
      </main>
    </>
  );
}
