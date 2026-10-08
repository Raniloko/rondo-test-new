import Link from 'next/link'

export default function Impressum() {
  return <main className="legal-page"><Link href="/" className="legal-back">← Zurück zu Rondo</Link><p className="kicker dark"><span /> Rechtliches</p><h1>Impressum</h1><section><h2>Rondo Sportsbar</h2><p>Otto-Hahn-Str. 18<br />63456 Hanau, Deutschland</p><p>Telefon: <a href="tel:+4961819698950">+49 6181 9698950</a></p><h2>Kontakt</h2><p>Bitte nutze für Reservierungen und Anfragen den telefonischen Kontakt während unserer Öffnungszeiten.</p><p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV ist der Betreiber der Rondo Sportsbar.</p></section></main>
}
