import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Page hero banner
export function PageHero({ tag, title, subtitle, cta, ctaHref = '/contact', dark = true }) {
  return (
    <section className={`relative py-24 lg:py-32 overflow-hidden ${dark ? 'hero-gradient mesh-overlay text-white' : 'bg-brand-light'}`}>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {tag && <span className={`section-tag ${dark ? 'bg-white/15 text-white border border-white/20' : ''}`}>{tag}</span>}
        <h1 className={`font-display text-4xl lg:text-6xl font-bold mb-5 leading-tight ${dark ? 'text-white' : 'text-brand-navy'}`}>{title}</h1>
        {subtitle && <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-blue-100' : 'text-gray-600'}`}>{subtitle}</p>}
        {cta && (
          <div className="mt-8">
            <Link to={ctaHref} className="btn-primary bg-brand-gold text-brand-navy hover:bg-yellow-400">{cta} <ArrowRight size={16}/></Link>
          </div>
        )}
      </div>
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}

// Section wrapper with scroll reveal
export function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  )
}

// Section heading
export function SectionHead({ tag, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-4">{title}</h2>
      {subtitle && <p className={`text-gray-500 text-lg max-w-2xl ${center ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  )
}

// Service card
export function ServiceCard({ icon: Icon, title, description, href }) {
  return (
    <Link to={href} className="card p-6 flex flex-col gap-4 group cursor-pointer">
      <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center group-hover:bg-brand-accent transition-colors">
        <Icon size={22} className="text-brand-accent group-hover:text-white transition-colors" />
      </div>
      <div>
        <h3 className="font-semibold text-brand-navy mb-2 group-hover:text-brand-accent transition-colors">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center gap-1 text-brand-accent text-sm font-medium mt-auto">
        Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
      </div>
    </Link>
  )
}

// Stat display
export function Stat({ value, label, sublabel }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl lg:text-5xl font-bold text-brand-accent mb-1">{value}</div>
      <div className="text-brand-navy font-semibold">{label}</div>
      {sublabel && <div className="text-gray-400 text-sm mt-1">{sublabel}</div>}
    </div>
  )
}

// CTA banner
export function CTABanner({ title, subtitle, cta, href = '/contact' }) {
  return (
    <section className="hero-gradient mesh-overlay py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-blue-100 text-lg mb-8">{subtitle}</p>}
        <Link to={href} className="btn-primary bg-brand-gold text-brand-navy hover:bg-yellow-400 px-8 py-4 text-base">
          {cta} <ArrowRight size={18}/>
        </Link>
      </div>
    </section>
  )
}

// Feature list item
export function Feature({ icon: Icon, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center mt-0.5">
        <Icon size={18} className="text-brand-accent" />
      </div>
      <div>
        <h4 className="font-semibold text-brand-navy mb-1">{title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// Badge/tag chip
export function Badge({ children, variant = 'default' }) {
  const styles = {
    default: 'bg-brand-light text-brand-blue',
    green: 'bg-green-50 text-green-700',
    yellow: 'bg-yellow-50 text-yellow-700',
    red: 'bg-red-50 text-red-700',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  )
}

// Breadcrumb
export function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span>/</span>}
          {item.href ? (
            <Link to={item.href} className="hover:text-brand-accent transition-colors">{item.label}</Link>
          ) : (
            <span className="text-gray-600">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
