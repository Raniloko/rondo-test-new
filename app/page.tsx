'use client'

import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Über uns', href: '#about' },
  { label: 'Speisekarte', href: '#menu' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main id="home" className="site-shell">
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Rondo Sportsbar Startseite">
          <span className="brand-mark">R</span>
          <span>RONDO<span className="brand-dot">.</span></span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Hauptnavigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        </nav>
        <a href="#reservation" className="header-cta">Tisch reservieren <span>↗</span></a>
        <button className="menu-toggle" aria-label="Menü öffnen" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Sportsbar &amp; Restaurant</p>
          <h1>Dein Spiel.<br /><em>Dein Abend.</em></h1>
          <p className="hero-text">Live-Sport, ehrliches Essen und die besten Abende der Stadt. Willkommen im Rondo.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#reservation">Jetzt reservieren <span>↗</span></a>
            <a className="text-link" href="#menu">Speisekarte ansehen <span>→</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Atmosphäre im Rondo Sportsbar">
          <div className="visual-glow" />
          <div className="visual-card card-top"><span>LIVE</span><strong>SPORT</strong></div>
          <div className="visual-card card-bottom"><span>01</span><strong>Good food.<br />Great people.</strong></div>
          <div className="visual-silhouette" />
          <div className="hero-stamp">EST.<br /><strong>2014</strong></div>
        </div>
        <div className="scroll-note"><span>Scroll to explore</span><span className="scroll-arrow">↓</span></div>
      </section>

      <section id="about" className="intro-section section-grid">
        <p className="section-label">01 / Das Rondo</p>
        <div className="intro-content"><h2>Mehr als nur<br /><em>ein Spiel.</em></h2><p>Das Rondo ist dein Wohnzimmer für große Spiele, gute Drinks und noch bessere Gesellschaft. Seit 2014 bringen wir Menschen zusammen — bei jedem Wetter, zu jedem Spiel.</p><a className="text-link" href="#contact">Mehr über uns <span>→</span></a></div>
      </section>

      <section id="menu" className="menu-section section-grid">
        <p className="section-label">02 / Auf den Tisch</p>
        <div className="menu-content"><h2>Einfach<br /><em>lecker.</em></h2><div className="menu-list"><div><span>01</span><strong>Rondo Burger</strong><b>14,90 €</b></div><div><span>02</span><strong>Loaded Fries</strong><b>8,90 €</b></div><div><span>03</span><strong>Fresh Drinks</strong><b>ab 6,50 €</b></div></div><a className="button button-outline" href="#contact">Komplette Karte <span>↗</span></a></div>
      </section>

      <section id="reservation" className="reservation-section"><div><p className="eyebrow"><span className="eyebrow-line" /> Dein Platz ist frei</p><h2>Bereit für<br /><em>den Anpfiff?</em></h2></div><a className="button button-light" href="tel:+490000000000">Tisch reservieren <span>↗</span></a></section>

      <footer id="contact" className="footer"><div className="footer-brand"><a href="#home" className="brand"><span className="brand-mark">R</span><span>RONDO<span className="brand-dot">.</span></span></a><p>Sportsbar &amp; Restaurant<br />Dein Treffpunkt für gute Zeiten.</p></div><div className="footer-col"><p className="footer-label">Besuch uns</p><p>Musterstraße 42<br />12345 Musterstadt</p></div><div className="footer-col"><p className="footer-label">Öffnungszeiten</p><p>Mo — Do&nbsp;&nbsp; 17:00 — 00:00<br />Fr — So&nbsp;&nbsp; 15:00 — 02:00</p></div><div className="footer-bottom"><span>© 2024 Rondo Sportsbar</span><span>Instagram&nbsp;&nbsp; / &nbsp;&nbsp;Impressum</span></div></footer>
    </main>
  )
}
