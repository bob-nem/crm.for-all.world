import Contacts from './blocks/home/contacts'
import Footer from './blocks/home/footer'
import Head from 'next/head'

export default function Contact() {
    return (
        <div style={{ maxWidth: "120rem", margin: "0 auto" }}>
            <Head>
                <title>Business Optimization Mistakes</title>
                <meta name="description" content="ERP, CRM, WMS, MES, SCADA and others software integration in Bangladesh business." />
                <link rel="canonical" href="https://optimization.for-all.world/articles/implementation-errors" key="canonical" />
                <meta property="og:title" content="Business Optimization Mistakes" />
                <meta property="og:description" content="ERP, CRM, WMS, MES, SCADA and others software integration in Bangladesh business." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://optimization.for-all.world/articles/implementation-errors" />
                <meta property="og:image" content="https://optimization.for-all.world/images/opti.webp" />
                <meta property="og:image:alt" content="Production analysis to find optimization ways" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="bn_BD" />
            </Head>
            <Contacts />
            <Footer />
        </div>
    )
}