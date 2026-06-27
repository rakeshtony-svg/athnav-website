import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import PayrollManagement from './pages/services/PayrollManagement'
import HROperations from './pages/services/HROperations'
import ComplianceSupport from './pages/services/ComplianceSupport'
import AdvisoryServices from './pages/services/AdvisoryServices'
import SystemImplementation from './pages/services/SystemImplementation'
import Countries from './pages/Countries'
import CountryPage from './pages/CountryPage'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Calculators from './pages/Calculators'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/payroll-management" element={<PayrollManagement />} />
          <Route path="services/hr-operations" element={<HROperations />} />
          <Route path="services/compliance-support" element={<ComplianceSupport />} />
          <Route path="services/advisory-services" element={<AdvisoryServices />} />
          <Route path="services/system-implementation" element={<SystemImplementation />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:country" element={<CountryPage />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/blog" element={<Blog />} />
          <Route path="resources/blog/:slug" element={<BlogPost />} />
          <Route path="resources/calculators" element={<Calculators />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
