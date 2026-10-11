import { createFileRoute } from '@tanstack/react-router';
import { SiteShell } from '@/components/website/SiteShell';
import { SectionHeading, ServiceGrid, ContactActions, pageHead } from '@/components/website/content';
export const Route=createFileRoute('/services')({head:()=>pageHead('ہماری خدمات','استخارہ، ازدواجی رہنمائی، گھریلو مسائل اور آن لائن روحانی مشاورت کی خدمات۔'),component:Services});
function Services(){return <SiteShell><div className="site-width page-content"><SectionHeading title="ہماری خدمات" titleEn="Our Services" descriptionEn="Spiritual guidance on important life matters" label="Path to Guidance — راہِ رہنمائی" description="زندگی کے اہم معاملات میں روحانی رہنمائی"/><ServiceGrid/><div className="contact-details"><ContactActions/></div></div></SiteShell>;}
