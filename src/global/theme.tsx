"use client"; // This is a client component 👈🏽
import { createTheme } from "@mui/material";
import { grey, purple } from "@mui/material/colors";



export default createTheme({
    palette: {
        primary: {
            main: grey[400]
        },
    },
})