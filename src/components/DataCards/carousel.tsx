"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { DataGrid } from './DataGrid';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { GnewsRes } from '../../global/GnewsApi/gnewsResponse';



export default function Carousel({ posts }: { posts: GnewsRes[] }) {
    const steps = posts
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [stop, setStop] = React.useState(false);
    const maxSteps = steps?.length || 1;

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevActiveStep) => prevActiveStep == maxSteps - 1 ? 0 : prevActiveStep + 1);
        }, 5000);
        // clearInterval(interval);
        // if (stop) clearInterval(interval);
    }, [])
    // autoPlay()
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleStop = () => {
        setStop((prevActiveStep) => true);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', display: { xs: 'none', md: 'grid', lg: "grid" } }}
        >
            {/* <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography>{steps[activeStep].label}</Typography>
            </Paper> */}
            <Grid container spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>

                <DataGrid xs="none" sm="none" md={12} post={steps[activeStep]} key={steps[activeStep].url} lg={12} height="500rem" />

                <MobileStepper
                    sx={{ minWidth: "100%" }}
                    variant='dots'
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                            color='info'
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}
                            color='info'
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />


            </Grid>
        </Box>
    );
}