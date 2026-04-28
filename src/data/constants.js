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
  { name: "HTML5", val: 95 },
  { name: "CSS3", val: 90 },
  { name: "JavaScript (ES6+)", val: 85 },
  { name: "React.js", val: 85 },
  { name: "Next.js", val: 80 },
  { name: "Tailwind CSS / Bootstrap", val: 85 },
  { name: "Node.js", val: 80 },
  { name: "Express.js", val: 80 },
  { name: "PHP", val: 85 },
  { name: "Laravel", val: 85 },
  { name: "MongoDB", val: 80 },
  { name: "MySQL", val: 85 },
  { name: "React Native", val: 55 },
  { name: "Git & GitHub", val: 85 },
  { name: "Linux Basics", val: 70 },
];
export const STATS = [
  { icon: "😊", num: 232, label: "Happy Clients" },
  { icon: "📓", num: 521, label: "Projects" },
  { icon: "🎧", num: 1453, label: "Hours Of Support" },
  { icon: "👥", num: 32, label: "Hard Workers" },
];

export const PORTFOLIO_ITEMS = [
  { id: 1, cat: "app", title: "App 1", desc: "Mobile app design & development", emoji: "📱" },
  { id: 2, cat: "product", title: "Product 1", desc: "Product design & branding", emoji: "🛍" },
  { id: 3, cat: "branding", title: "Branding 1", desc: "Corporate identity & logo", emoji: "✨" },
  { id: 4, cat: "books", title: "Books 1", desc: "Editorial & print design", emoji: "📚" },
  { id: 5, cat: "app", title: "App 2", desc: "UI/UX for fintech app", emoji: "💳" },
  { id: 6, cat: "product", title: "Product 2", desc: "E-commerce product page", emoji: "🎁" },
  { id: 7, cat: "branding", title: "Branding 2", desc: "Brand refresh & guidelines", emoji: "🎨" },
  { id: 8, cat: "books", title: "Books 2", desc: "Coffee table book layout", emoji: "📖" },
  { id: 9, cat: "app", title: "App 3", desc: "Dashboard interface design", emoji: "📊" },
];

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
