'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Startseite', href: '#home' },
  { label: 'Über uns', href: '#about' },
  { label: 'Aktivitäten', href: '#activities' },
  { label: 'Speisekarte', href: '#menu' },
  { label: 'Öffnungszeiten', href: '#hours' },
  { label: 'Kontakt', href: '#contact' },
]

const activities = [
  { title: 'Billard', detail: '8 Olio-Tische', image: '/images/lounge-4.jpg' },
  { title: 'Kicker', detail: '2 Leonhart-Tische', image: '/images/lounge-2.jpg' },
  { title: 'Dart', detail: '2 Elektronik-Darts', image: '/images/lounge-3.jpg' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <main id="home" className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Rondo Sportsbar Startseite">
          <img className="brand-logo" src="/images/rondo-logo-outlined.png" alt="Rondo Sportsbar" />
        </a>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Hauptnavigation">
          <div className="menu-links">
            {navItems.map((item, index) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}
          </div>
          <div className="menu-footer">
            <div><span>Besuch uns</span><p>Otto-Hahn-Str. 18<br />63456 Hanau</p><a href="tel:+4961819698950">+49 6181 9698950</a></div>
            <a className="yellow-button" href="#reservation" onClick={() => setMenuOpen(false)}>Platz sichern <ArrowUpRight size={17} /></a>
          </div>
        </nav>
        <div className="header-actions">
          <a className="social-link" href="https://www.instagram.com/" aria-label="Rondo auf Instagram"><span className="social-word">IG</span></a>
          <a className="outline-button small" href="#reservation">Reservierung <ArrowUpRight size={15} /></a>
        </div>
        <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker"><span /> Hanau · Sportsbar & Restaurant</p>
          <h1 id="hero-title">Rondo<br /><i>loves</i><br />sports.</h1>
          <p className="hero-lede">Leckeres Essen, gute Laune und Live-Sport auf dem großen Screen. Komm rein, fühl dich wohl.</p>
          <div className="hero-actions"><a className="yellow-button" href="#reservation">Platz sichern <ArrowUpRight size={17} /></a><a className="underlined-link" href="#about">Entdecke Rondo <ChevronDown size={16} /></a></div>
        </div>
        <div className="hero-image-wrap"><img src="/images/video-preview.jpg" alt="Atmosphäre und Live-Sport in der Rondo Sportsbar" /><div className="hero-image-overlay"><span>Live-Sport</span><strong>Come in.<br /><i>Feel good.</i></strong></div><div className="hero-scroll">01 <span /></div></div>
      </section>

      <section id="about" className="intro-section content-grid">
        <p className="section-index">01 <span>Über Rondo</span></p>
        <div><h2>Dein Wohnzimmer<br /><i>für große Spiele.</i></h2><p className="body-copy">Mit einem Besuch in unserer Bar garantieren wir dir leckeres Essen, gute Laune und ein unvergessliches Erlebnis für die ganze Familie. Durch unseren 140-Zoll-LED-TV sowie 8 weitere TVs entsteht eine einzigartige Atmosphäre, die schon fast an einen Stadionbesuch erinnert.</p><p className="body-copy">Wir übertragen nahezu alle Live-Spiele: Bundesliga, DFB-Pokal, Champions- & Europa-League, Serie A, NFL, Tennis und Handball. Vor dem Eingang befinden sich zusätzlich 400 kostenfreie Parkplätze.</p></div>
      </section>

      <section id="activities" className="activities-section">
        <div className="section-heading"><p className="section-index">02 <span>Time for action</span></p><h2>Mehr als<br /><i>nur zuschauen.</i></h2><p className="body-copy">Buche dir und deinen Freunden einen Platz auf einem unserer Billardtische, Tischkicker oder Elektronik-Darts.</p></div>
        <div className="activity-grid">{activities.map((activity, index) => <article className="activity-card" key={activity.title}><img src={activity.image} alt={`${activity.title} in der Rondo Sportsbar`} /><div className="activity-meta"><span>0{index + 1}</span><div><h3>{activity.title}</h3><p>{activity.detail}</p></div><ArrowUpRight size={20} /></div></article>)}</div>
      </section>

      <section id="menu" className="menu-section content-grid"><p className="section-index">03 <span>Speisekarte</span></p><div className="menu-layout"><div><h2>Food für<br /><i>jeden Spielstand.</i></h2><p className="body-copy">Von saftigen Burgern und knusprigen Snacks bis zu frischen Salaten: Unsere Speisekarte passt zum großen Spiel und zum langen Abend.</p></div><div className="menu-highlights"><div><span>01</span><strong>Rondo Burger</strong><em>mit Pommes</em></div><div><span>02</span><strong>Loaded Fries</strong><em>der perfekte Spielbegleiter</em></div><div><span>03</span><strong>Drinks & Cocktails</strong><em>kalt, frisch, unkompliziert</em></div><a className="underlined-link" href="#contact">Karte & Fragen <ArrowUpRight size={16} /></a></div></div></section>

      <section id="reservation" className="reservation-section"><div><p className="kicker dark"><span /> Reservierung im Rondo</p><h2>Dein Platz.<br /><i>Dein Spiel.</i></h2></div><div className="reservation-copy"><p>Du möchtest die Matches deiner Lieblingsmannschaft auf unserem 140-Zoll-LED-Screen und auf unseren 8 weiteren Screens genießen? Dann reserviere dir jetzt deinen Platz.</p><a className="dark-button" href="tel:+4961819698950">Jetzt reservieren <ArrowUpRight size={17} /></a></div></section>

      <section id="hours" className="hours-section content-grid"><p className="section-index">04 <span>Öffnungszeiten</span></p><div className="hours-layout"><h2>Come in —<br /><i>feel good.</i></h2><div className="hours-list"><div><span>Mo – Do</span><strong>16:00 – 00:00 Uhr</strong></div><div><span>Freitag</span><strong>16:00 – 02:00 Uhr</strong></div><div><span>Samstag</span><strong>14:00 – 02:00 Uhr</strong></div><div><span>Sonntag</span><strong>14:00 – 00:00 Uhr</strong></div></div></div></section>

      <section className="gallery-section"><div className="gallery-copy"><p className="section-index">04 <span>Private Feiern</span></p><h2>Dein Event.<br /><i>Unser Rondo.</i></h2><p className="body-copy">Geburtstagsfeier, JGA, Firmen-Event, Tagung oder Weihnachtsfeier: Für größere Gruppen ab 11 Personen bieten wir verschiedene Lösungen an.</p><a className="underlined-link" href="#contact">Mehr erfahren <ArrowUpRight size={16} /></a></div><div className="gallery-grid"><img src="/images/lounge-1.jpg" alt="Sitzbereich der Rondo Sportsbar" /><img src="/images/lounge-5.jpg" alt="Innenraum der Rondo Sportsbar" /><img src="/images/lounge-2.jpg" alt="Rondo Sportsbar Atmosphäre" /></div></section>

      <footer id="contact" className="site-footer"><div className="footer-top"><div><a className="brand" href="#home" aria-label="Rondo Sportsbar Startseite"><img className="brand-logo" src="/images/rondo-logo-outlined.png" alt="Rondo Sportsbar" /></a><p className="footer-tagline">Good food. Great people.<br />Live-Sport in Hanau.</p></div><div><p className="footer-label">Besuch uns</p><p>Otto-Hahn-Str. 18<br />63456 Hanau, Deutschland</p><a className="footer-link" href="tel:+4961819698950">+49 6181 9698950</a></div><div><p className="footer-label">Folge uns</p><a className="footer-link" href="https://www.instagram.com/">Instagram <ArrowUpRight size={14} /></a><p className="footer-label footer-label-spaced">Fragen?</p><a className="footer-link" href="#reservation">Reservieren <ArrowUpRight size={14} /></a></div></div><div className="footer-bottom"><span>© 2026 Rondo Sportsbar</span><span><a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a></span></div></footer>
    </main>
  )
}
