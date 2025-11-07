import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'How It Works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Refunds', href: '#refunds' },
  { label: 'Hours', href: '#hours' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Campus', href: '#campus' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-colors ${
      scrolled ? 'bg-white/90 backdrop-blur border-b border-gray-200' : 'bg-white'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md" style={{ backgroundColor: '#49cc2b' }} />
            <span className="text-xl font-extrabold tracking-tight" style={{ color: '#0d0f12' }}>
              LiteBites
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/order"
              className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: '#49cc2b' }}
            >
              Paste Your Cart
            </a>
            <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/order"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: '#49cc2b' }}
              onClick={() => setOpen(false)}
            >
              Paste Your Cart
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
