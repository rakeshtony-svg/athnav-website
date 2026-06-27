import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin } from 'lucide-react'
import { PageHero, Section } from '../components/ui/index.jsx'

const ENQUIRY_TYPES = ['Payroll Management','HR Operations','Compliance Support','Advisory Services','System Implementation','General Enquiry']
const COUNTRIES = ['India','UAE','Singapore','Philippines','United Kingdom','United States','Multiple Countries']

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', country: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to submit");
    }

    setSubmitted(true);
  } catch (err) {
    console.error(err);
    alert("Unable to send your enquiry. Please try again.");
  } finally {
    setLoading(false);
  }
};

  if (submitted) return (
    <div className="card p-10 text-center">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={32} className="text-green-500"/>
      </div>
      <h3 className="font-display text-2xl font-bold text-brand-navy mb-2">Message Sent!</h3>
      <p className="text-gray-500">Thank you for reaching out. Our team will get back to you within 1 business day.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-5">
      <h2 className="font-display text-2xl font-bold text-brand-navy">Send Us a Message</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Full Name *</label>
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Rajesh Sharma" className="input-field"/>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Work Email *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="rajesh@company.com" className="input-field"/>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Company Name</label>
          <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company Pvt. Ltd." className="input-field"/>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="input-field"/>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Country / Region</label>
          <select name="country" value={form.country} onChange={handleChange} className="input-field">
            <option value="">Select country...</option>
            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Service Interested In</label>
          <select name="service" value={form.service} onChange={handleChange} className="input-field">
            <option value="">Select service...</option>
            {ENQUIRY_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1.5">Message *</label>
        <textarea required name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your payroll and HR requirements..." className="input-field resize-none"/>
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60">
        {loading ? 'Sending...' : <><Send size={16}/> Send Message</>}
      </button>
      <p className="text-xs text-gray-400 text-center">We typically respond within 1 business day.</p>
    </form>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero tag="Contact Us" title="Let's Start a Conversation" subtitle="Whether you need a quick payroll quote or a full HR transformation — we're here to help." />

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <div className="space-y-5">
            <div className="card p-6">
              <h3 className="font-semibold text-brand-navy mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-brand-accent"/>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Email</div>
                    <a href="mailto:info@athnav.com" className="text-sm text-brand-navy hover:text-brand-accent">info@athnav.com</a><br/>
                    <a href="mailto:rakesh.kumar@athnav.com" className="text-xs text-gray-400 hover:text-brand-accent">rakesh.kumar@athnav.com</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-brand-accent"/>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Phone</div>
                    <a href="tel:+919968445365" className="text-sm text-brand-navy hover:text-brand-accent">+91 9968 44 5365</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-brand-accent"/>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Office</div>
                    <div className="text-sm text-brand-navy">Noida, Delhi NCR, India</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-brand-accent"/>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Working Hours</div>
                    <div className="text-sm text-brand-navy">Mon–Fri: 9:00 AM – 6:30 PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-brand-navy mb-3">What Happens Next?</h3>
              <div className="space-y-3">
                {['We review your enquiry within 4 business hours','A payroll expert reaches out to understand your needs','We prepare a tailored proposal within 2 days','You get onboarded within one payroll cycle'].map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-[10px] font-bold">{i+1}</div>
                    <span className="text-sm text-gray-600">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-5 bg-brand-navy text-white">
              <Linkedin size={20} className="text-brand-gold mb-2"/>
              <p className="text-sm text-blue-100 mb-3">Follow us on LinkedIn for payroll compliance updates and HR insights.</p>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-primary bg-brand-gold text-brand-navy text-sm py-2 w-full justify-center">Follow on LinkedIn</a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
