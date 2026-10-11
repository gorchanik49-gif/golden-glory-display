import { createFileRoute } from '@tanstack/react-router';
import { SiteShell } from '@/components/website/SiteShell';
import { SectionHeading, ContactActions, name, phone, call, pageHead } from '@/components/website/content';
export const Route=createFileRoute('/contact')({head:()=>pageHead('رابطہ کریں','پروفیسر عامل سلیمان شاہ سے فون 0092 305 7739398 یا واٹس ایپ کے ذریعے روحانی مشاورت کے لیے رابطہ کریں۔'),component:Contact});
function Contact(){return <SiteShell><div className="site-width page-content"><SectionHeading title="رابطہ کریں" label="Get in touch" description="اپنے معاملے پر مشاورت کے لیے رابطہ کریں"/><div className="contact-details"><h2 className="urdu" lang="ur" dir="rtl">{name}</h2><a href={call} className="contact-number" dir="ltr">{phone}</a><ContactActions/></div></div></SiteShell>;}
