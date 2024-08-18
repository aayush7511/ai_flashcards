'use client'

import {React,useEffect} from "react"
import {loadStripe} from "@stripe/stripe-js"
import {AppBar, Button, Box, colors, Container, Toolbar, Typography} from "@mui/material";
import Head from "next/head";
import {SignIn} from "@clerk/nextjs";
import Link from "next/link";
import {red} from "@mui/material/colors"
import Grid from "@mui/material/Grid"



const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const white = red[50]


export default function Home() {


  return (
    <Container height='100vh'>
      <Head>
        <title>AI Flashcard SAAS</title>
        <meta name="description" content="Create flashcards with a text prompt"/>
      </Head>

      <AppBar position='static' sx={
        {display:"flex",
         p:4,
         flexDirection:"row",
         justifyContent: "space-between",
         alignItems:"center",
        }
      }>
        <Typography variant="h4">AI Flashcard SAAS</Typography>
        
        <Box display="flex" gap={4}>
          <Link href="/api/sign-in" underline="none" sx={{color:white}} >
            
            <Typography variant="h5">Login</Typography>
          </Link>

          <Link href="/api/sign-up" underline="none" sx={{color:white}}>
            Sign
            <Typography variant="h5">Sign Up</Typography>
          </Link>
        </Box>
      </AppBar>

      <Box display='flex' flexDirection={"column"} alignItems={"center"}>
        <Typography sx={{mt:3}} variant="h2">Welcome to AI flashcard SAAS</Typography>
        <Typography sx={{mt:4}} variant="h5">The easiest way to make flashcards with your text</Typography>
        
        <Button sx={{mt:2}} variant="contained">Get Started</Button>
      </Box>

      <Box sx={{mt:3}}>
        <Typography sx={{mb:4}}variant="h3">Features</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} >
            <Box>
              <Typography variant="h4">Easy Text Input</Typography> 
              {" "}
              <Typography variant="h6">Simply input your text and let our software do the rest. Making flashcards has never been easier!!</Typography>
            </Box>
          </Grid>
      
          <Grid item  xs={12} md={4} >
            <Box>
              <Typography variant="h4">Smart Flashcards</Typography> 
              {" "}
              <Typography variant="h6">Our AI intelligently breaks down your text into concide flashcards. Perfect for studying.</Typography>
            </Box>
          </Grid>
  
          <Grid item  xs={12} md={4} >
            <Box>
              <Typography variant="h4">Accessible Anywhere</Typography> 
              {" "}
              <Typography variant="h6">Access your flashcards from any device at any time. Study on the go with ease.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{mt:4}} alignContent="center" textAlign="center">
        <Typography variant="h3">Pricing</Typography>
      </Box>

    </Container>
  )
}
