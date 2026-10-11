import { createFileRoute } from '@tanstack/react-router';
import { SiteShell } from '@/components/website/SiteShell';
import { SectionHeading, AboutContent, pageHead } from '@/components/website/content';
export const Route=createFileRoute('/about')({head:()=>pageHead('ہمارے بارے میں','پروفیسر عامل سلیمان شاہ سے اسلامی روحانی رہنمائی اور آن لائن مشاورت کے بارے میں معلومات۔'),component:About});
function About(){return <SiteShell><div className="site-width page-content"><SectionHeading title="تعارف" label="About Professor Aamil Suleman Shah"/><AboutContent/></div></SiteShell>;}
