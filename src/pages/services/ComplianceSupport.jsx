import React from 'react'
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react'
import { PageHero, Section, SectionHead, CTABanner, Breadcrumb } from '../../components/ui/index.jsx'

const COMPLIANCES = [
  { country: '🇮🇳 India', items: ['EPF & ESIC monthly challans','TDS computation & quarterly returns (24Q)','Professional Tax — state-wise filings','Labour Welfare Fund (LWF)','New Labour Code readiness','Form 16 generation'] },
  { country: '🇦🇪 UAE', items: ['Wage Protection System (WPS)','End of Service Benefit (EOSB/Gratuity)','UAE Labour Law compliance','MOHRE filings & SIF files'] },
  { country: '🇸🇬 Singapore', items: ['CPF monthly contributions','SDL (Skills Development Levy)','IR8A annual filing','IR21 tax clearance','SHG fund contributions'] },
  { country: '🇵🇭 Philippines', items: ['SSS monthly contributions','PhilHealth premiums','Pag-IBIG (HDMF) remittances','BIR tax filings'] },
]

export default function ComplianceSupport() {
  return (
    <>
      <PageHero tag="Compliance Support" title="Stay Compliant, Stay Penalty-Free" subtitle="We track statutory deadlines, compute accurate contributions, and file on time — across every country you operate in." cta="Assess My Compliance" />
      <Section>
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Services',href:'/services'},{label:'Compliance Support'}]} />
        <SectionHead tag="Country Coverage" title="Compliance across all our geographies" subtitle="Each country has unique statutory obligations. We manage all of them — accurately and on schedule." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPLIANCES.map(c => (
            <div key={c.country} className="card p-6">
              <h3 className="font-semibold text-brand-navy mb-4 text-lg">{c.country}</h3>
              <div className="space-y-2">
                {c.items.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-brand-accent flex-shrink-0"/>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTABanner title="Don't risk non-compliance" subtitle="Let Athnav manage your statutory obligations across all geographies." cta="Get Compliance Support" />
    </>
  )
}
