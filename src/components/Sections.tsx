import type { ReactNode } from 'react'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { useReveal } from './useReveal'
import { Visual } from './Visual'

const wrap = 'mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14'

function Reveal({ children, className = '', as: Tag = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'article' }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}

export function Hero() {
  return (
    <section id="top" className={`${wrap} flex flex-col gap-8 pb-14 pt-10 sm:pt-16 lg:pt-24`}>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-muted">
        <span className="inline-flex items-center gap-2 font-semibold text-ink">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1F9D55] opacity-60" data-anim />
            <span className="relative inline-flex size-2 rounded-full bg-[#1F9D55]" />
          </span>
          Ouvert à une alternance
        </span>
        <span>Marseille, France</span>
        <span>Master DevOps · Bachelor CDA</span>
      </div>
      <h1 className="m-0 text-[clamp(44px,8.4vw,132px)] font-semibold leading-[0.95] tracking-[-0.045em]">
        Développeur full‑stack qui livre du <span className="serif-it text-accent">front</span> jusqu'au{' '}
        <span className="serif-it text-accent">serveur</span>.
      </h1>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <p className="m-0 max-w-[560px] text-lg leading-normal text-body sm:text-xl">
          Applis web en React/TypeScript, apps mobiles en React Native, API Node ou Python, déploiement sur VPS avec Docker. Et un faible pour le jeu vidéo et la 3D.
        </p>
        <a
          href="#travaux"
          className="inline-flex min-h-13 items-center gap-2.5 rounded-full bg-accent px-7 font-bold text-ink transition-transform hover:-translate-y-0.5"
        >
          Voir les projets ↓
        </a>
      </div>
    </section>
  )
}

