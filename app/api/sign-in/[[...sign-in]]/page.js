import { SignUp } from "@clerk/nextjs";
import { Box } from "@mui/material";

export default function signUp(){
    return( 
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
        <SignUp></SignUp>
    </Box>
    )
}
