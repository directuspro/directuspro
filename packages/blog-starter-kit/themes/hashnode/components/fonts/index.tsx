import {Sofia_Sans } from 'next/font/google';

// Configure Sofia Sans with required settings
const sofiaSans = Sofia_Sans({
  subsets: ['latin'], // Load only the Latin character set
  variable: '--font-sofia', // Define a CSS variable for the font
  display: 'swap', // Use swap for better UX
});


const variableConstant = 'variable';
const fontSofiaVar = sofiaSans.variable.replace(variableConstant, 'Sofia_Sans');


export const GlobalFontVariables = () => (
  <style jsx global>{`
    html {
      --font-sofia: ${fontSofiaVar};

    }
  `}</style>
);
