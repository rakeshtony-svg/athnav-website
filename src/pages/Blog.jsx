import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Calendar, Tag, Clock, ArrowLeft } from 'lucide-react'
import { PageHero, Section, Breadcrumb } from '../components/ui/index.jsx'

const POSTS = [
  {
    slug: 'new-labour-code', tag: 'India Compliance', date: 'June 12, 2026', readTime: '8 min',
    title: 'New Labour Code: What Employers Must Know Before Implementation',
    excerpt: 'India\'s four Labour Codes consolidate 29 central labour laws. Here\'s what HR and payroll teams need to prepare — CTC structures, definition of wages, and PF implications.',
    content: `India's four Labour Codes — the Code on Wages, the Code on Social Security, the Industrial Relations Code, and the Occupational Safety, Health & Working Conditions Code — consolidate 29 existing central labour laws into a simplified framework.\n\n**Key Changes for Payroll Teams**\n\nThe most significant change under the New Labour Codes is the definition of **"wages."** The Code on Wages defines wages to include all remuneration excluding HRA, conveyance, and certain other allowances — but capped such that these exclusions cannot exceed 50% of total remuneration. This means CTC structures where allowances make up more than 50% of gross salary will need restructuring.\n\n**PF Implications**\n\nUnder the Code on Social Security, the definition of basic wages (for PF purposes) aligns with the new wage definition. This means PF contributions may increase for many employees, as the base for computation broadens.\n\n**What HR Teams Should Do Now**\n\n1. Audit your current CTC structure for compliance with the 50% wage threshold\n2. Model the PF cost impact for your organization\n3. Update employment agreements and offer letters to reflect the new structure\n4. Prepare employee communications explaining changes to take-home pay`,
  },
  {
    slug: 'uae-eosb-2024', tag: 'UAE Payroll', date: 'May 22, 2026', readTime: '6 min',
    title: 'UAE EOSB Under New Labour Law: Key Changes in Federal Decree-Law No. 33',
    excerpt: 'The UAE\'s Federal Decree-Law No. 33 of 2021 significantly revised End of Service Benefit calculations and introduced new provisions for termination scenarios.',
    content: `Federal Decree-Law No. 33 of 2021 modernized UAE labour law significantly. Here's what payroll teams need to know about EOSB under the new framework.\n\n**EOSB Calculation Formula**\n\n- First 5 years: 21 days' basic wage per year of service\n- After 5 years: 30 days' basic wage per year of service\n- Maximum cap: 2 years' total wage\n\n**Key Change: Unlimited vs Limited Contracts**\n\nThe new law abolished unlimited contracts — all new employment agreements must be fixed-term (maximum 3 years, renewable). This significantly affects EOSB calculations for resignations vs. terminations.\n\n**Resignation EOSB**\n\nUnder the old law, resignation before 5 years could result in reduced or no EOSB. Under the new law, employees who resign are entitled to full EOSB regardless of years of service.\n\n**WPS Compliance**\n\nAll UAE employers with 100+ employees must participate in the Wage Protection System (WPS). Monthly salary payments must be made via WPS-registered banks and SIF files submitted to MOHRE.`,
  },
  {
    slug: 'cpf-rates-2025', tag: 'Singapore', date: 'April 8, 2026', readTime: '5 min',
    title: 'CPF Contribution Rates 2025: What Singapore Employers Need to Know',
    excerpt: 'CPF rates for 2025 see changes for older employees. Here\'s the full breakdown of employer and employee CPF contribution rates by age group.',
    content: `CPF (Central Provident Fund) contributions are mandatory for all Singapore Citizens and Permanent Residents. Here are the 2025 rates.\n\n**CPF Rates by Age Group**\n\n- Below 55: Employee 20%, Employer 17%, Total 37%\n- 55 to 60: Employee 15%, Employer 15%, Total 30%\n- 60 to 65: Employee 9.5%, Employer 11.5%, Total 21%\n- 65 to 70: Employee 7%, Employer 9%, Total 16%\n- Above 70: Employee 5%, Employer 7.5%, Total 12.5%\n\n**Ordinary Wage Ceiling**: S$6,800/month\n**Annual Wage Ceiling**: S$102,000\n\n**SDL (Skills Development Levy)**\n\nSDL is payable for all employees (including part-time, casual, and temporary) at 0.25% of gross wages, with a minimum of S$2 and maximum of S$11.25 per month per employee.`,
  },
  {
    slug: 'philippines-contributions-2025', tag: 'Philippines', date: 'March 15, 2026', readTime: '5 min',
    title: 'Pag-IBIG, SSS & PhilHealth: 2025 Contribution Tables for Philippines Employers',
    excerpt: 'Updated contribution tables for all three Philippine mandatory contributions — SSS, PhilHealth, and Pag-IBIG — effective 2025.',
    content: `Philippine employers are required to remit contributions for three mandatory funds: SSS, PhilHealth, and Pag-IBIG (HDMF). Here are the 2025 rates.\n\n**SSS Contributions**\n\nTotal contribution rate: 14% of Monthly Salary Credit (MSC). Employer pays 9.5%, employee pays 4.5%, plus a mandatory 2% provident fund contribution split equally.\n\nMSC range: PHP 4,000 to PHP 30,000.\n\n**PhilHealth (PHIC)**\n\nPremium rate: 5% of basic monthly salary. Split 50/50 between employer and employee. Ceiling: PHP 100,000/month. Minimum monthly contribution: PHP 200.\n\n**Pag-IBIG (HDMF)**\n\nBoth employer and employee contribute 2% of monthly compensation, with a combined maximum of PHP 200/month (based on PHP 5,000 cap). Employees may voluntarily contribute more.\n\n**13th Month Pay**\n\nMandatory under Presidential Decree 851. Equivalent to 1/12 of the employee\'s total basic salary earned during the calendar year. Must be paid on or before December 24.`,
  },
]

