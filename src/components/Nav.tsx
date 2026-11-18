import { useEffect, useState } from 'react'

const links = [
  { href: '#travaux', label: 'Travaux' },
  { href: '#services', label: 'Ce que je fais' },
  { href: '#parcours', label: 'Parcours' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${scrolled || open ? 'border-b border-line bg-white/90 backdrop-blur' : 'bg-white'}`}
    >
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-14">
        <a href="#top" className="text-lg font-bold tracking-tight">
          Abakar Issa<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-2 text-[15px] font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="inline-flex min-h-11 items-center rounded-full px-4 transition-colors hover:bg-ink hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 font-semibold text-white transition-colors hover:bg-accent hover:text-ink">
            Me contacter
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M3 3l12 12M15 3L3 15" /> : <path d="M2 5h14M2 13h14" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {[...links, { href: '#contact', label: 'Me contacter' }].map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center border-b border-line text-2xl font-semibold tracking-tight">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
