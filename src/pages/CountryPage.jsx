import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import { PageHero, Section, SectionHead, CTABanner, Breadcrumb } from '../components/ui/index.jsx'

const COUNTRY_DATA = {
  india: {
    flag: '🇮🇳', name: 'India', region: 'Asia-Pacific',
    tagline: 'India Payroll & Statutory Compliance',
    overview: 'India has one of the most complex statutory frameworks for employers, spanning central and state-level regulations. Athnav manages the full compliance lifecycle — PF, ESIC, TDS, Professional Tax, Labour Welfare Fund, and New Labour Code implementation.',
    compliances: [
      { label: 'EPF (Employees\' Provident Fund)', desc: 'Monthly challan filing, annual return (Form 3A/6A), and employee PF account management.' },
      { label: 'ESIC (Employee State Insurance)', desc: 'Half-yearly returns, monthly challan, and IP number registration for eligible employees.' },
      { label: 'TDS on Salary (Section 192)', desc: 'Monthly TDS computation, quarterly TDS returns (24Q), and Form 16 issuance.' },
      { label: 'Professional Tax', desc: 'State-specific PT deductions and filings across Karnataka, Maharashtra, West Bengal, Telangana, and more.' },
      { label: 'Labour Welfare Fund (LWF)', desc: 'Bi-annual or annual LWF contributions per applicable state legislation.' },
      { label: 'New Labour Codes', desc: 'Readiness assessment and implementation advisory for the four Labour Codes.' },
    ],
    highlights: ['EPF & ESIC monthly filings','TDS returns (24Q)','Form 16 & 12BB','PT (all major states)','Labour Code advisory','Full & Final settlement'],
  },
  uae: {
    flag: '🇦🇪', name: 'United Arab Emirates', region: 'Middle East',
    tagline: 'UAE Payroll & WPS Compliance',
    overview: 'UAE payroll is governed by Federal Decree-Law No. 33 of 2021. Key obligations include Wage Protection System (WPS) compliance, End of Service Benefits (EOSB/Gratuity), and MOHRE reporting.',
    compliances: [
      { label: 'Wage Protection System (WPS)', desc: 'Monthly SIF file generation and submission via approved banks to MOHRE.' },
      { label: 'End of Service Benefit (EOSB)', desc: 'Gratuity computation per UAE Labour Law — 21 days for first 5 years, 30 days thereafter.' },
      { label: 'Annual Leave Encashment', desc: 'Computation and payout of earned annual leave during separation.' },
      { label: 'Unlimited vs Limited Contracts', desc: 'Correct EOSB computation based on contract type and resignation vs termination.' },
      { label: 'MOHRE Compliance', desc: 'Ministry of Human Resources & Emiratisation filings and reporting.' },
    ],
    highlights: ['WPS SIF files','EOSB / Gratuity','Annual leave encashment','MOHRE reporting','Labour Law compliance'],
  },
  singapore: {
    flag: '🇸🇬', name: 'Singapore', region: 'Asia-Pacific',
    tagline: 'Singapore Payroll & CPF Compliance',
    overview: 'Singapore payroll compliance requires accurate CPF contributions, SDL remittance, SHG fund deductions, and annual IR8A/IR21 submissions to IRAS.',
    compliances: [
      { label: 'CPF Contributions', desc: 'Monthly CPF computation for employees and employers at IRAS-approved rates.' },
      { label: 'Skills Development Levy (SDL)', desc: 'Monthly SDL remittance at 0.25% of gross wages (min S$2, max S$11.25/month).' },
      { label: 'Self-Help Group (SHG) Funds', desc: 'CDAC, MENDAKI, SINDA, ECF deductions based on employee ethnicity.' },
      { label: 'IR8A Annual Filing', desc: 'Annual income tax return for all employees submitted to IRAS by March.' },
      { label: 'IR21 Tax Clearance', desc: 'For foreign employees leaving Singapore — filed at least one month before cessation.' },
    ],
    highlights: ['CPF contributions','SDL levy','IR8A filing','IR21 clearance','SHG deductions'],
  },
  philippines: {
    flag: '🇵🇭', name: 'Philippines', region: 'Asia-Pacific',
    tagline: 'Philippines Payroll & Statutory Contributions',
    overview: 'Philippine employers must remit SSS, PhilHealth, and Pag-IBIG contributions monthly, plus BIR tax filings and 13th month pay.',
    compliances: [
      { label: 'SSS (Social Security System)', desc: 'Monthly employer and employee contributions per the SSS contribution table.' },
      { label: 'PhilHealth', desc: 'Premium contributions split between employer and employee at current PHIC rates.' },
      { label: 'Pag-IBIG (HDMF)', desc: 'Housing fund contributions of 2% employee and 2% employer per remittance schedule.' },
      { label: 'BIR Tax Withholding', desc: 'Monthly withholding tax on compensation and quarterly BIR returns.' },
      { label: '13th Month Pay', desc: 'Mandatory 13th month pay computation and payout on or before December 24.' },
    ],
    highlights: ['SSS contributions','PhilHealth premiums','Pag-IBIG remittances','BIR tax returns','13th month pay'],
  },
  uk: {
    flag: '🇬🇧', name: 'United Kingdom', region: 'Europe',
    tagline: 'UK Payroll & HMRC Compliance',
    overview: 'UK payroll involves PAYE, National Insurance contributions, auto-enrolment pension obligations, and Real Time Information (RTI) submissions to HMRC.',
    compliances: [
      { label: 'PAYE (Pay As You Earn)', desc: 'Monthly income tax deduction and remittance to HMRC via the PAYE scheme.' },
      { label: 'National Insurance (NI)', desc: 'Employee and employer NI contributions at Class 1 rates per HMRC bands.' },
      { label: 'Auto-enrolment Pensions', desc: 'Compliance with workplace pension obligations under The Pensions Regulator.' },
      { label: 'Real Time Information (RTI)', desc: 'Full Payment Submission (FPS) and Employer Payment Summary (EPS) filed each pay period.' },
      { label: 'P60 & P11D', desc: 'Annual employee tax summaries and benefit-in-kind reporting to HMRC.' },
    ],
    highlights: ['PAYE management','NI contributions','Auto-enrolment','RTI submissions','P60 & P11D'],
  },
  usa: {
    flag: '🇺🇸', name: 'United States', region: 'North America',
    tagline: 'US Payroll & Federal/State Tax Compliance',
    overview: 'US payroll is governed by both federal and state regulations. Athnav supports FICA contributions, federal and state income tax withholding, unemployment taxes, and W-2 preparation.',
    compliances: [
      { label: 'Federal Income Tax Withholding', desc: 'Employee federal tax withholding per Form W-4 and IRS withholding tables.' },
      { label: 'FICA (Social Security & Medicare)', desc: 'Employee (7.65%) and employer (7.65%) FICA contributions — SS 6.2%, Medicare 1.45%.' },
      { label: 'FUTA & SUTA', desc: 'Federal and state unemployment tax computation and quarterly deposits.' },
      { label: 'State Income Tax', desc: 'State-specific income tax withholding across all applicable jurisdictions.' },
      { label: 'W-2 Annual Filing', desc: 'Year-end W-2 preparation and submission to employees and SSA by January 31.' },
    ],
    highlights: ['Federal tax withholding','FICA contributions','FUTA/SUTA','State taxes','W-2 preparation'],
  },
}

