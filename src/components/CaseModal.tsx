import { useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import { Visual } from './Visual'

type Props = {
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function CaseModal({ index, onClose, onNavigate }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const open = index !== null

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNavigate((index! + 1) % projects.length)
      if (e.key === 'ArrowLeft') onNavigate((index! - 1 + projects.length) % projects.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, index, onNavigate])

  const p = index !== null ? projects[index] : null
  const num = index !== null ? String(index + 1).padStart(2, '0') : ''

  return (
    <dialog
      ref={ref}
      aria-labelledby="case-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto max-h-[92dvh] w-[calc(100%-24px)] max-w-[980px] overflow-hidden rounded-[28px] bg-white p-0 text-ink backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
    >
      {p && (
        <div key={p.id} className="modal-in flex max-h-[92dvh] flex-col overflow-y-auto">
          <div className="relative aspect-video flex-none">
            <Visual kind={p.id} />
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 inline-flex size-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 3l12 12M15 3L3 15" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8 p-6 sm:p-10">
            <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-4">
              <span className="font-mono text-sm text-muted">
                {num} — {p.category}
              </span>
              <h3 id="case-title" className="m-0 font-serif text-5xl leading-[0.95] sm:text-6xl">
                {p.name}
              </h3>
              <p className="m-0 text-lg leading-relaxed text-body">{p.description}</p>
              <strong className="pt-2 text-[15px] font-semibold">Ce que j'ai fait</strong>
              <ul className="m-0 flex list-disc flex-col gap-2 pl-5 text-base leading-normal text-body">
                {p.role.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-[1_1_240px] flex-col gap-3.5">
              <strong className="text-[15px] font-semibold">Stack</strong>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1.5 text-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-line px-6 py-4 sm:px-10">
            <button
              type="button"
              onClick={() => onNavigate((index! - 1 + projects.length) % projects.length)}
              className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 font-semibold hover:bg-paper"
            >
              ← <span className="hidden sm:inline">{projects[(index! - 1 + projects.length) % projects.length].name}</span><span className="sm:hidden">Précédent</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate((index! + 1) % projects.length)}
              className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 font-semibold hover:bg-paper"
            >
              <span className="hidden sm:inline">{projects[(index! + 1) % projects.length].name}</span><span className="sm:hidden">Suivant</span> →
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}
