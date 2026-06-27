import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Target, Eye, Heart, Users, Globe, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { PageHero, Section, SectionHead, CTABanner } from '../components/ui/index.jsx'

const VALUES = [
  { icon: Shield, title: 'Integrity', desc: 'We operate with complete transparency in every payroll run, compliance filing, and client interaction.' },
  { icon: Target, title: 'Precision', desc: 'Statutory accuracy is our baseline. We verify every computation before it leaves our desk.' },
  { icon: Heart, title: 'Client-First', desc: 'Your business goals drive our work. We adapt our processes to your needs, not the other way around.' },
  { icon: TrendingUp, title: 'Continuous Improvement', desc: 'We invest in keeping our team current on regulatory changes, technology, and best practices.' },
]

const TEAM = [
  { name: 'Rakesh Kumar', role: 'Senior Manager – Global Payroll', bio: 'Leading global payroll operations and technology strategy for Athnav. 15+ years across India, UAE, Singapore, and Philippines payroll compliance.', initial: 'R' },
  { name: 'HR & Compliance Team', role: 'Multi-Country Specialists', bio: 'A team of dedicated payroll and compliance specialists covering all six geographies with deep statutory knowledge.', initial: 'T' },
]

const INDUSTRIES = ['Information Technology','Banking & Financial Services','Manufacturing & Industrial','Retail & E-commerce','Healthcare & Pharmaceuticals','Logistics & Supply Chain','Professional Services','Startups & SMEs']

export default function About() {
  return (
    <>
      <PageHero
        tag="About Athnav"
        title="Delivering Integrated HR & Payroll Solutions Since Day One"
        subtitle="Athnav Integrated Solutions Pvt. Ltd. is a DPIIT-registered startup built by payroll and HR professionals, for businesses that need reliable, compliant, and scalable workforce operations support."
      />

      {/* Mission & Vision */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-brand-navy rounded-3xl p-8 text-white">
            <Target size={32} className="text-brand-gold mb-4"/>
            <h2 className="font-display text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-blue-100 leading-relaxed">To simplify global payroll and HR operations for businesses by delivering reliable, accurate, and compliant workforce solutions — enabling our clients to focus on growth while we handle the complexity.</p>
          </div>
          <div className="bg-brand-accent rounded-3xl p-8 text-white">
            <Eye size={32} className="text-white mb-4"/>
            <h2 className="font-display text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-blue-100 leading-relaxed">To be the most trusted global payroll and HR operations partner for businesses across Asia-Pacific, Middle East, and beyond — known for precision, integrity, and genuine partnership.</p>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {val:'15+',label:'Years Experience',icon:Award},
              {val:'6',label:'Countries',icon:Globe},
              {val:'150+',label:'Business Solutions',icon:Target},
              {val:'98%',label:'Client Satisfaction',icon:Heart},
            ].map(s => (
              <div key={s.label} className="card p-6 text-center">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-3">
                  <s.icon size={20} className="text-brand-accent"/>
                </div>
                <div className="font-display text-3xl font-bold text-brand-navy">{s.val}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <Section>
        <SectionHead tag="Core Values" title="What guides everything we do" subtitle="Our values aren't posters on a wall. They show up in how we run payroll, how we communicate, and how we build partnerships." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map(v => (
            <div key={v.title} className="card p-6 text-center">
              <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <v.icon size={22} className="text-brand-accent"/>
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHead tag="Industries Served" title="We work across sectors" subtitle="Our payroll and HR expertise spans multiple industries, each with unique workforce and compliance requirements." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES.map(ind => (
              <div key={ind} className="card p-4 text-center text-sm font-medium text-brand-navy">
                <CheckCircle size={14} className="text-brand-accent mx-auto mb-2"/>{ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DPIIT Badge */}
      <Section>
        <div className="card p-8 flex flex-col md:flex-row items-center gap-6 bg-brand-light border-brand-accent/20 border">
          <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center flex-shrink-0">
            <Award size={32} className="text-white"/>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-brand-navy mb-1">DPIIT Registered Startup</h3>
            <p className="text-gray-600 text-sm">Athnav Integrated Solutions Pvt. Ltd. is registered under Startup India with the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India.</p>
          </div>
          <Link to="/contact" className="btn-primary flex-shrink-0">Partner With Us <ArrowRight size={16}/></Link>
        </div>
      </Section>

      <CTABanner title="Ready to work with Athnav?" subtitle="Join 150+ businesses that trust us with their payroll and HR operations." cta="Get Started" />
    </>
  )
}
