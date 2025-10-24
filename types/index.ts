export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  category: 'personal' | 'business' | 'premium';
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  consent: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'client' | 'admin';
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'encryption' | 'authentication' | 'monitoring' | 'compliance';
}

export interface ComplianceStandard {
  id: string;
  name: string;
  description: string;
  status: 'certified' | 'in-progress' | 'planned';
  validUntil?: string;
}
