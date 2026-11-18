import { useCallback, useState } from 'react'
import { CaseModal } from './components/CaseModal'
import { Nav } from './components/Nav'
import { Contact, Hero, Journey, Marquee, Services, Work } from './components/Sections'

export default function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const close = useCallback(() => setOpenIndex(null), [])

  return (
    <>
      <a href="#travaux" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Aller aux projets
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee onOpen={setOpenIndex} />
        <Work onOpen={setOpenIndex} />
        <Services />
        <Journey />
      </main>
      <Contact />
      <CaseModal index={openIndex} onClose={close} onNavigate={setOpenIndex} />
    </>
  )
}
