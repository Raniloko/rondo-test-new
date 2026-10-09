import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weihnachtsfeier in Hanau | RondoSport',
  description: 'Planen Sie Ihre Firmenweihnachtsfeier in Hanau bei RondoSport. À la carte oder Gruppenangebot, exklusive Buchung möglich. Jetzt unverbindlich anfragen.',
  openGraph: {
    title: 'Weihnachtsfeier in Hanau | RondoSport',
    description: 'Firmenweihnachtsfeiern, Teamabende und Jahresabschluss bei RondoSport in Hanau.',
    type: 'website',
    locale: 'de_DE',
    images: [{ url: '/images/rondo-hero.jpg', width: 1600, height: 1200, alt: 'Rondo Sportsbar in Hanau' }],
  },
}

export default function WeihnachtsfeierLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
