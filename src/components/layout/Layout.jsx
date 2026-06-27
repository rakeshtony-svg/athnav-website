import React, { useState, useEffect, useRef } from 'react'
import { Outlet, Link, useLocation, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Globe, Phone, Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react'

const NAV = [
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'Payroll Management', href: '/services/payroll-management', desc: 'End-to-end payroll processing' },
      { label: 'HR Operations', href: '/services/hr-operations', desc: 'Workforce administration' },
      { label: 'Compliance Support', href: '/services/compliance-support', desc: 'Statutory & regulatory' },
      { label: 'Advisory Services', href: '/services/advisory-services', desc: 'Strategic HR consulting' },
      { label: 'System Implementation', href: '/services/system-implementation', desc: 'HRIS setup & UAT' },
    ]
  },
  {
    label: 'Countries', href: '/countries',
    children: [
      { label: '🇮🇳 India', href: '/countries/india', desc: 'PF, ESI, TDS, PT compliance' },
      { label: '🇦🇪 UAE', href: '/countries/uae', desc: 'WPS & EOSB management' },
      { label: '🇸🇬 Singapore', href: '/countries/singapore', desc: 'CPF, SDL, IR8A' },
      { label: '🇵🇭 Philippines', href: '/countries/philippines', desc: 'SSS, PhilHealth, Pag-IBIG' },
      { label: '🇬🇧 United Kingdom', href: '/countries/uk', desc: 'PAYE & NI contributions' },
      { label: '🇺🇸 United States', href: '/countries/usa', desc: 'Federal & state payroll' },
    ]
  },
  {
    label: 'Resources', href: '/resources',
    children: [
      { label: 'Blog & Articles', href: '/resources/blog', desc: 'Insights & thought leadership' },
      { label: 'Calculators', href: '/resources/calculators', desc: 'Tax, gratuity & NPS tools' },
    ]
  },
  { label: 'About', href: '/about' },
]

function DropdownMenu({ items, onClose }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
      {items.map(item => (
        <Link key={item.href} to={item.href} onClick={onClose}
          className="flex flex-col px-4 py-3 hover:bg-brand-light transition-colors group">
          <span className="text-sm font-medium text-brand-navy group-hover:text-brand-accent">{item.label}</span>
          {item.desc && <span className="text-xs text-gray-400 mt-0.5">{item.desc}</span>}
        </Link>
      ))}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current)
    setActiveDropdown(label)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
      {/* Top bar */}
      <div className="hidden lg:flex bg-brand-navy text-white text-xs px-8 py-1.5 justify-between items-center">
        <span className="text-gray-300">Global Payroll & HR Solutions | India · UAE · Singapore · Philippines · UK · USA</span>
        <div className="flex items-center gap-4">
          <a href="tel:+919968445365" className="flex items-center gap-1 hover:text-brand-gold transition-colors"><Phone size={11}/> +91 9968 44 5365</a>
          <a href="mailto:info@athnav.com" className="flex items-center gap-1 hover:text-brand-gold transition-colors"><Mail size={11}/> info@athnav.com</a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex items-center justify-between px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-navy rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">A</span>
          </div>
          <div>
            <div className="font-display font-bold text-brand-navy text-lg leading-none">ATHNAV</div>
            <div className="text-[9px] tracking-widest text-brand-muted uppercase leading-none">Integrated Solutions</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV.map(item => (
            <div key={item.label} className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}>
              <Link to={item.href}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-accent hover:bg-gray-50 transition-all">
                {item.label}
                {item.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </Link>
              {item.children && activeDropdown === item.label && (
                <DropdownMenu items={item.children} onClose={() => setActiveDropdown(null)} />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-primary text-sm py-2.5">Get Started <ArrowRight size={14}/></Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          {NAV.map(item => (
            <div key={item.label}>
              <div className="flex items-center justify-between px-6 py-3 border-b border-gray-50">
                <Link to={item.href} onClick={() => setOpen(false)} className="font-medium text-brand-navy">{item.label}</Link>
                {item.children && (
                  <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}>
                    <ChevronDown size={16} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              {item.children && mobileExpanded === item.label && (
                <div className="bg-gray-50">
                  {item.children.map(child => (
                    <Link key={child.href} to={child.href} onClick={() => setOpen(false)}
                      className="block px-10 py-2.5 text-sm text-gray-600 hover:text-brand-accent border-b border-gray-100">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold">A</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl">ATHNAV</div>
                <div className="text-[9px] tracking-widest text-gray-400 uppercase">Integrated Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Expert global payroll, HR operations, and compliance solutions. Helping businesses scale across geographies with confidence.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Linkedin size={14}/>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Twitter size={14}/>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Globe size={14}/>
              </a>
            </div>
            <div className="text-xs text-gray-500 space-y-1">
              <div className="flex items-center gap-2"><Mail size={11}/> info@athnav.com</div>
              <div className="flex items-center gap-2"><Phone size={11}/> +91 9968 44 5365</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Payroll Management','HR Operations','Compliance Support','Advisory Services','System Implementation'].map(s => (
                <li key={s}><Link to={`/services/${s.toLowerCase().replace(/ /g,'-')}`} className="text-sm text-gray-400 hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">Countries</h4>
            <ul className="space-y-2.5">
              {['India','UAE','Singapore','Philippines','UK','USA'].map(c => (
                <li key={c}><Link to={`/countries/${c.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">{c}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[['About Us','/about'],['Resources','/resources'],['Blog','/resources/blog'],['Calculators','/resources/calculators'],['Contact','/contact']].map(([label,href]) => (
                <li key={href}><Link to={href} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2026 Athnav Integrated Solutions Private Limited. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>Noida, Delhi NCR, India</span>
            <span className="hidden md:block">·</span>
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
