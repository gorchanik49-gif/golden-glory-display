import { BookOpen, HeartHandshake, House, Users, BriefcaseBusiness, Globe, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import spiritual from '@/assets/spiritual-banner.png.asset.json';
import marriage from '@/assets/marriage-banner.png.asset.json';
import family from '@/assets/family-banner.png.asset.json';
import consultation from '@/assets/consultation-banner.png.asset.json';
export const name = 'پروفیسر عامل سلیمان شاہ';
export const phone = '0092 305 7739398';
export const whatsapp = 'https://wa.me/923057739398';
export const call = 'tel:+923057739398';
export const services = [
 { title:'استخارہ', titleEn:'Istikhara', description:'اہم فیصلوں میں قرآن و سنت کی روشنی میں رہنمائی۔', descriptionEn:'Guidance in important decisions in the light of the Quran and Sunnah.', icon:BookOpen },
 { title:'ازدواجی رہنمائی', titleEn:'Marriage Guidance', description:'ازدواجی معاملات میں مشاورت اور باہمی سمجھ بوجھ۔', descriptionEn:'Counselling and mutual understanding in marital matters.', icon:HeartHandshake },
 { title:'گھریلو مسائل', titleEn:'Family Matters', description:'گھریلو معاملات اور خاندانی اختلافات میں رہنمائی۔', descriptionEn:'Guidance in household affairs and family differences.', icon:House },
 { title:'رشتوں سے متعلق مشاورت', titleEn:'Relationship Counselling', description:'رشتوں اور شادی سے متعلق معاملات پر گفتگو۔', descriptionEn:'Discussion on relationships and marriage-related matters.', icon:Users },
 { title:'کاروباری معاملات میں رہنمائی', titleEn:'Business Guidance', description:'کاروبار اور روزگار کے اہم فیصلوں میں مشاورت۔', descriptionEn:'Counselling in important business and career decisions.', icon:BriefcaseBusiness },
 { title:'آن لائن مشاورت', titleEn:'Online Consultation', description:'فون اور واٹس ایپ کے ذریعے رابطہ اور مشاورت۔', descriptionEn:'Contact and consultation by phone or WhatsApp.', icon:Globe },
];
export const banners = [
 { image:spiritual, title:'اسلامی روحانی رہنمائی', label:'Spiritual guidance', description:'زندگی کے معاملات میں قرآن و سنت کی روشنی میں روحانی رہنمائی کے لیے رابطہ کریں۔' },
 { image:marriage, title:'استخارہ اور اہم فیصلے', label:'Istikhara & decisions', description:'شادی، رشتوں اور زندگی کے اہم فیصلوں میں استخارہ اور مشاورت حاصل کریں۔' },
 { image:family, title:'ازدواجی اور گھریلو مسائل', label:'Marriage & family', description:'ازدواجی اختلافات اور گھریلو مسائل پر اطمینان سے بات کریں اور رہنمائی حاصل کریں۔' },
 { image:consultation, title:'آن لائن روحانی مشاورت', label:'Online consultation', description:'اپنے معاملات پر آن لائن مشاورت کے لیے فون یا واٹس ایپ پر رابطہ کریں۔' },
];
export function pageHead(title:string, description:string) { return { meta:[{title:`${title} — Professor Aamil Suleman Shah`},{name:'description',content:description},{property:'og:title',content:`${title} — Professor Aamil Suleman Shah`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}] }; }
export function ContactActions({both=true}:{both?:boolean}) { return <div className="contact-actions"><Button variant="whatsapp" asChild><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle/><span className="urdu" lang="ur">WhatsApp پر رابطہ کریں</span></a></Button>{both && <Button variant="gold" asChild><a href={call}><Phone/><span className="urdu" lang="ur">ابھی کال کریں</span></a></Button>}</div>; }
export function SectionHeading({title,label,description}:{title:string;label:string;description?:string}) { return <div className="section-heading"><div className="eyebrow">{label}</div><h2 className="urdu" dir="rtl" lang="ur">{title}</h2>{description && <p className="urdu" dir="rtl" lang="ur">{description}</p>}<div className="ornament" aria-hidden="true">✧</div></div>; }
export function ServiceGrid() { return <div className="service-grid" dir="rtl">{services.map(({title,titleEn,description,descriptionEn,icon:Icon})=><article className="service-card" key={title}><Icon/><h3 className="urdu" lang="ur">{title}</h3><div className="service-en-title" dir="ltr" lang="en">{titleEn}</div><p className="urdu" lang="ur">{description}</p><p className="service-en-text" dir="ltr" lang="en">{descriptionEn}</p></article>)}</div>; }
export function AboutContent() { return <div className="about-content"><h2 className="urdu" lang="ur" dir="rtl">پروفیسر عامل سلیمان شاہ کے بارے میں</h2><p className="urdu" dir="rtl" lang="ur">اسلامی روحانی رہنمائی، استخارہ، ازدواجی اور گھریلو معاملات میں مشاورت کے لیے پروفیسر عامل سلیمان شاہ سے رابطہ کریں۔ اپنے معاملے پر گفتگو کے لیے فون یا واٹس ایپ کے ذریعے رابطہ کیا جا سکتا ہے۔</p><ContactActions/></div>; }
