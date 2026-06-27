import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, Users, Shield, Briefcase, Settings, ArrowRight, CheckCircle } from 'lucide-react'
import { PageHero, Section, SectionHead, CTABanner } from '../components/ui/index.jsx'

const SERVICES = [
  {
    icon: BarChart3, title: 'Payroll Management', href: '/services/payroll-management',
    description: 'End-to-end payroll processing, salary computations, payslip generation, statutory deductions, and multi-currency disbursement across geographies.',
    features: ['Monthly payroll processing', 'Payslip generation & distribution', 'Statutory deduction management', 'Multi-currency disbursement', 'Full & Final settlement', 'Payroll reconciliation'],
    color: 'from-blue-500 to-brand-accent'
  },
  {
    icon: Users, title: 'HR Operations', href: '/services/hr-operations',
    description: 'Comprehensive workforce administration including onboarding, offboarding, leave management, and employee lifecycle support.',
    features: ['Employee onboarding & offboarding', 'Leave & attendance management', 'HRIS data maintenance', 'Employee query handling (HR helpdesk)', 'Document management', 'Workforce reporting'],
    color: 'from-purple-500 to-purple-700'
  },
  {
    icon: Shield, title: 'Compliance Support', href: '/services/compliance-support',
    description: 'Statutory filings, EPF, ESIC, TDS, Professional Tax, and country-specific regulatory compliance management to keep you penalty-free.',
    features: ['EPF & ESIC filings', 'TDS computation & returns', 'Professional Tax compliance', 'Labour Welfare Fund', 'Audit support & documentation', 'Compliance calendar management'],
    color: 'from-green-500 to-emerald-700'
  },
  {
    icon: Briefcase, title: 'Advisory Services', href: '/services/advisory-services',
    description: 'Strategic HR consulting, compensation benchmarking, policy development, and CTC structuring tailored to your business goals.',
    features: ['CTC structuring & redesign', 'HR policy development', 'Compensation benchmarking', 'New Labour Code advisory', 'Performance management frameworks', 'HR audit & gap analysis'],
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: Settings, title: 'System Implementation', href: '/services/system-implementation',
    description: 'HRIS setup, payroll software implementation, UAT coordination, and go-live support to ensure seamless system transitions.',
    features: ['HRIS selection & setup', 'Payroll software configuration', 'UAT planning & execution', 'Data migration support', 'Go-live & hypercare support', 'Training & documentation'],
    color: 'from-teal-500 to-cyan-700'
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        tag="Our Services"
        title="End-to-End HR & Payroll Solutions"
        subtitle="From daily payroll runs to strategic workforce consulting — we handle it all, so you can focus on your core business."
        cta="Talk to an Expert"
      />

      <Section>
        <SectionHead tag="What We Offer" title="Five pillars of payroll and HR excellence" subtitle="Each service is designed to remove operational burden while ensuring statutory accuracy and employee satisfaction." />
        <div className="space-y-8">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${s.color} rounded-2xl items-center justify-center mb-4`}>
                  <s.icon size={26} className="text-white"/>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-navy mb-3">{s.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{s.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {s.features.map(f => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-brand-accent flex-shrink-0 mt-0.5"/>
                      <span className="text-sm text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to={s.href} className="btn-primary">Explore {s.title} <ArrowRight size={16}/></Link>
              </div>
              <div className={`rounded-3xl bg-gradient-to-br ${s.color} p-8 text-white aspect-video flex items-center justify-center ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="text-center">
                  <s.icon size={60} className="mx-auto mb-4 opacity-80"/>
                  <div className="font-display text-2xl font-bold mb-2">{s.title}</div>
                  <div className="text-white/70 text-sm">{s.features.length} core capabilities</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Not sure which service you need?"
        subtitle="Our experts will assess your requirements and recommend the right solution for your business."
        cta="Schedule a Free Consultation"
      />
    </>
  )
}
