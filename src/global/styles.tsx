"use client"

import * as React from 'react';
import { green, grey, yellow } from '@mui/material/colors';

// important to remember the css.properties for type of css
import { CSS } from 'styled-components/dist/types';
import { SxProps } from '@mui/system';
import theme from '../global/theme'

interface Styles {
    root: SxProps,
    button: SxProps
    image: CSS.Properties
    tab: SxProps
    search: SxProps
    menu: SxProps
    menuFormControl: SxProps
    tabIndicatorProps: CSS.Properties
    footer: SxProps
    footerContent: SxProps
    source: SxProps
    newsLogo: CSS.Properties
    thumbLike: SxProps
    imageDetais: SxProps


}
let colors = {
    appBar: grey[400],
    footer: grey[500],
}
const styles: Styles = {
    image: {
        height: '5em', //em equal number times of current font size
        width: '5em',
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    button: {
        // background: green["100"],
        // color: yellow[900],

        display: { xs: 'none', sm: 'block' },
        padding: '1em'
    },
    tab: {
        color: 'black',
        fontWeight: 'bold'
    },
    search: {
        minWidth: { xs: "50%", s: "50%", md: "50%", lg: "25rem" },
        textAlign: 'center',

    },
    menu: {
        borderRadius: "1rem",
        padding: "1.5rem"

    },
    menuFormControl: {
        display: "flex",
        width: "100%",
        paddingBottom: "1rem",

    },
    tabIndicatorProps: { backgroundColor: "black", color: "black" },
    footer: {

        backgroundColor: colors.footer,
        height: "20rem",
        width: "100%",
    },
    footerContent: {
        textAlign: "left",
        marginTop: "5rem"
    },
    source: {
        display: "inline-block",

    },
    newsLogo: {
        marginRight: "1rem",
        height: '2em', //em equal number times of current font size
        width: '2em',
        borderRadius: "50%",
        display: "inline-block"

    },
    thumbLike: { fontSize: "2rem" },
    imageDetais: {
        objectFit: "fill",
        height: '30em', //em equal number times of current font size
        width: '70%', //em equal number times of

    }
}

export { styles }

// The sx prop is a shortcut for defining custom styles that has access to the theme



