import {
  AirVent,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Clock,
  Droplets,
  Hammer,
  Home,
  KeyRound,
  PlugZap,
  ShieldCheck,
  Wrench,
  Zap
} from "lucide-react";

export const brandName = "usahomeservices";
export const phone = "";
export const phoneHref = "";
export const hasPhone = Boolean(phone.trim());
export const email = "cyberbrandzup@gmail.com";

export const serviceOptions = [
  "Plumbing",
  "Emergency Services",
  "Roofing",
  "HVAC & Cooling",
  "Electrical Panels",
  "Locksmith Services",
  "Water Heater",
  "Home Maintenance"
];

export const services = [
  {
    slug: "plumbing",
    title: "Expert Plumbing",
    eyebrow: "EXPERT PLUMBING",
    icon: Droplets,
    description: "Comprehensive plumbing solutions from leak repairs to full system installations.",
    overview:
      "Our plumbing experts handle everything from minor drips to major pipe bursts. We use high-precision diagnostic tools to identify issues quickly and provide lasting repairs that protect your home's integrity and value.",
    benefits: ["Emergency Leak Repair", "Fixtures & Faucets", "Drain Cleaning", "Water Heater Service", "Pipe Relining", "Sewer Line Inspection"],
    standards: ["24/7 Emergency Support", "Licensed & Bonded Professionals", "Upfront Fixed Pricing", "Modern Diagnostic Equipment"],
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "roofing",
    title: "Premium Roofing",
    eyebrow: "PREMIUM ROOFING",
    icon: Home,
    description: "Quality roofing services including inspections, repairs, and complete replacements.",
    overview:
      "Your roof is your home's first line of defense. We provide elite roofing services using high-grade materials and expert craftsmanship to ensure your home remains safe, dry, and energy-efficient in any weather.",
    benefits: ["Full Roof Replacement", "Storm Damage Repair", "Regular Maintenance", "Gutter Installations", "Skylight Repair", "Flat Roof Specialists"],
    standards: ["Top-Quality Materials", "Lifetime Warranty Options", "Free Precision Estimates", "Safety-First Work Ethic"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "hvac",
    title: "HVAC & Cooling",
    eyebrow: "HVAC & COOLING",
    icon: AirVent,
    description: "Precision climate control with expert AC and heating system maintenance.",
    overview:
      "Maintain perfect comfort year-round with our premium HVAC services. We specialize in high-efficiency systems and proactive maintenance that reduces energy costs while extending your equipment's lifespan.",
    benefits: ["AC Repair & Install", "Heating System Maintenance", "Air Quality Testing", "Ductwork Cleaning", "Smart Thermostats", "Heat Pump Service"],
    standards: ["Energy Efficiency Focused", "NATE-Certified Technicians", "Multi-Point Inspections", "Quiet-Operation Priority"],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "maintenance",
    title: "Home Maintenance",
    eyebrow: "HOME MAINTENANCE",
    icon: Hammer,
    description: "Total home care packages designed to prevent issues before they start.",
    overview:
      "Protect your investment with our proactive home maintenance services. We handle the small tasks that keep your home running smoothly, preventing costly emergencies and maintaining your property's value over time.",
    benefits: ["Seasonal Inspections", "Drywall Repair", "Gutter Cleaning", "Pressure Washing", "Deck Maintenance", "Safety Checks"],
    standards: ["Scheduled Care Plans", "All-Trade Capability", "Detailed Status Reports", "Eco-Friendly Products"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "electrical",
    title: "Electrical Panels",
    eyebrow: "ELECTRICAL PANELS",
    icon: PlugZap,
    description: "Secure and modern electrical solutions for your home's power needs.",
    overview:
      "Safety and reliability are our top priorities for electrical work. Whether you're upgrading your panel or installing smart home features, our master electricians ensure code-compliant, high-performance results.",
    benefits: ["Panel Upgrades", "Circuit Diagnostics", "Smart Home Integration", "Lighting Design", "Outlet Installation", "Safety Audits"],
    standards: ["Code Compliance Assured", "Surge Protection Experts", "Clean Installation Goal", "Energy Monitoring Setup"],
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "emergencies",
    title: "24/7 Emergencies",
    eyebrow: "24/7 EMERGENCIES",
    icon: Zap,
    description: "Rapid response for water damage, storm issues, and urgent repairs.",
    overview:
      "When disaster strikes, usahomeservices is on the way. Our rapid response teams are equipped to handle urgent home emergencies, mitigating damage and starting the restoration process immediately.",
    benefits: ["Burst Pipe Cleanup", "Roof Leak Tarping", "Electrical Hazards", "Sewage Backup", "Storm Board-Up", "Structural Shoring"],
    standards: ["60-Min Target Arrival", "Equipped for Anything", "Damage Mitigation First", "Direct Insurance Billing"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "locksmith",
    title: "Locksmith Services",
    eyebrow: "LOCKSMITH SERVICES",
    icon: KeyRound,
    description: "Professional locksmith services for homes, businesses, and emergencies.",
    overview:
      "Locked out or need to upgrade your security? Our expert locksmiths provide fast, reliable, and secure solutions. From emergency lockouts to high-security installations, we ensure your safety with precision and care.",
    benefits: ["Emergency Lockout Service", "Lock Repair & Setting", "Key Duplication", "Smart Lock Installation", "Security Upgrades", "Safe Opening"],
    standards: ["Rapid Response", "Licensed Professionals", "Damage-Free Entry", "Advanced Security Options"],
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1400&q=80"
  }
];

export const jobs = [
  {
    title: "Inbound / Outbound Calling Agent for Home Services",
    rate: "$12-$35 per hour",
    hours: "30-45 hours per week",
    description: "Handle inbound and outbound homeowner calls, qualify service needs, and route prospects to the right team."
  },
  {
    title: "Appointment Setter for Home Services",
    rate: "$10-$28 per hour",
    hours: "30-45 hours per week",
    description: "Book qualified appointments, confirm customer details, and keep the service calendar moving smoothly."
  },
  {
    title: "Cold Calling Agent for Home Services",
    rate: "$12-$32 per hour",
    hours: "20-65 hours per week",
    description: "Reach new homeowners, introduce service offers, and build a consistent pipeline of quote requests."
  },
  {
    title: "Salesperson for Home Services",
    rate: "$15-$45 per hour",
    hours: "20-65 hours per week",
    description: "Consult with customers, present service options, close opportunities, and support long-term relationships."
  }
];

export const values = [
  { title: "Integrity", text: "Honest advice and transparent pricing on every job.", icon: ShieldCheck },
  { title: "Precision", text: "Meticulous attention to detail in every repair and installation.", icon: BadgeCheck },
  { title: "Care", text: "Treating your home with the same respect as if it were our own.", icon: Home },
  { title: "Reliability", text: "Showing up on time and delivering when we say we will.", icon: Clock }
];

export const stats = [
  { label: "Service Guarantee", value: "100%" },
  { label: "Emergency Support", value: "24/7" },
  { label: "Metro Service Area", value: "50mi" }
];

export const areas = ["Indianapolis", "Carmel", "Fishers", "Zionsville", "Noblesville", "Greenwood", "Avon", "Brownsburg", "Plainfield", "Westfield"];

export const quickFacts = [
  { title: "Licensed & Insured Team", icon: BadgeCheck },
  { title: "24/7 Emergency Response", icon: Zap },
  { title: "Local Home Specialists", icon: Building2 },
  { title: "Premium Tools & Standards", icon: Wrench },
  { title: "Remote Careers Available", icon: BriefcaseBusiness }
];
