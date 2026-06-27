import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Globe, Shield, Users, BarChart3, Settings, CheckCircle,
  Star, ChevronRight, Play, Briefcase, Award, Clock, TrendingUp,
  MapPin, Phone, Mail, Building2, Layers
} from 'lucide-react'
import { Section, SectionHead, ServiceCard, Stat, CTABanner } from '../components/ui/index.jsx'

const SERVICES = [
  { icon: BarChart3, title: 'Payroll Management', description: 'End-to-end payroll processing, salary computations, payslip generation, and multi-country disbursement management.', href: '/services/payroll-management' },
  { icon: Users, title: 'HR Operations', description: 'Workforce administration, onboarding, offboarding, leave management, and employee lifecycle support.', href: '/services/hr-operations' },
  { icon: Shield, title: 'Compliance Support', description: 'Statutory filings, EPF, ESIC, TDS, PT, and country-specific regulatory compliance management.', href: '/services/compliance-support' },
  { icon: Briefcase, title: 'Advisory Services', description: 'Strategic HR consulting, policy development, CTC structuring, and workforce planning guidance.', href: '/services/advisory-services' },
  { icon: Settings, title: 'System Implementation', description: 'HRIS setup, UAT coordination, go-live support, and payroll system integrations.', href: '/services/system-implementation' },
]

const COUNTRIES = [
  { flag: '🇮🇳', name: 'India', desc: 'EPF · ESIC · TDS · PT · LWF', href: '/countries/india' },
  { flag: '🇦🇪', name: 'UAE', desc: 'WPS · EOSB · Gratuity', href: '/countries/uae' },
  { flag: '🇸🇬', name: 'Singapore', desc: 'CPF · SDL · IR8A · SHG', href: '/countries/singapore' },
  { flag: '🇵🇭', name: 'Philippines', desc: 'SSS · PhilHealth · Pag-IBIG', href: '/countries/philippines' },
  { flag: '🇬🇧', name: 'United Kingdom', desc: 'PAYE · NI · Auto-enrolment', href: '/countries/uk' },
  { flag: '🇺🇸', name: 'United States', desc: 'Federal & State Payroll Tax', href: '/countries/usa' },
]

const TESTIMONIALS = [
  { name: 'Priya Sharma', role: 'Head of HR, TechCorp India', text: 'Athnav transformed our multi-country payroll from a headache into a seamless process. Their India compliance expertise is unmatched.' },
  { name: 'Ahmed Al Rashid', role: 'Finance Director, Dubai Ventures', text: 'The WPS compliance and EOSB calculations have been flawless. Athnav understands UAE labour law inside out.' },
  { name: 'Sarah Chen', role: 'People Ops Lead, SG Startup', text: 'CPF submissions and IR8A filings are now handled effortlessly. Highly recommend their Singapore payroll service.' },
]

