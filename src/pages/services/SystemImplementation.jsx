import React from 'react'
import { Settings, CheckCircle } from 'lucide-react'
import { PageHero, Section, SectionHead, CTABanner, Breadcrumb } from '../../components/ui/index.jsx'

const PHASES = [
  { phase: 'Discovery', tasks: ['Requirements gathering', 'Current state assessment', 'System selection support'] },
  { phase: 'Configuration', tasks: ['HRIS/payroll system setup', 'Pay component mapping', 'Statutory configuration'] },
  { phase: 'UAT', tasks: ['Test case preparation', 'Parallel run execution', 'Issue tracking & resolution'] },
  { phase: 'Go-Live', tasks: ['Data migration sign-off', 'Live payroll run', 'Hypercare support (30-60 days)'] },
]

export default function SystemImplementation() {
  return (
    <>
      <PageHero tag="System Implementation" title="Payroll & HRIS Implementation Done Right" subtitle="We manage the full implementation lifecycle — from system selection to go-live — ensuring zero disruption to payroll operations." cta="Discuss Your Project" />
      <Section>
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Services',href:'/services'},{label:'System Implementation'}]} />
        <SectionHead tag="Implementation Phases" title="A structured approach to every implementation" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHASES.map((p, i) => (
            <div key={p.phase} className="card p-6 relative">
              <div className="absolute -top-3 left-6 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full">Phase {i+1}</div>
              <h3 className="font-semibold text-brand-navy mt-3 mb-3">{p.phase}</h3>
              <div className="space-y-2">
                {p.tasks.map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-brand-accent flex-shrink-0"/>
                    <span className="text-xs text-gray-500">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTABanner title="Planning an HRIS implementation?" subtitle="Our team ensures a smooth, on-time go-live with full compliance from day one." cta="Start Planning" />
    </>
  )
}
