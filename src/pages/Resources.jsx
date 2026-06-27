import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Calculator, FileText, Download, ArrowRight, TrendingUp } from 'lucide-react'
import { PageHero, Section, SectionHead } from '../components/ui/index.jsx'

const RESOURCES = [
  { icon: BookOpen, title: 'Blog & Articles', desc: 'Payroll compliance insights, HR trends, and thought leadership across all our geographies.', href: '/resources/blog', cta: 'Read Articles', color: 'bg-blue-500' },
  { icon: Calculator, title: 'Calculators & Tools', desc: 'Free India income tax, gratuity, NPS, and PF calculators to help employees and HR teams.', href: '/resources/calculators', cta: 'Use Calculators', color: 'bg-green-500' },
]

const RECENT_POSTS = [
  { title: 'New Labour Code: What Employers Must Know Before Implementation', date: 'Jun 2026', tag: 'India Compliance', href: '/resources/blog/new-labour-code' },
  { title: 'UAE EOSB Under New Labour Law: Key Changes in 2024', date: 'May 2026', tag: 'UAE Payroll', href: '/resources/blog/uae-eosb-2024' },
  { title: 'CPF Rates 2025: Singapore Employer Guide', date: 'Apr 2026', tag: 'Singapore', href: '/resources/blog/cpf-rates-2025' },
  { title: 'Pag-IBIG, SSS & PhilHealth: 2025 Contribution Tables', date: 'Mar 2026', tag: 'Philippines', href: '/resources/blog/philippines-contributions-2025' },
]

export default function Resources() {
  return (
    <>
      <PageHero tag="Resources" title="Knowledge for Every Payroll Professional" subtitle="Guides, calculators, compliance updates, and tools — everything you need to stay ahead." />
      <Section>
        <SectionHead tag="What's Available" title="Explore our resource library" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {RESOURCES.map(r => (
            <div key={r.title} className="card p-8 group">
              <div className={`w-14 h-14 ${r.color} rounded-2xl flex items-center justify-center mb-5`}>
                <r.icon size={26} className="text-white"/>
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">{r.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">{r.desc}</p>
              <Link to={r.href} className="btn-primary">{r.cta} <ArrowRight size={16}/></Link>
            </div>
          ))}
        </div>

        <SectionHead tag="Latest" title="Recent articles & compliance updates" />
        <div className="space-y-4">
          {RECENT_POSTS.map(p => (
            <Link key={p.title} to={p.href} className="card p-5 flex items-center gap-4 group hover:border-brand-accent/30 hover:border">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center">
                <FileText size={16} className="text-brand-accent"/>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-brand-light text-brand-blue px-2 py-0.5 rounded-full font-medium">{p.tag}</span>
                  <span className="text-xs text-gray-400">{p.date}</span>
                </div>
                <h4 className="text-sm font-semibold text-brand-navy group-hover:text-brand-accent transition-colors line-clamp-1">{p.title}</h4>
              </div>
              <ArrowRight size={14} className="text-gray-300 group-hover:text-brand-accent flex-shrink-0 group-hover:translate-x-1 transition-all"/>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/resources/blog" className="btn-outline">View All Articles <ArrowRight size={16}/></Link>
        </div>
      </Section>
    </>
  )
}
