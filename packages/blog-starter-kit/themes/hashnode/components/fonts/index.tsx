import {Inter } from 'next/font/google';

// Configure Inter Font with required settings
const inter = Inter({
  subsets: ['latin'], // Load only the Latin character set
  variable: '--font-inter', // Define a CSS variable for the font
  display: 'swap', // Use swap for better UX
});


const variableConstant = 'variable';
const fontInterVar = inter.variable.replace(variableConstant, 'Inter');


export const GlobalFontVariables = () => (
  <style jsx global>{`
    html {
      --font-inter: ${fontInterVar};

    }
  `}</style>
);