export default function CountryPage() {
  const { country } = useParams()
  const data = COUNTRY_DATA[country]

  if (!data) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-32">
      <div className="text-6xl mb-4">🌏</div>
      <h1 className="font-display text-3xl font-bold text-brand-navy mb-3">Country Not Found</h1>
      <p className="text-gray-500 mb-6">We don't have a page for that country yet.</p>
      <Link to="/countries" className="btn-primary">View All Countries</Link>
    </div>
  )

  return (
    <>
      <PageHero tag={data.region} title={`${data.flag} ${data.tagline}`} subtitle={data.overview} cta="Get a Quote" />
      <Section>
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Countries',href:'/countries'},{label:data.name}]} />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SectionHead tag="Statutory Scope" title="What we manage" center={false} />
            <div className="space-y-4">
              {data.compliances.map(c => (
                <div key={c.label} className="card p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-accent flex-shrink-0 mt-0.5"/>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">{c.label}</h4>
                      <p className="text-sm text-gray-500">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="card p-6 sticky top-24">
              <h3 className="font-semibold text-brand-navy mb-4">{data.flag} Quick Reference</h3>
              <div className="space-y-2 mb-6">
                {data.highlights.map(h => (
                  <div key={h} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"/>
                    <span className="text-sm text-gray-600">{h}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary w-full justify-center mb-3">Get {data.name} Payroll Quote</Link>
              <Link to="/countries" className="btn-ghost w-full justify-center text-sm">
                <ArrowLeft size={14}/> Back to Countries
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <CTABanner title={`Ready to set up ${data.name} payroll?`} subtitle="Our local compliance experts will have you running within one payroll cycle." cta="Contact Us Today" />
    </>
  )
}