export function Marquee({ onOpen }: { onOpen: (i: number) => void }) {
  const items = [...projects, ...projects]
  return (
    <section aria-label="Aperçu des projets" className="overflow-hidden pb-16 pt-2 sm:pb-20">
      <ul className="marquee-track m-0 flex w-max list-none gap-4 p-0 sm:gap-5">
        {items.map((p, i) => (
          <li key={i} aria-hidden={i >= projects.length ? true : undefined}>
            <button
              type="button"
              tabIndex={i >= projects.length ? -1 : 0}
              onClick={() => onOpen(i % projects.length)}
              aria-label={`Ouvrir ${p.name}`}
              className="relative block h-[180px] w-[288px] cursor-pointer overflow-hidden rounded-2xl border-0 p-0 transition-transform duration-300 hover:-translate-y-1.5 hover:-rotate-1 sm:h-[238px] sm:w-[380px]"
            >
              <Visual kind={p.id} animated={false} />
              <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-ink">{p.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Work({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <section id="travaux" className={`${wrap} flex flex-col gap-16 pb-24 pt-10 lg:gap-28`}>
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b-[1.5px] border-ink pb-5">
        <h2 className="m-0 text-[clamp(36px,4.6vw,64px)] font-semibold tracking-[-0.04em]">
          Travaux <span className="serif-it">sélectionnés</span>
        </h2>
        <span className="font-mono text-sm text-muted">06 PROJETS · WEB · MOBILE · JEU · INFRA</span>
      </div>

      {projects.map((p, i) => (
        <Reveal as="article" key={p.id} className={`flex flex-wrap items-center gap-x-16 gap-y-8 ${i % 2 ? 'lg:flex-row-reverse' : ''}`}>
          <button
            type="button"
            onClick={() => onOpen(i)}
            aria-label={`Voir l'étude de cas ${p.name}`}
            className="group relative aspect-[16/10] min-w-0 flex-[999_1_560px] cursor-pointer overflow-hidden rounded-[22px] border-0 p-0 sm:rounded-[28px]"
          >
            <div className="size-full transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.035]">
              <Visual kind={p.id} />
            </div>
          </button>
          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-4.5">
            <span className="font-mono text-sm text-muted">
              {String(i + 1).padStart(2, '0')} — {p.category}
            </span>
            <h3 className="m-0 font-serif text-[clamp(44px,5vw,76px)] font-normal leading-[0.95] tracking-[-0.02em]">{p.name}</h3>
            <p className="m-0 text-lg leading-relaxed text-body">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="rounded-full border border-line px-3 py-1.5 text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => onOpen(i)}
              className="mt-1.5 inline-flex min-h-12 cursor-pointer items-center gap-2.5 self-start rounded-full border-[1.5px] border-ink bg-white px-5.5 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Étude de cas →
            </button>
          </div>
        </Reveal>
      ))}
    </section>
  )
}

const services = [
  ['Web & mobile', 'Interfaces React/TypeScript et Tailwind, apps React Native/Expo, modules natifs Android quand il faut.'],
  ['API & données', 'Node.js/Express, Python/FastAPI, modélisation MCD/MPD, MySQL, MongoDB, Prisma.'],
  ['Infra & déploiement', 'VPS Linux, Docker et Docker Compose, Nginx, services systemd, stockage S3. Le cap DevOps du Master.'],
]

export function Services() {
  return (
    <section id="services" className="bg-ink text-white">
      <div className={`${wrap} flex flex-col gap-12 py-24`}>
        <h2 className="m-0 text-[clamp(36px,4.6vw,64px)] font-semibold tracking-[-0.04em]">
          Ce que je <span className="serif-it text-accent-soft">fais</span>
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {services.map(([title, text], i) => (
            <Reveal key={title} className="flex flex-col gap-3.5 border-t border-[#3A3A3A] py-7 pr-7">
              <span className="font-mono text-sm text-accent-soft">0{i + 1}</span>
              <strong className="text-[26px] font-semibold tracking-tight">{title}</strong>
              <p className="m-0 text-[17px] leading-relaxed text-[#C9C9C4]">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  { when: '2021 — 2023', title: 'Licence Informatique L1–L2', where: 'Aix-Marseille Université', hl: false },
  { when: '2023 — 2026', title: 'Bachelor CDA (niveau 6)', where: "La Plateforme, Marseille · 2 ans d'alternance comme développeur à L'Atelier de La Plateforme", hl: false },
  { when: '2026 →', title: 'Master 1 DevOps', where: "En recherche d'une alternance de développeur", hl: true },
]

export function Journey() {
  return (
    <section id="parcours" className={`${wrap} flex flex-col gap-10 py-24`}>
      <h2 className="m-0 text-[clamp(36px,4.6vw,64px)] font-semibold tracking-[-0.04em]">
        Par<span className="serif-it">cours</span>
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
        {steps.map((s) => (
          <Reveal key={s.when} className={`flex flex-col gap-2.5 rounded-3xl p-7 ${s.hl ? 'bg-accent' : 'bg-paper'}`}>
            <span className={`font-mono text-sm ${s.hl ? 'text-ink' : 'text-muted'}`}>{s.when}</span>
            <strong className="text-[22px] font-semibold">{s.title}</strong>
            <span className={`text-base ${s.hl ? 'text-ink' : 'text-body'}`}>{s.where}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  const btn = 'inline-flex min-h-[54px] items-center rounded-full px-7 text-[17px] font-semibold transition-colors'
  const outline = `${btn} border-[1.5px] border-ink hover:bg-ink hover:text-white`
  return (
    <footer id="contact" className="px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 rounded-[32px] bg-accent px-6 pb-9 pt-12 text-ink sm:px-14 sm:pt-24">
        <h2 className="m-0 text-[clamp(48px,8vw,128px)] font-semibold leading-[0.92] tracking-[-0.05em]">
          Travaillons <span className="serif-it">ensemble.</span>
        </h2>
        <p className="m-0 max-w-[560px] text-lg leading-normal">
          Je cherche une alternance de développeur en parallèle de mon Master DevOps. Une équipe à rejoindre ? Écris-moi.
        </p>
        <div className="flex flex-wrap gap-3">
          {site.email && (
            <a href={`mailto:${site.email}`} className={`${btn} bg-ink text-white hover:bg-white hover:text-ink`}>
              {site.email}
            </a>
          )}
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noreferrer" className={outline}>
              LinkedIn
            </a>
          )}
          {site.github && (
            <a href={site.github} target="_blank" rel="noreferrer" className={outline}>
              GitHub
            </a>
          )}
          {site.cv && (
            <a href={site.cv} className={outline} download>
              CV (PDF)
            </a>
          )}
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t-[1.5px] border-ink pt-6 text-sm font-medium">
          <span>© {new Date().getFullYear()} Abakar Issa · Marseille</span>
          <span>Construit avec React, TypeScript et beaucoup de thé.</span>
        </div>
      </div>
    </footer>
  )
}
