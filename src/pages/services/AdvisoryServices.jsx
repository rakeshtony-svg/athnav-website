import React from 'react'
import { Briefcase, CheckCircle } from 'lucide-react'
import { PageHero, Section, SectionHead, CTABanner, Breadcrumb } from '../../components/ui/index.jsx'

const AREAS = [
  { title: 'CTC Structuring & Redesign', desc: 'Optimize compensation structure for tax efficiency, employee satisfaction, and business cost control under old and new tax regimes.' },
  { title: 'HR Policy Development', desc: 'Draft, review, and implement HR policies covering leave, expense, code of conduct, POSH, POSH, and separation.' },
  { title: 'New Labour Code Advisory', desc: 'Readiness assessment and implementation guidance for India\'s four Labour Codes covering wages, social security, industrial relations, and OSHE.' },
  { title: 'Compensation Benchmarking', desc: 'Market salary benchmarking and band-setting to keep your compensation competitive and aligned with industry standards.' },
  { title: 'HR Audit & Gap Analysis', desc: 'Comprehensive review of HR processes, documentation, and compliance to identify gaps and priority improvement areas.' },
  { title: 'Workforce Planning', desc: 'Strategic headcount planning, org design guidance, and workforce analytics to support business growth.' },
]

export default function AdvisoryServices() {
  return (
    <>
      <PageHero tag="Advisory Services" title="Strategic HR Guidance When It Matters" subtitle="From CTC design to Labour Code compliance — our advisors bring 15+ years of HR and payroll expertise to every engagement." cta="Speak to an Advisor" />
      <Section>
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Services',href:'/services'},{label:'Advisory Services'}]} />
        <SectionHead tag="Advisory Areas" title="Where we add strategic value" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS.map(a => (
            <div key={a.title} className="card p-6">
              <Briefcase size={20} className="text-brand-accent mb-3"/>
              <h3 className="font-semibold text-brand-navy mb-2">{a.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABanner title="Need strategic HR guidance?" subtitle="Our advisors are available for project-based or retainer engagements." cta="Book a Consultation" />
    </>
  )
}
