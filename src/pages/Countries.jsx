import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { PageHero, Section, SectionHead, CTABanner } from '../components/ui/index.jsx'

const COUNTRIES = [
  { flag: '🇮🇳', name: 'India', slug: 'india', tagline: 'EPF · ESIC · TDS · PT · LWF · New Labour Codes', desc: 'India\'s statutory framework spans central and state-level regulations. We manage PF, ESIC, TDS, Professional Tax, Labour Welfare Fund, and New Labour Code implementation.', highlights: ['EPF & ESIC filing', 'TDS & Form 16', 'PT (state-wise)', 'LWF compliance', 'Labour Code advisory'] },
  { flag: '🇦🇪', name: 'United Arab Emirates', slug: 'uae', tagline: 'WPS · EOSB · Gratuity · UAE Labour Law', desc: 'UAE payroll compliance under Federal Decree-Law No. 33 of 2021, including Wage Protection System (WPS), End of Service Benefits, and gratuity calculations.', highlights: ['WPS SIF file generation', 'EOSB computation', 'Gratuity management', 'MOHRE compliance'] },
  { flag: '🇸🇬', name: 'Singapore', slug: 'singapore', tagline: 'CPF · SDL · IR8A · SHG · IR21', desc: 'Singapore payroll compliance including CPF contributions, self-help group levies, Skills Development Levy, and IRAS filing obligations.', highlights: ['CPF monthly contributions', 'SDL remittance', 'IR8A annual filing', 'IR21 tax clearance', 'SHG fund management'] },
  { flag: '🇵🇭', name: 'Philippines', slug: 'philippines', tagline: 'SSS · PhilHealth · Pag-IBIG · BIR', desc: 'Philippine statutory contributions including SSS, PhilHealth, Pag-IBIG (HDMF), and BIR tax compliance for local and foreign employees.', highlights: ['SSS contributions', 'PhilHealth premiums', 'Pag-IBIG remittances', 'BIR tax filings', '13th month pay'] },
  { flag: '🇬🇧', name: 'United Kingdom', slug: 'uk', tagline: 'PAYE · NI · Auto-enrolment · HMRC', desc: 'UK payroll under HMRC regulations including PAYE, National Insurance, auto-enrolment pension contributions, and Real Time Information submissions.', highlights: ['PAYE management', 'NI contributions', 'Auto-enrolment', 'RTI submissions', 'P60 & P11D'] },
  { flag: '🇺🇸', name: 'United States', slug: 'usa', tagline: 'Federal Payroll · State Tax · FICA · W-2', desc: 'US payroll compliance across federal and state jurisdictions, covering FICA contributions, federal and state income tax withholding, and year-end W-2 filing.', highlights: ['Federal tax withholding', 'State & local tax', 'FICA / FUTA / SUTA', 'W-2 preparation', 'Payroll register management'] },
]

export default function Countries() {
  return (
    <>
      <PageHero
        tag="Global Reach"
        title="Payroll Expertise Across 6 Countries"
        subtitle="Local compliance knowledge, delivered with global consistency. We navigate each country's unique statutory requirements so you don't have to."
        cta="Explore a Country"
        ctaHref="#countries"
      />

      <Section id="countries">
        <SectionHead tag="Where We Operate" title="Our country coverage" subtitle="Each geography comes with dedicated expertise, current compliance calendars, and a team that understands local nuances." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COUNTRIES.map(c => (
            <div key={c.slug} className="card overflow-hidden group">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{c.flag}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-navy group-hover:text-brand-accent transition-colors">{c.name}</h3>
                    <p className="text-xs text-brand-muted font-medium mt-0.5">{c.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {c.highlights.map(h => (
                    <span key={h} className="country-pill text-xs">{h}</span>
                  ))}
                </div>
                <Link to={`/countries/${c.slug}`} className="btn-primary text-sm py-2.5">
                  View {c.name} Payroll <ChevronRight size={14}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Operating in multiple countries?"
        subtitle="We consolidate your global payroll into one reliable, compliant operation."
        cta="Get a Multi-Country Quote"
      />
    </>
  )
}
