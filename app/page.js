'use client'

import {React,useEffect} from "react"
import {loadStripe} from "@stripe/stripe-js"
import { AppBar, Button, Box, colors, Container, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import { SignIn} from "@clerk/nextjs";
import Link from "next/link";
import {red} from "@mui/material/colors"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const white = red[50]


export default function Home() {


  return (
    <Container maxWidth='lg'>
      <Head>
        <title>AI Flashcard SAAS</title>
        <meta name="description" content="Create flashcards with a text prompt"/>
      </Head>

      <AppBar flexGr sx={
        {display:"flex",
         p:4,
         flexDirection:"row",
         justifyContent: "space-between",
         alignItems:"center",
        
        }
      }>
        <Typography variant="h4">AI Flashcard SAAS</Typography>
        
        <Box display="flex" gap={4}>
          <Link href="/api/sign-in" underline="none" sx={{color:{white}}} >
            <Typography variant="h5">Login</Typography>
          </Link>

          <Link href="/api/sign-up" underline="none" sx={{color:white}}>
            <Typography variant="h5">Sign Up</Typography>
          </Link>
        </Box>
 
      </AppBar>
    </Container>
  )
}
