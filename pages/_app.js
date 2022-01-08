import '../styles/globals.css';
import Navigation from '../components/navigation';
import Head from 'next/head'

const schemaData =
{
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "optimization.for-all.world",
  alternateName: "Corporate processes optimization",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nasir Trade Center, 89 Bir Uttam, CR Dutta Rd",
    addressLocality: "Dhaka",
    addressRegion: "Bangladesh",
    postalCode: "1205"
  },
  telephone: " +8801756995889",
  knowsAbout: ["Customer relationship management", "Enterprice resource planning"]
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="msvalidate.01" content="31C5EF35E8C13C543F85A9FF9C477704" />
        <link
          rel="preload"
          href="/fonts/Righteous-Regular.ttf" //first headers font
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.ttf" //second headers font
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Lato-Regular.ttf" //main paragraph font
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </>
  )
}

export default MyApp
