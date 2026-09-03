import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://brigadejeevansandhya.com'),
  title: 'Brigade Jeevan Sandhya | Luxury 3, 4 BHK Homes in Talaghattapura, Bangalore',
  description: "Brigade Jeevan Sandhya — A thoughtfully planned 8-acre landmark development in Talaghattapura, Bangalore by Brigade Group. Luxury 3 BHK and 4 BHK apartments in iconic G+47 towers.",
  alternates: {
    canonical: 'https://brigadejeevansandhya.com/',
  },
  openGraph: {
    title: 'Brigade Jeevan Sandhya | Luxury Integrated Development in Talaghattapura',
    description: "Discover luxury 3, 4 BHK apartments at Brigade Jeevan Sandhya, an integrated 8-acre landmark development in Talaghattapura, Bangalore.",
    url: 'https://brigadejeevansandhya.com/',
    siteName: 'Brigade Jeevan Sandhya',
    images: [
      {
        url: '/images/hero/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Brigade Jeevan Sandhya Talaghattapura Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brigade Jeevan Sandhya | Luxury 3, 4 BHK Homes in Talaghattapura',
    description: "A thoughtfully planned 8-acre landmark development in Talaghattapura, Bangalore by Brigade Group.",
    images: ['/images/hero/banner.webp'],
  },
  icons: {
    icon: '/images/favicon/fav.webp',
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Brigade Jeevan Sandhya Talaghattapura",
              "url": "https://brigadejeevansandhya.com/",
              "logo": "https://brigadejeevansandhya.com/images/logo/Logo.webp",
              "image": "https://brigadejeevansandhya.com/images/hero/banner.webp",
              "description": "Brigade Jeevan Sandhya, Bangalore's premier luxury integrated development in Talaghattapura offering 3, 4 BHK luxury residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Talaghattapura",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560109",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 3 Crore Onwards",
              "sameAs": [
                "https://brigadejeevansandhya.com"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
