import Link from 'next/link'

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">← Zurück zur Startseite</Link>
      <p className="kicker"><span /> Rechtliches</p>
      <h1>Impressum</h1>
      <div className="legal-copy">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>Rondo Sportsbar & Restaurant<br />Otto-Hahn-Str. 18<br />63456 Hanau<br />Deutschland</p>
        <h2>Kontakt</h2>
        <p>Telefon: <a href="tel:+4961819698950">+49 6181 9698950</a><br />E-Mail: Bitte die offizielle Rondo-Adresse ergänzen.</p>
        <h2>Vertretungsberechtigte Person</h2>
        <p>Bitte den vollständigen Namen der vertretungsberechtigten Person ergänzen.</p>
        <h2>Hinweis</h2>
        <p>Diese Angaben sind vor der Veröffentlichung rechtlich zu prüfen und mit den vollständigen Unternehmensdaten zu ergänzen.</p>
      </div>
    </main>
  )
}

export const metadata = { title: 'Impressum — Rondo Sportsbar' }

export const dynamic = 'force-static'

// The legal content is intentionally isolated so it can be reviewed and completed before launch.