export function Blog() {
  const [activeTag, setActiveTag] = useState('All')
  const tags = ['All', ...new Set(POSTS.map(p => p.tag))]
  const filtered = activeTag === 'All' ? POSTS : POSTS.filter(p => p.tag === activeTag)

  return (
    <>
      <PageHero tag="Blog & Articles" title="Payroll & HR Compliance Insights" subtitle="Stay current on statutory changes, compliance updates, and HR best practices across our 6 countries." />
      <Section>
        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map(t => (
            <button key={t} onClick={() => setActiveTag(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeTag === t ? 'bg-brand-accent text-white' : 'bg-gray-100 text-gray-600 hover:bg-brand-light hover:text-brand-accent'}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(p => (
            <Link key={p.slug} to={`/resources/blog/${p.slug}`} className="card p-6 group flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-brand-light text-brand-blue px-2.5 py-0.5 rounded-full font-medium">{p.tag}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{p.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Calendar size={11}/>{p.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11}/>{p.readTime} read</span>
                </div>
                <span className="flex items-center gap-1 text-brand-accent font-medium group-hover:gap-2 transition-all">Read <ArrowRight size={12}/></span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}

export function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find(p => p.slug === slug)

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="font-display text-3xl font-bold text-brand-navy mb-3">Article Not Found</h1>
      <Link to="/resources/blog" className="btn-primary">Back to Blog</Link>
    </div>
  )

  return (
    <>
      <section className="hero-gradient py-16 text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/15 border border-white/20 text-white text-xs px-3 py-1 rounded-full">{post.tag}</span>
            <span className="text-blue-200 text-sm flex items-center gap-1"><Calendar size={12}/>{post.date}</span>
            <span className="text-blue-200 text-sm flex items-center gap-1"><Clock size={12}/>{post.readTime}</span>
          </div>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-white">{post.title}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Breadcrumb items={[{label:'Home',href:'/'},{label:'Resources',href:'/resources'},{label:'Blog',href:'/resources/blog'},{label:post.tag}]} />
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('**') && block.endsWith('**')) {
                return <h3 key={i} className="font-display text-xl font-bold text-brand-navy mt-8 mb-3">{block.replace(/\*\*/g,'')}</h3>
              }
              if (block.startsWith('- ')) {
                const items = block.split('\n').map(l => l.replace('- ',''))
                return <ul key={i} className="space-y-2 my-4">{items.map((item,j) => <li key={j} className="flex gap-2 text-gray-600"><span className="text-brand-accent mt-1">•</span>{item}</li>)}</ul>
              }
              // Convert inline **bold** to strong
              const parts = block.split(/(\*\*[^*]+\*\*)/)
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {parts.map((part, j) => part.startsWith('**') ? <strong key={j} className="text-brand-navy font-semibold">{part.replace(/\*\*/g,'')}</strong> : part)}
                </p>
              )
            })}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
            <Link to="/resources/blog" className="btn-ghost"><ArrowLeft size={14}/> Back to Blog</Link>
            <Link to="/contact" className="btn-primary">Speak to a Compliance Expert <ArrowRight size={14}/></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
