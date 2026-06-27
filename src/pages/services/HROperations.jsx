import React from 'react'
import { Users, CheckCircle } from 'lucide-react'
import { PageHero, Section, CTABanner, Breadcrumb } from '../../components/ui/index.jsx'

const items = ['Employee onboarding documentation & HRIS setup','Offboarding, exit interviews & clearance','Leave & attendance data management','HRIS / payroll system data accuracy','Employee query resolution (HR helpdesk)','Workforce MIS & monthly HR reports','Employment contracts & letters','Statutory register maintenance']

export default function HROperations() {
  return (
    <>
      <PageHero tag="HR Operations" title="Streamlined HR Administration, Day to Day" subtitle="Reliable, process-driven HR operations support so your internal HR team can focus on people, not paperwork." cta="Talk to Our Team" />
      <Section>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'HR Operations' }]} />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-tag">Scope of Work</span>
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-4">Everything your HR team needs handled</h2>
            <p className="text-gray-500 leading-relaxed mb-6">We act as an extension of your HR function — managing the full range of operational HR tasks with accuracy, confidentiality, and a client-first approach.</p>
            <div className="space-y-3">
              {items.map(item => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-brand-accent flex-shrink-0 mt-1"/>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-navy rounded-3xl p-8 text-white">
            <Users size={40} className="text-brand-gold mb-4"/>
            <h3 className="font-display text-2xl font-bold mb-3">Why outsource HR Ops?</h3>
            <div className="space-y-4">
              {['Free up your HR team for strategic work','Reduce errors in data and documentation','Get consistent SLA-driven support','Scale quickly without hiring overhead'].map(r => (
                <div key={r} className="flex gap-2 items-start">
                  <CheckCircle size={14} className="text-brand-gold flex-shrink-0 mt-0.5"/>
                  <span className="text-blue-100 text-sm">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <CTABanner title="Let us handle your HR operations" subtitle="Our team becomes your team — seamlessly integrated with your processes." cta="Get in Touch" />
    </>
  )
}
