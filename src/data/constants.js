import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe, FaTools, FaServer } from "react-icons/fa";
import { SiReact, SiNodedotjs } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { GiRocket } from "react-icons/gi";
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaCogs, FaEnvelope } from "react-icons/fa";
export const NAV_ITEMS = [
  { id: "hero", icon: FaHome, label: "Home" },
  { id: "about", icon: FaUser, label: "About" },
  { id: "resume", icon: FaFileAlt, label: "Resume" },
  { id: "portfolio", icon: FaBriefcase, label: "Portfolio" },
  { id: "services", icon: FaCogs, label: "Services" },
  { id: "contact", icon: FaEnvelope, label: "Contact" },
];
export const SKILLS = [
  { name: "HTML5", val: 90 },
  { name: "CSS3", val: 80 },
  { name: "JavaScript (ES6+)", val: 85 },
  { name: "React.js", val: 80 },
  { name: "Next.js", val: 60 },
  { name: "Tailwind CSS / Bootstrap", val: 65 },
  { name: "Node.js", val: 75 },
  { name: "Express.js", val: 75 },
  { name: "PHP", val: 85 },
  { name: "Laravel", val: 50 },
  { name: "MongoDB", val: 60 },
  { name: "MySQL", val: 75 },
  { name: "React Native", val: 55 },
  { name: "Git & GitHub", val: 70 },
  { name: "Linux Basics", val: 45 },
];
export const STATS = [
  { icon: "😊", num: 232, label: "Happy Clients" },
  { icon: "📓", num: 521, label: "Projects" },
  { icon: "🎧", num: 1453, label: "Hours Of Support" },
  { icon: "👥", num: 32, label: "Hard Workers" },
];
export const CATEGORY_TYPES = {
  ALL: "all",
  APP: "app",
  PRODUCT: "product",
  BRANDING: "branding",
  BOOKS: "books",
};
export const PORTFOLIO_ITEMS = [
  { id: 1, cat: CATEGORY_TYPES.APP, title: "App 1", desc: "Mobile app design & development", emoji: "📱" },
  { id: 2, cat: CATEGORY_TYPES.PRODUCT, title: "Product 1", desc: "Product design & branding", emoji: "🛍" },
  { id: 3, cat: CATEGORY_TYPES.BRANDING, title: "Branding 1", desc: "Corporate identity & logo", emoji: "✨" },
  { id: 4, cat: CATEGORY_TYPES.BOOKS, title: "Books 1", desc: "Editorial & print design", emoji: "📚" },
  { id: 5, cat: CATEGORY_TYPES.APP, title: "App 2", desc: "UI/UX for fintech app", emoji: "💳" },
  { id: 6, cat: CATEGORY_TYPES.PRODUCT, title: "Product 2", desc: "E-commerce product page", emoji: "🎁" },
  { id: 7, cat: CATEGORY_TYPES.BRANDING, title: "Branding 2", desc: "Brand refresh & guidelines", emoji: "🎨" },
  { id: 8, cat: CATEGORY_TYPES.BOOKS, title: "Books 2", desc: "Coffee table book layout", emoji: "📖" },
  { id: 9, cat: CATEGORY_TYPES.APP, title: "App 3", desc: "Dashboard interface design", emoji: "📊" },
]; 
export const PORTFOLIO_DETAILS = {
  1: {
    title: "App 1",
    cat: "app",
    client: "TechCorp Inc.",
    date: "15 March, 2024",
    url: "www.example.com",
    description:
      "A full-featured mobile application designed to streamline daily workflows. The project involved end-to-end UI/UX research, prototyping, and pixel-perfect implementation across iOS and Android. Special attention was paid to micro-interactions and accessibility standards.",
    images: ["📱", "🎨", "⚙️", "📊"],
  },
  2: {
    title: "Product 1",
    cat: "product",
    client: "Luxe Brands",
    date: "01 July, 2023",
    url: "www.luxebrands.com",
    description:
      "A premium product identity crafted for a luxury goods brand. The project encompassed packaging design, photography art direction, and e-commerce visual storytelling — resulting in a 28% uplift in online conversions.",
    images: ["🛍", "✨", "🎁", "📦"],
  },
  3: {
    title: "Branding 1",
    cat: "branding",
    client: "Nova Studio",
    date: "22 Jan, 2024",
    url: "www.novastudio.io",
    description:
      "Complete corporate identity from the ground up — logo system, color palette, typography hierarchy, brand voice guidelines, and a comprehensive style guide delivered for cross-team consistency.",
    images: ["✨", "🎨", "📐", "🖌"],
  },
  4: {
    title: "Books 1",
    cat: "books",
    client: "Meridian Press",
    date: "10 Sep, 2023",
    url: "www.meridianpress.com",
    description:
      "Editorial design for a series of three books — typesetting, grid systems, chapter openers, and cover design. The final layouts balanced readability with strong visual character unique to each title.",
    images: ["📚", "📖", "🖊", "📝"],
  },
  5: {
    title: "App 2",
    cat: "app",
    client: "FinPay",
    date: "03 Feb, 2024",
    url: "www.finpay.app",
    description:
      "UI/UX redesign for a fintech payment application handling millions of daily transactions. Focus areas included trust-building design patterns, simplified onboarding flows, and a robust design system scalable across 12 product teams.",
    images: ["💳", "📈", "🔐", "💰"],
  },
  6: {
    title: "Product 2",
    cat: "product",
    client: "GiftBox Co.",
    date: "20 Nov, 2023",
    url: "www.giftbox.co",
    description:
      "E-commerce product page redesign increasing average session duration by 45%. Custom illustrations, 3D render integration, and mobile-first interaction design were key deliverables.",
    images: ["🎁", "🛒", "📦", "🎀"],
  },
  7: {
    title: "Branding 2",
    cat: "branding",
    client: "Apexion",
    date: "14 Apr, 2024",
    url: "www.apexion.com",
    description:
      "Brand refresh for a growing SaaS company entering enterprise markets. Updated visual language to convey authority and innovation while retaining brand equity built over 6 years.",
    images: ["🎨", "🏢", "💼", "🔵"],
  },
  8: {
    title: "Books 2",
    cat: "books",
    client: "Atelier Publishing",
    date: "30 Jun, 2023",
    url: "www.atelierpub.com",
    description:
      "A coffee-table photobook celebrating contemporary architecture. The design language mirrors the subject — clean geometry, generous white space, and a monochromatic palette punctuated by bold image crops.",
    images: ["📖", "🏛", "📷", "🖼"],
  },
  9: {
    title: "App 3",
    cat: "app",
    client: "DataViz Labs",
    date: "08 Aug, 2024",
    url: "www.datavizlabs.com",
    description:
      "Dashboard interface for a B2B analytics platform. Complex data hierarchies were translated into intuitive, at-a-glance visualisations. Delivered as a fully documented Figma component library + React implementation.",
    images: ["📊", "📉", "🔭", "💡"],
  },
};
export const SERVICES = [
  {
    icon: FaGlobe,
    title: "Full Stack Web Development",
    desc: "Building scalable and high-performance web applications using MERN stack, Next.js, and Laravel."
  },
  {
    icon: SiReact,
    title: "Frontend Development",
    desc: "Creating responsive and modern user interfaces with React.js, Next.js, and clean UI/UX practices."
  },
  {
    icon: FaServer,
    title: "Backend Development",
    desc: "Developing secure and efficient APIs using Node.js, Express, and PHP Laravel with optimized database design."
  },
  {
    icon: MdPhoneIphone,
    title: "Mobile App Development",
    desc: "Building cross-platform mobile applications using React Native with smooth performance and user experience."
  },
  {
    icon: BiLinkAlt,
    title: "API Integration",
    desc: "Integrating third-party services, payment gateways, and RESTful APIs for seamless functionality."
  },
  {
    icon: GiRocket,
    title: "Deployment & DevOps",
    desc: "Deploying and managing applications on VPS servers with performance optimization and monitoring."
  },
];
export const TESTIMONIALS = [
  { initials: "SG", name: "Saul Goodman", role: "CEO & Founder", text: "Working with Alex transformed our brand entirely. The attention to detail and creative vision exceeded every expectation we had going into the project." },
  { initials: "SW", name: "Sara Wilsson", role: "Designer", text: "A rare talent who combines aesthetic sensibility with technical precision. Our collaboration produced work I'm genuinely proud to show clients." },
  { initials: "JK", name: "Jena Karlis", role: "Store Owner", text: "The redesign of our online store led to a 40% increase in conversions within the first month. Alex understands how design drives results." },
  { initials: "MB", name: "Matt Brandon", role: "Freelancer", text: "Professional, responsive, and deeply skilled. Alex consistently delivers work that feels both timeless and contemporary." },
  { initials: "JL", name: "John Larson", role: "Entrepreneur", text: "I've worked with many designers over the years — Alex stands out for the ability to translate complex ideas into clean, compelling visuals." },
];
export const socials = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/rahul-soni-353879195",
  },
  {
    icon: FaGithub,
    link: "https://github.com/Rahul4863",
  },
  {
    icon: FaXTwitter,
    link: "https://x.com/yourusername",
  },
  {
    icon: FaFacebook,
    link: "https://facebook.com/yourusername",
  },
  {
    icon: FaInstagram,
    link: "https://instagram.com/yourusername",
  },
];
