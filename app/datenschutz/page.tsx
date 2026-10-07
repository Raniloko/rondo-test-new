import Link from 'next/link'

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">← Zurück zur Startseite</Link>
      <p className="kicker"><span /> Rechtliches</p>
      <h1>Datenschutz</h1>
      <div className="legal-copy">
        <h2>Verantwortlicher</h2>
        <p>Rondo Sportsbar & Restaurant<br />Otto-Hahn-Str. 18<br />63456 Hanau<br />Deutschland</p>
        <h2>Kontakt und Reservierung</h2>
        <p>Bei einer telefonischen Reservierung werden die von dir mitgeteilten Daten ausschließlich zur Bearbeitung deiner Anfrage und zur Tischreservierung verwendet. Bitte ergänze hier die tatsächlich eingesetzten Reservierungs- und Analyse-Dienste.</p>
        <h2>Technische Daten</h2>
        <p>Beim Aufruf dieser Website können technisch notwendige Serverdaten verarbeitet werden. Die konkreten Hosting-, Analyse- und Drittanbieter-Dienste müssen vor Veröffentlichung vollständig ergänzt und rechtlich geprüft werden.</p>
        <h2>Deine Rechte</h2>
        <p>Du hast grundsätzlich Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Beschwerde bei einer Datenschutzaufsichtsbehörde.</p>
        <p className="legal-note">Hinweis: Diese Vorlage muss vor dem Livegang mit den vollständigen Betreiberangaben und allen tatsächlich eingesetzten Diensten durch eine fachkundige Stelle geprüft werden.</p>
      </div>
    </main>
  )
}

export const metadata = { title: 'Datenschutz — Rondo Sportsbar' }

export const dynamic = 'force-static'
