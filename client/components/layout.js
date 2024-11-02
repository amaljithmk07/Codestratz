import React, { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import common from "@/styles/common.module.scss";
import localFont from "next/font/local"; // Import localFont

const PoppinsBlack = localFont({
  src: "../public/fonts/Poppins-Black.woff",
  variable: "--Poppins-Black",
});
const PoppinsBlackItalic = localFont({
  src: "../public/fonts/Poppins-BlackItalic.woff",
  variable: "--Poppins-BlackItalic",
});
const PoppinsBold = localFont({
  src: "../public/fonts/Poppins-Bold.woff",
  variable: "--Poppins-Bold",
});
const PoppinsThinItalic = localFont({
  src: "../public/fonts/Poppins-ThinItalic.woff",
  variable: "--Poppins-ThinItalic",
});
const PoppinsThin = localFont({
  src: "../public/fonts/Poppins-Thin.woff",
  variable: "--Poppins-Thin",
});
const PoppinsSemiBoldItalic = localFont({
  src: "../public/fonts/Poppins-SemiBoldItalic.woff",
  variable: "--Poppins-SemiBoldItalic",
});
const PoppinsRegular = localFont({
  src: "../public/fonts/Poppins-Regular.woff",
  variable: "--Poppins-Regular",
});
const PoppinsMediumItalic = localFont({
  src: "../public/fonts/Poppins-MediumItalic.woff",
  variable: "--Poppins-MediumItalic",
});

const PoppinsMedium = localFont({
  src: "../public/fonts/Poppins-Medium.woff",
  variable: "--Poppins-Medium",
});

export default function RootLayout({ children }) {
  // -------- Font Implementation End --------

  return (
    <React.Fragment>
      <Head>
        <title>Codestratz</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/play-button.png" />
      </Head>
      <Header />
      <main
        className={`  ${PoppinsBlack.variable} ${PoppinsBlackItalic.variable} 
          ${PoppinsBold.variable} ${PoppinsThinItalic.variable} ${PoppinsThin.variable}
           ${PoppinsSemiBoldItalic.variable} ${PoppinsRegular.variable} ${PoppinsMediumItalic.variable}
            ${PoppinsMedium.variable}  ${common.body} `}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
