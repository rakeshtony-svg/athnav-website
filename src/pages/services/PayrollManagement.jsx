import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, CheckCircle, ArrowRight, Clock, Shield, Globe, Users } from 'lucide-react'
import { PageHero, Section, SectionHead, CTABanner, Breadcrumb } from '../../components/ui/index.jsx'

const PROCESS = [
  { step: '01', title: 'Data Collection', desc: 'Gather attendance, leave, variable pay, and joining/exit data from your HR system or Excel inputs.' },
  { step: '02', title: 'Payroll Processing', desc: 'Compute gross salary, statutory deductions (EPF, ESIC, TDS, PT), and net pay with full audit trail.' },
  { step: '03', title: 'Review & Approval', desc: 'Client review of the payroll register before disbursement — full transparency, zero surprises.' },
  { step: '04', title: 'Disbursement & Payslips', desc: 'Salary disbursement coordination and payslip distribution via email or employee portal.' },
  { step: '05', title: 'Compliance Filing', desc: 'Monthly statutory filings — PF challan, ESIC challan, TDS returns — submitted on time every cycle.' },
]

const DELIVERABLES = [
  'Monthly payroll register (detailed & summary)',
  'Employee payslips (PDF / portal)',
  'Statutory challans & returns',
  'Bank advice / transfer file',
  'Full & Final settlement computation',
  'Annual tax computation sheets (Form 16)',
  'Payroll reconciliation report',
  'Compliance calendar & tracker',
]

export default function PayrollManagement() {
  return (
    <>
      <PageHero
        tag="Payroll Management"
        title="Accurate Payroll, Every Month, On Time"
        subtitle="We handle the entire payroll cycle — from data collection to statutory filing — so your finance and HR teams can stay focused on strategic work."
        cta="Get a Free Assessment"
      />

      <Section>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Payroll Management' }]} />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-tag">What's Included</span>
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-4">Everything from input to compliance</h2>
            <p className="text-gray-500 leading-relaxed mb-6">Our payroll management service covers the full lifecycle — data collection, computation, approval workflows, disbursement, and statutory filings. We support single-country payroll and multi-country consolidated payroll across our 6 geographies.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DELIVERABLES.map(d => (
                <div key={d} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-brand-accent flex-shrink-0 mt-1"/>
                  <span className="text-sm text-gray-600">{d}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Clock, val: '99.8%', label: 'On-time payroll rate' },
              { icon: Shield, val: '100%', label: 'Statutory accuracy' },
              { icon: Globe, val: '6', label: 'Countries supported' },
              { icon: Users, val: '10K+', label: 'Employees processed' },
            ].map(s => (
              <div key={s.label} className="card p-5 text-center">
                <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-3">
                  <s.icon size={18} className="text-brand-accent"/>
                </div>
                <div className="font-display text-2xl font-bold text-brand-navy">{s.val}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHead tag="Our Process" title="How we run your payroll" subtitle="A transparent, structured process built for accuracy and compliance." />
          <div className="relative">
            <div className="hidden lg:block absolute left-[27px] top-8 bottom-8 w-0.5 bg-brand-light"/>
            <div className="space-y-6">
              {PROCESS.map((p, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold text-sm z-10">{p.step}</div>
                  <div className="card p-5 flex-1">
                    <h4 className="font-semibold text-brand-navy mb-1">{p.title}</h4>
                    <p className="text-sm text-gray-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to outsource your payroll?"
        subtitle="Let our experts handle the complexity while you stay in full control."
        cta="Get Started Today"
      />
    </>
  )
}
