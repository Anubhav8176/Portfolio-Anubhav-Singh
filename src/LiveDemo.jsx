import { useState, useRef, useEffect } from 'react'

const SAMPLES = [
  { title: 'Filter coffee', amount: 180, category: 'Food' },
  { title: 'Auto-rickshaw', amount: 60, category: 'Travel' },
  { title: 'Groceries', amount: 940, category: 'Food' },
  { title: 'Phone recharge', amount: 299, category: 'Bills' },
  { title: 'Course book', amount: 450, category: 'Learning' },
]

const shortId = () =>
  (globalThis.crypto?.randomUUID?.() ?? Math.random().toString(16).slice(2) + '0000000000')
    .replace(/-/g, '')
    .slice(0, 8)

const inr = (n) => '₹' + n.toLocaleString('en-IN')

export default function LiveDemo() {
  const [items, setItems] = useState([])
  const [log, setLog] = useState(null)
  const [busy, setBusy] = useState(false)
  const next = useRef(0)
  const timers = useRef([])

  const add = () => {
    if (busy) return
    const sample = SAMPLES[next.current % SAMPLES.length]
    next.current += 1
    setBusy(true)
    setLog({ stage: 'sending', sample })
    timers.current.push(
      setTimeout(() => {
        const created = { id: shortId(), ...sample, created_at: new Date().toISOString() }
        setItems((prev) => [created, ...prev].slice(0, 4))
        setLog({ stage: 'done', sample, created })
        setBusy(false)
      }, 650)
    )
  }

  // Play the first request once so the demo is alive on load.
  useEffect(() => {
    const t = setTimeout(add, 900)
    timers.current.push(t)
    return () => timers.current.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const total = items.reduce((s, i) => s + i.amount, 0)

  return (
    <div className="demo" aria-label="Interactive demo: an Android app talking to its API">
      <div className="phone">
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">
          <p className="app-label">This month</p>
          <p className="app-total">{inr(total)}</p>
          <ul className="app-list" aria-live="polite">
            {items.length === 0 && <li className="app-empty">No expenses yet. Add one below.</li>}
            {items.map((it) => (
              <li key={it.id} className="app-row">
                <span>
                  <strong>{it.title}</strong>
                  <small>{it.category}</small>
                </span>
                <span>{inr(it.amount)}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="app-add" onClick={add} disabled={busy}>
            {busy ? 'Saving…' : 'Add expense'}
          </button>
        </div>
      </div>

      <div className="wire" aria-hidden="true">
        <span className={busy ? 'pulse on' : 'pulse'} />
      </div>

      <div className="term">
        <div className="term-bar">
          <span>Server</span>
          <span className="term-hint">Tap the button on the phone</span>
        </div>
        <pre className="term-body">
          {!log && <span className="dim">Waiting for a request…</span>}
          {log && (
            <>
              <span className="k">POST</span> /expenses{'\n'}
              <span className="dim">{`{ "title": "${log.sample.title}", "amount": ${log.sample.amount} }`}</span>
              {'\n\n'}
              {log.stage === 'sending' ? (
                <span className="dim">Saving…</span>
              ) : (
                <>
                  <span className="ok">201 Created</span>
                  {'\n'}
                  {JSON.stringify(
                    { id: log.created.id, title: log.created.title, amount: log.created.amount, category: log.created.category },
                    null,
                    2
                  )}
                </>
              )}
            </>
          )}
        </pre>
      </div>
    </div>
  )
}