const WHY = [
  { icon: Globe, title: '6 Countries, 1 Partner', description: 'One team managing all your global payroll, reducing vendor complexity and communication overhead.' },
  { icon: Shield, title: 'Compliance-First Approach', description: 'Statutory accuracy is our baseline, not a premium add-on. Every run is compliance-verified.' },
  { icon: Clock, title: 'On-Time, Every Time', description: 'Our payroll calendar adherence rate is 99.8%, ensuring employees are paid accurately and on schedule.' },
  { icon: TrendingUp, title: 'Scale with Confidence', description: 'From 10 to 10,000 employees — our processes scale without compromising quality or compliance.' },
]

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] hero-gradient mesh-overlay flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue/10 border border-blue/20 rounded-full px-4 py-1.5 text-white text-sm mb-6">
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"/>
            Trusted by 150+ businesses across 6 countries
          </div>
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
            Simplify Your<br/>
            <span className="text-brand-gold italic">Global Payroll</span><br/>
            & HR Operations
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
            Expert payroll processing, HR administration, and statutory compliance across India, UAE, Singapore, Philippines, UK, and USA — managed by one trusted partner.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary bg-brand-gold text-brand-navy hover:bg-yellow-400 px-7 py-3.5 text-base font-semibold">
              Get Started <ArrowRight size={18}/>
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-lg text-base font-medium hover:bg-white/10 transition-all">
              Our Services
            </Link>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-10 text-white/60 text-sm">
            <div className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-gold"/><span>DPIIT Registered Startup</span></div>
            <div className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-gold"/><span>ISO Compliant Processes</span></div>
            <div className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-gold"/><span>15+ Years Experience</span></div>
          </div>
        </div>

        {/* Right — floating stats card */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: '150+', label: 'Business Solutions' },
                { val: '200+', label: 'Workforce Solutions' },
                { val: '98%', label: 'Client Satisfaction' },
                { val: '15+', label: 'Years Experience' },
              ].map(s => (
                <div key={s.label} className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="font-display text-3xl font-bold text-brand-gold">{s.val}</div>
                  <div className="text-sm text-blue-100 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Countries covered */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white">
            <p className="text-xs uppercase tracking-widest text-blue-200 mb-3">Countries Covered</p>
            <div className="flex flex-wrap gap-2">
              {COUNTRIES.map(c => (
                <Link key={c.name} to={c.href}
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full px-3 py-1.5 text-sm transition-colors">
                  <span>{c.flag}</span><span>{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <Section>
      <SectionHead tag="What We Do" title="Comprehensive HR & Payroll Services" subtitle="From payroll processing to compliance, we handle the complexity so your team can focus on growth." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map(s => <ServiceCard key={s.title} {...s} />)}
        {/* All services CTA card */}
        <Link to="/services" className="card p-6 flex flex-col items-center justify-center gap-3 text-center bg-brand-navy text-white group hover:bg-brand-blue">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
            <Layers size={22} className="text-brand-gold"/>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">View All Services</h3>
            <p className="text-sm text-blue-200">Explore our complete suite of HR and payroll solutions</p>
          </div>
          <div className="flex items-center gap-1 text-brand-gold text-sm font-medium">
            Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
          </div>
        </Link>
      </div>
    </Section>
  )
}

function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div className="relative">
          <div className="bg-brand-navy rounded-3xl p-8 text-white">
            <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">Our Mission</p>
            <h3 className="font-display text-2xl mb-4">We work as your extended HR & payroll team</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">ATHNAV supports organizations in managing payroll, HR operations, compliance, and workforce administration across geographies through reliable, process-driven execution.</p>
            <div className="space-y-3">
              {['Global Payroll Management','HR Operations & Administration','Compliance & Workforce Support','Employee Benefits Management','HR Consulting & Business Support'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={14} className="text-brand-gold flex-shrink-0"/>
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                <Award size={18} className="text-brand-gold"/>
              </div>
              <div>
                <div className="font-bold text-brand-navy text-lg leading-none">98%</div>
                <div className="text-xs text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="section-tag">Why Athnav</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-5">The value behind our partnership</h2>
          <p className="text-gray-500 leading-relaxed mb-8">Our partnership goes beyond delivering services — it's about building trust, understanding your business needs, and supporting long-term operational success. We combine operational expertise with strategic workforce management.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {WHY.map(w => (
              <div key={w.title} className="flex gap-3">
                <div className="flex-shrink-0 w-9 h-9 bg-brand-light rounded-lg flex items-center justify-center">
                  <w.icon size={16} className="text-brand-accent"/>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-navy mb-0.5">{w.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-primary">Learn About Athnav <ArrowRight size={16}/></Link>
        </div>
      </div>
    </section>
  )
}

function CountriesSection() {
  return (
    <Section>
      <SectionHead tag="Global Reach" title="Payroll Across 6 Countries" subtitle="Local expertise, global delivery. We manage country-specific statutory compliance and payroll regulations so you don't have to." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {COUNTRIES.map(c => (
          <Link key={c.name} to={c.href}
            className="card p-5 flex items-center gap-4 group hover:border-brand-accent/30 hover:border">
            <div className="text-4xl">{c.flag}</div>
            <div className="flex-1">
              <div className="font-semibold text-brand-navy group-hover:text-brand-accent transition-colors">{c.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{c.desc}</div>
            </div>
            <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-accent group-hover:translate-x-1 transition-all"/>
          </Link>
        ))}
      </div>
    </Section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHead tag="Client Stories" title="Trusted by businesses worldwide" subtitle="Real results from real clients across industries and geographies." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card p-6 flex flex-col gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-brand-gold fill-brand-gold"/>)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 bg-brand-light rounded-full flex items-center justify-center">
                  <span className="text-brand-accent font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-navy">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="hero-gradient py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { val: '150+', label: 'Business Solutions', sub: 'Delivered successfully' },
            { val: '200+', label: 'Workforce Solutions', sub: 'Across all clients' },
            { val: '98%', label: 'Client Satisfaction', sub: 'Client-focused approach' },
            { val: '15+', label: 'Years Experience', sub: 'Industry expertise' },
          ].map(s => (
            <div key={s.label} className="text-center text-white">
              <div className="font-display text-4xl lg:text-5xl font-bold text-brand-gold mb-1">{s.val}</div>
              <div className="font-semibold text-white">{s.label}</div>
              <div className="text-blue-200 text-sm mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <CountriesSection />
      <TestimonialsSection />
      <CTABanner
        title="Ready to Simplify Your Global Payroll?"
        subtitle="Book a free consultation and discover how Athnav can streamline your HR and payroll operations."
        cta="Book a Free Call"
        href="/contact"
      />
    </>
  )
}
