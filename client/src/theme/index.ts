'use client';
import {Roboto} from 'next/font/google';
import {createTheme} from '@mui/material';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});
export const CustomTheme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});
