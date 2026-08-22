import { lazy, Suspense, useState, useCallback, useEffect } from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Logo from './Components/Logo'
import './index.css'
import ScrollReveal from './Components/ScrollReveal'
import { ReactLenis, useLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import { LazyMotion, domMax, AnimatePresence } from 'framer-motion'
import PageLoader from './Components/PageLoader'
import PrivacyPolicyModal from './Components/PrivacyPolicyModal'

import LoadingFallback from './Components/common/LoadingFallback'

const EmbedProject = lazy(() => import('./Components/EmbedProject'))
const CaseStudies = lazy(() => import('./Components/CaseStudies'))
const Process = lazy(() => import('./Components/Process'))
const Clients = lazy(() => import('./Components/Clients'))
const CTA = lazy(() => import('./Components/CTA'))
const Footer = lazy(() => import('./Components/Footer'))

function App() {
  const [loading, setLoading] = useState(true)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const handleLoaderComplete = useCallback(() => setLoading(false), [])
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return;

    if (showPrivacy) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [showPrivacy, lenis])

  return (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1.2 }}>
      <LazyMotion features={domMax} strict>
        {/* Page Loader — sits on top as a full-screen overlay */}
        {loading && <PageLoader onComplete={handleLoaderComplete} />}

        {/* Main site — always rendered at full opacity; loader covers it */}
        <div className="app-container">
          <Hero />
          <main id="main-content">

            {/* Client Logo Strip — subtle fade in */}
            <div className="logo-reveal-container">
              <ScrollReveal variant="fade-in" duration={0.9} margin="-40px">
                <Logo />
              </ScrollReveal>
            </div>

            <Suspense fallback={<LoadingFallback />}>

              {/* Work / Projects grid — scale-up for a cinematic reveal */}
              <ScrollReveal variant="scale-up" duration={0.9} margin="-60px">
                <EmbedProject />
              </ScrollReveal>

              {/* Case Studies — slides in from left for a directional feel */}
              <ScrollReveal variant="slide-left" duration={0.8} margin="-60px">
                <CaseStudies />
              </ScrollReveal>

              {/* Process — slides in from right, feels like a new chapter */}
              <ScrollReveal variant="slide-right" duration={0.8} margin="-60px">
                <Process />
              </ScrollReveal>

            </Suspense>

            {/* About — slides up */}
            <ScrollReveal variant="fade-up" duration={0.85} delay={0.05}>
              <About />
            </ScrollReveal>

            <Suspense fallback={<LoadingFallback />}>

              {/* Clients / Testimonial — gentle fade-up */}
              <ScrollReveal variant="fade-up" duration={0.75} delay={0.05} margin="-60px">
                <Clients />
              </ScrollReveal>

              {/* CTA — scale-up for punch */}
              <ScrollReveal variant="scale-up" duration={0.85} margin="-40px">
                <CTA />
              </ScrollReveal>

            </Suspense>
          </main>
          <Suspense fallback={null}>
            {/* Footer — simple fade in from below */}
            <ScrollReveal variant="fade-up" duration={0.7} margin="0px">
              <Footer onPrivacyClick={() => setShowPrivacy(true)} />
            </ScrollReveal>
          </Suspense>
          
          <AnimatePresence>
            {showPrivacy && (
              <PrivacyPolicyModal
                isOpen={showPrivacy}
                onClose={() => setShowPrivacy(false)}
              />
            )}
          </AnimatePresence>
        </div>
      </LazyMotion>
    </ReactLenis>
  )
}

export default App
