import type { CSSProperties, ReactNode } from 'react'
import type { VisualKind } from '../data/projects'

const BG: Record<VisualKind, string> = {
  artm: '#FFB938',
  maita: '#143E6E',
  radio: '#FF4FA3',
  tanks: '#24452D',
  mimmen: '#3D5AFE',
  viewer: '#6E4BD8',
}

const mono: CSSProperties = { fontFamily: 'var(--font-mono)' }
const abs = (s: CSSProperties): CSSProperties => ({ position: 'absolute', ...s })

function Dots({ color }: { color: string }) {
  return (
    <div style={{ height: '4.4cqh', display: 'flex', alignItems: 'center', gap: '0.8cqw', padding: '0 1.6cqw', borderBottom: `1px solid ${color}` }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{ width: '1cqw', height: '1cqw', borderRadius: '50%', background: color }} />
      ))}
    </div>
  )
}

function Artm() {
  const rows = [
    ['45%', 'Payé', '#1F8A4C'],
    ['55%', 'Payé', '#1F8A4C'],
    ['38%', 'En attente', '#C9372C'],
    ['50%', 'Payé', '#1F8A4C'],
    ['42%', 'En attente', '#C9372C'],
  ]
  const phone: CSSProperties = {
    width: '24cqw', height: '82cqh', border: '0.6cqw solid #111', borderRadius: '3.6cqw',
    boxSizing: 'border-box', padding: '3.4cqw 2cqw 2cqw', display: 'flex', flexDirection: 'column', gap: '1.4cqw',
  }
  return (
    <div style={abs({ inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6cqw' })}>
      <div style={{ ...phone, background: '#fff', transform: 'rotate(-5deg)' }}>
        <span style={{ fontSize: '2.6cqw', fontWeight: 700 }}>Cotisations</span>
        {rows.map(([w, label, bg], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1cqw', background: '#F4F1EA', borderRadius: '1.2cqw' }}>
            <span style={{ width: w, height: '1.1cqw', background: '#111', opacity: 0.75, borderRadius: '1cqw' }} />
            <span style={{ fontSize: '1.4cqw', fontWeight: 700, padding: '0.4cqw 0.9cqw', borderRadius: '2cqw', background: bg, color: '#fff' }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ ...phone, background: '#111', color: '#fff', gap: '1.6cqw', transform: 'rotate(4deg) translateY(4cqh)' }}>
        <span style={{ fontSize: '2.6cqw', fontWeight: 700 }}>Tableau de bord</span>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '1.2cqw', padding: '1cqw', background: '#1F1F22', borderRadius: '1.4cqw' }}>
          {[40, 65, 50, 85, 70, 95].map((h, i) => (
            <span key={i} style={{ flex: 1, height: `${h}%`, background: '#FFB938', borderRadius: '0.6cqw' }} />
          ))}
        </div>
        <span style={{ height: '5cqh', background: '#FFB938', borderRadius: '1.2cqw' }} />
      </div>
    </div>
  )
}

const BASE_COLORS: Record<string, string> = { A: '#1F8A4C', T: '#C9372C', G: '#111', C: '#2F5BFF' }

function Seq({ str, from, to }: { str: string; from: number; to: number }) {
  return (
    <div style={{ ...mono, display: 'flex', gap: '0.4cqw', fontSize: '2cqw', fontWeight: 700 }}>
      {str.split('').map((b, i) => {
        const hi = i >= from && i <= to
        return (
          <span key={i} style={{ flex: 1, textAlign: 'center', padding: '0.6cqw 0', borderRadius: '0.5cqw', background: hi ? '#03ACAD' : '#F1F4F8', color: hi ? '#fff' : BASE_COLORS[b] }}>
            {b}
          </span>
        )
      })}
    </div>
  )
}

function Maita() {
  return (
    <div style={abs({ left: '8cqw', right: '8cqw', top: '12cqh', bottom: 0, background: '#fff', borderRadius: '1.6cqw 1.6cqw 0 0', display: 'flex', flexDirection: 'column', overflow: 'hidden' })}>
      <Dots color="#E3E8EE" />
      <div style={{ flex: 1, display: 'flex' }}>
        <div style={{ width: '16cqw', background: '#143E6E', padding: '2cqw 1.6cqw', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1.4cqw' }}>
          <span style={{ height: '1.2cqw', width: '70%', background: '#03ACAD', borderRadius: '1cqw' }} />
          {['85%', '60%', '75%'].map((w) => (
            <span key={w} style={{ height: '1cqw', width: w, background: 'rgba(255,255,255,.35)', borderRadius: '1cqw' }} />
          ))}
        </div>
        <div style={{ flex: 1, padding: '2.4cqw', display: 'flex', flexDirection: 'column', gap: '2cqw' }}>
          <span style={{ fontSize: '2.6cqw', fontWeight: 700, color: '#143E6E' }}>Design d'amorces</span>
          <Seq str="ATGCCGTAAGCTTGACGGATCA" from={5} to={12} />
          <Seq str="TACGGCATTCGAACTGCCTAGT" from={14} to={20} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '1.2cqw', marginTop: '1cqw' }}>
            <span style={{ height: '9cqh', background: '#EEF6F6', border: '1px solid #03ACAD', borderRadius: '1cqw' }} />
            <span style={{ height: '9cqh', background: '#F1F4F8', borderRadius: '1cqw' }} />
            <span style={{ height: '9cqh', background: '#F1F4F8', borderRadius: '1cqw' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Radio({ animated }: { animated: boolean }) {
  return (
    <div style={abs({ inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
      <div style={{ ...mono, width: '64cqw', background: '#fff', border: '0.6cqw solid #111', boxShadow: '1.8cqw 1.8cqw 0 #111', padding: '3cqw', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '2.4cqw' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.8cqw', fontWeight: 700 }}>
          <span>● EN DIRECT</span>
          <span style={{ background: '#2F5BFF', color: '#fff', padding: '0.4cqw 1cqw' }}>99.9</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.4cqw' }}>
          <span style={{ width: '8cqw', height: '8cqw', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <span style={{ width: 0, height: 0, borderTop: '1.6cqw solid transparent', borderBottom: '1.6cqw solid transparent', borderLeft: '2.6cqw solid #fff', marginLeft: '0.6cqw' }} />
          </span>
          <div style={{ flex: 1, height: '9cqh', display: 'flex', alignItems: 'flex-end', gap: '0.5cqw' }}>
            {Array.from({ length: 26 }, (_, j) => (
              <span
                key={j}
                data-anim
                style={{
                  flex: 1,
                  height: `${Math.round(25 + 70 * Math.abs(Math.sin(j * 0.55)))}%`,
                  background: j % 5 === 0 ? '#2F5BFF' : '#111',
                  transformOrigin: 'bottom',
                  animation: animated ? `vbar ${(0.5 + (j % 5) * 0.12).toFixed(2)}s ease-in-out infinite alternate` : undefined,
                }}
              />
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1cqw', fontSize: '1.6cqw' }}>
          {['01', '02'].map((n) => (
            <div key={n} style={{ display: 'flex', justifyContent: 'space-between', borderTop: '0.3cqw solid #111', paddingTop: '1cqw' }}>
              <span>ARCHIVE · ÉMISSION {n}</span>
              <span>▶</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Tanks() {
  const arrows = ['→', '↘', '↓', '↗', '→', '→', '↘']
  const tanks = new Set(['2,3', '3,5', '10,2', '11,4'])
  return (
    <div style={abs({ inset: '4cqh 4cqw', display: 'grid', gridTemplateColumns: 'repeat(14, minmax(0,1fr))', gap: '0.6cqw' })}>
      {Array.from({ length: 112 }, (_, i) => {
        const x = i % 14
        const y = Math.floor(i / 14)
        const tank = tanks.has(`${x},${y}`)
        const goal = x === 12 && y === 3
        return (
          <span
            key={i}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.4cqw', fontWeight: 700, borderRadius: '0.6cqw',
              color: tank ? '#FFD23F' : goal ? '#fff' : 'rgba(255,255,255,.45)',
              background: tank || goal ? 'rgba(255,255,255,.12)' : 'rgba(255,255,255,.04)',
            }}
          >
            {tank ? '■' : goal ? '◎' : arrows[(x * 3 + y * 5) % arrows.length]}
          </span>
        )
      })}
    </div>
  )
}

function CamView({ label }: { label: ReactNode }) {
  return (
    <>
      <span style={{ ...mono, position: 'absolute', top: '1.6cqw', left: '1.6cqw', fontSize: '1.6cqw', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '0.6cqw' }}>{label}</span>
      <span style={{ width: '9cqw', height: '9cqw', border: '0.4cqw solid rgba(255,255,255,.7)', borderRadius: '50%' }} />
    </>
  )
}

function Mimmen() {
  return (
    <div style={abs({ inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3cqw' })}>
      <div style={{ width: '20cqw', height: '74cqh', background: '#111', borderRadius: '3.4cqw', padding: '1.4cqw', boxSizing: 'border-box', flex: 'none' }}>
        <div style={{ width: '100%', height: '100%', background: '#2A2D3A', borderRadius: '2.4cqw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CamView label={<><span style={{ width: '1.2cqw', height: '1.2cqw', borderRadius: '50%', background: '#FF3B3B' }} />REC</>} />
        </div>
      </div>
      <div style={{ ...mono, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1cqw', fontSize: '1.6cqw', fontWeight: 700, color: '#fff' }}>
        <span>WebRTC</span>
        <span style={{ width: '12cqw', borderTop: '0.5cqw dashed #fff' }} />
      </div>
      <div style={{ width: '40cqw', height: '54cqh', background: '#fff', borderRadius: '1.6cqw', overflow: 'hidden', display: 'flex', flexDirection: 'column', flex: 'none' }}>
        <Dots color="#DADAE3" />
        <div style={{ flex: 1, margin: '1.6cqw', background: '#2A2D3A', borderRadius: '1cqw', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <CamView label="LIVE" />
        </div>
      </div>
    </div>
  )
}

function Viewer() {
  const floors = [
    ['34cqh', '#fff', 'rgba(255,255,255,.08)'],
    ['24cqh', '#fff', 'rgba(255,255,255,.08)'],
    ['14cqh', '#fff', 'rgba(255,255,255,.08)'],
    ['4cqh', '#FFD23F', 'rgba(255,210,63,.18)'],
  ]
  return (
    <div style={abs({ inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
      <div style={{ position: 'relative', width: '36cqw', height: '70cqh' }}>
        {floors.map(([top, c, bg]) => (
          <span key={top} style={{ position: 'absolute', left: 0, top, width: '36cqw', height: '36cqw', border: `0.45cqw solid ${c}`, background: bg, transform: 'scaleY(0.5) rotate(45deg)', boxSizing: 'border-box' }} />
        ))}
      </div>
      <span style={{ ...mono, position: 'absolute', right: '5cqw', bottom: '6cqh', fontSize: '1.8cqw', fontWeight: 700, color: '#fff', border: '0.3cqw solid #fff', padding: '0.6cqw 1.2cqw' }}>CAM 01 · ORBIT</span>
    </div>
  )
}

export function Visual({ kind, animated = true, className = '' }: { kind: VisualKind; animated?: boolean; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ width: '100%', height: '100%', containerType: 'size', position: 'relative', overflow: 'hidden', background: BG[kind], color: '#111' }}
    >
      {kind === 'artm' && <Artm />}
      {kind === 'maita' && <Maita />}
      {kind === 'radio' && <Radio animated={animated} />}
      {kind === 'tanks' && <Tanks />}
      {kind === 'mimmen' && <Mimmen />}
      {kind === 'viewer' && <Viewer />}
    </div>
  )
}
