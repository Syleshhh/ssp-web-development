import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { ScrollManager } from './components/layout/ScrollManager'
import Home from './pages/Home'

// Home is bundled with the entry (first paint); other routes load on demand.
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  return (
    <>
      <ScrollManager />
      <Layout>
        {/* Reserve a viewport of height so the footer doesn't jump while a lazy page loads. */}
        <Suspense fallback={<div className="min-h-[150vh]" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            {/* Any unknown route redirects to the home page. */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}
