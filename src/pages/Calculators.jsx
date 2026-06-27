import React, { useState } from 'react'
import { Calculator, IndianRupee, TrendingUp, Building } from 'lucide-react'
import { PageHero, Section } from '../components/ui/index.jsx'

// ——— Income Tax Calculator ———
function IncomeTaxCalc() {
  const [income, setIncome] = useState(1200000)
  const [regime, setRegime] = useState('new')
  const [hra, setHra] = useState(180000)
  const [deductions80C, setDeductions80C] = useState(150000)
  const [nps, setNps] = useState(50000)

  const fmt = n => '₹' + Math.round(n).toLocaleString('en-IN')

  // New Regime FY2025-26
  const calcNewRegime = (inc) => {
    const std = 75000
    const taxable = Math.max(0, inc - std)
    if (taxable <= 700000) return 0 // Rebate u/s 87A
    const slabs = [[300000,0],[300000,0.05],[300000,0.10],[300000,0.15],[300000,0.20],[Infinity,0.30]]
    let tax = 0, remaining = taxable - 300000
    for (const [limit, rate] of slabs.slice(1)) {
      if (remaining <= 0) break
      const taxable_in_slab = Math.min(remaining, limit)
      tax += taxable_in_slab * rate
      remaining -= taxable_in_slab
    }
    return tax * 1.04 // + health & education cess
  }

  // Old Regime
  const calcOldRegime = (inc) => {
    const std = 50000
    const gross = inc - std - Math.min(hra, 0.4*inc) - Math.min(deductions80C, 150000) - Math.min(nps, 50000)
    const taxable = Math.max(0, gross)
    if (taxable <= 500000) return 0 // rebate
    const slabs = [[250000,0],[250000,0.05],[500000,0.20],[Infinity,0.30]]
    let tax = 0, remaining = taxable - 250000
    for (const [limit, rate] of slabs.slice(1)) {
      if (remaining <= 0) break
      tax += Math.min(remaining, limit) * rate
      remaining -= Math.min(remaining, limit)
    }
    return tax * 1.04
  }

  const tax = regime === 'new' ? calcNewRegime(income) : calcOldRegime(income)
  const monthly = Math.round(tax/12)
  const effective = income > 0 ? ((tax/income)*100).toFixed(1) : 0

  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center">
          <IndianRupee size={18} className="text-brand-accent"/>
        </div>
        <div>
          <h3 className="font-semibold text-brand-navy">India Income Tax Calculator</h3>
          <p className="text-xs text-gray-400">FY 2025-26 | Old & New Regime</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Annual Income (CTC)</label>
          <input type="range" min={200000} max={10000000} step={100000} value={income} onChange={e=>setIncome(+e.target.value)} className="w-full accent-brand-accent mb-1"/>
          <div className="flex justify-between text-xs text-gray-400"><span>₹2L</span><span className="font-bold text-brand-navy">{fmt(income)}</span><span>₹1Cr</span></div>
        </div>

        <div className="flex gap-3">
          <button onClick={()=>setRegime('new')} className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${regime==='new' ? 'bg-brand-accent text-white border-brand-accent' : 'border-gray-200 text-gray-600 hover:border-brand-accent'}`}>New Regime</button>
          <button onClick={()=>setRegime('old')} className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${regime==='old' ? 'bg-brand-accent text-white border-brand-accent' : 'border-gray-200 text-gray-600 hover:border-brand-accent'}`}>Old Regime</button>
        </div>

        {regime === 'old' && (
          <div className="space-y-3 bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Old Regime Deductions</p>
            {[
              {label:'HRA Exemption',val:hra,set:setHra,max:600000},
              {label:'80C (PF, ELSS, PPF...)',val:deductions80C,set:setDeductions80C,max:150000},
              {label:'80CCD(1B) NPS',val:nps,set:setNps,max:50000},
            ].map(({label,val,set,max}) => (
              <div key={label}>
                <div className="flex justify-between text-xs text-gray-600 mb-1"><span>{label}</span><span className="font-medium text-brand-navy">{fmt(Math.min(val,max))}</span></div>
                <input type="range" min={0} max={max} step={1000} value={val} onChange={e=>set(+e.target.value)} className="w-full accent-brand-accent"/>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-brand-navy rounded-2xl p-5 text-white">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-xs text-blue-200 mb-1">Annual Tax</div>
            <div className="font-display text-xl font-bold text-brand-gold">{fmt(tax)}</div>
          </div>
          <div>
            <div className="text-xs text-blue-200 mb-1">Monthly TDS</div>
            <div className="font-display text-xl font-bold text-brand-gold">{fmt(monthly)}</div>
          </div>
          <div>
            <div className="text-xs text-blue-200 mb-1">Effective Rate</div>
            <div className="font-display text-xl font-bold text-brand-gold">{effective}%</div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-white/10 text-center text-xs text-blue-200">
          Includes 4% Health & Education Cess · Includes standard deduction
        </div>
      </div>
    </div>
  )
}

// ——— Gratuity Calculator ———
function GratuityCalc() {
  const [basic, setBasic] = useState(50000)
  const [years, setYears] = useState(7)
  const gratuity = Math.round((basic * 15 * years) / 26)
  const fmt = n => '₹' + Math.round(n).toLocaleString('en-IN')

  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
          <Building size={18} className="text-green-600"/>
        </div>
        <div>
          <h3 className="font-semibold text-brand-navy">Gratuity Calculator</h3>
          <p className="text-xs text-gray-400">Payment of Gratuity Act, 1972</p>
        </div>
      </div>

      <div className="space-y-5 mb-6">
        <div>
          <div className="flex justify-between text-xs text-gray-600 mb-1"><label>Last Drawn Basic + DA (Monthly)</label><span className="font-medium text-brand-navy">{fmt(basic)}</span></div>
          <input type="range" min={10000} max={500000} step={1000} value={basic} onChange={e=>setBasic(+e.target.value)} className="w-full accent-green-500"/>
          <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹10K</span><span>₹5L</span></div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-600 mb-1"><label>Years of Service</label><span className="font-medium text-brand-navy">{years} years</span></div>
          <input type="range" min={5} max={40} step={1} value={years} onChange={e=>setYears(+e.target.value)} className="w-full accent-green-500"/>
          <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5 yrs</span><span>40 yrs</span></div>
        </div>
      </div>

      <div className="bg-green-600 rounded-2xl p-5 text-white text-center">
        <div className="text-xs text-green-100 mb-1">Gratuity Amount</div>
        <div className="font-display text-3xl font-bold text-white">{fmt(gratuity)}</div>
        <div className="text-xs text-green-100 mt-2">Formula: (Basic × 15 × Years) ÷ 26</div>
      </div>
    </div>
  )
}

// ——— NPS Calculator ———
function NPSCalc() {
  const [monthly, setMonthly] = useState(5000)
  const [years, setYears] = useState(20)
  const [returns, setReturns] = useState(10)
  const r = returns / 100 / 12
  const n = years * 12
  const corpus = Math.round(monthly * ((Math.pow(1+r, n) - 1) / r) * (1+r))
  const annuity = Math.round(corpus * 0.4)
  const lumpsum = corpus - annuity
  const fmt = n => '₹' + Math.round(n).toLocaleString('en-IN')

  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
          <TrendingUp size={18} className="text-purple-600"/>
        </div>
        <div>
          <h3 className="font-semibold text-brand-navy">NPS Corpus Calculator</h3>
          <p className="text-xs text-gray-400">National Pension System</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {[
          {label:'Monthly Contribution',val:monthly,set:setMonthly,min:500,max:100000,step:500,fmt:true},
          {label:'Investment Duration',val:years,set:setYears,min:5,max:40,step:1,suffix:' years'},
          {label:'Expected Annual Return',val:returns,set:setReturns,min:6,max:14,step:0.5,suffix:'%'},
        ].map(({label,val,set,min,max,step,fmt:useFmt,suffix}) => (
          <div key={label}>
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <label>{label}</label>
              <span className="font-medium text-brand-navy">{useFmt ? fmt(val) : val+(suffix||'')}</span>
            </div>
            <input type="range" min={min} max={max} step={step} value={val} onChange={e=>set(+e.target.value)} className="w-full accent-purple-500"/>
          </div>
        ))}
      </div>

      <div className="bg-purple-600 rounded-2xl p-5 text-white">
        <div className="text-center mb-3">
          <div className="text-xs text-purple-100 mb-1">Total Corpus at Maturity</div>
          <div className="font-display text-3xl font-bold">{fmt(corpus)}</div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-center text-sm border-t border-white/20 pt-3">
          <div><div className="text-purple-100 text-xs">Lump Sum (60%)</div><div className="font-bold">{fmt(lumpsum)}</div></div>
          <div><div className="text-purple-100 text-xs">Annuity (40%)</div><div className="font-bold">{fmt(annuity)}</div></div>
        </div>
      </div>
    </div>
  )
}

export default function Calculators() {
  return (
    <>
      <PageHero tag="Calculators" title="Free HR & Tax Calculators" subtitle="Quick, accurate tools for payroll professionals, HR teams, and employees to compute statutory obligations." dark={false} />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <IncomeTaxCalc />
          <GratuityCalc />
          <NPSCalc />
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">Calculators are for indicative purposes only. Consult a tax professional for accurate computation. Tax laws subject to change.</p>
      </Section>
    </>
  )
}
