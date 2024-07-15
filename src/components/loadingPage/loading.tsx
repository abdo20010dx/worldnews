"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function Loading() {
    return (
        <Box sx={{ marginTop: "5rem", height: "10rem", overflow: 'hidden', px: 3 }}>
            <StyledPaper
                sx={{
                    my: 1,
                    mx: 'auto',
                    p: 2,
                }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs zeroMinWidth textAlign={'center'}>
                        <CircularProgress />
                    </Grid>
                </Grid>
            </StyledPaper>
        </Box>
    );
}