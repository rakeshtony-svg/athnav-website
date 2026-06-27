import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-128px)] flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl font-bold text-brand-accent/20 mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-brand-navy mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary"><Home size={16}/> Go Home</Link>
          <button onClick={() => window.history.back()} className="btn-outline"><ArrowLeft size={16}/> Go Back</button>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 mb-3">Popular pages</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[['Services','/services'],['Countries','/countries'],['About','/about'],['Contact','/contact']].map(([l,h]) => (
              <Link key={h} to={h} className="text-sm text-brand-accent hover:underline">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
