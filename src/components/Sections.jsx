import { Shield, Timer, CreditCard, MapPin, ArrowRight, Sparkles, CheckCircle, Building2, Lock } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    { icon: CreditCard, title: 'Build your cart', text: 'Add items on UberEats or DoorDash like normal.' },
    { icon: ArrowRight, title: 'Paste the link', text: 'Drop your cart URL and delivery address.' },
    { icon: Shield, title: 'We order as your agent', text: 'We place the order on your behalf and pass back savings.' },
    { icon: Timer, title: 'Track & receive', text: 'Typical processing 12–18 minutes.' },
  ]
  return (
    <section id="how" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold" style={{ color: '#0d0f12' }}>How it works</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: '#e9f9e5', color: '#49cc2b' }}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyThisWorks() {
  const bullets = [
    { title: 'Platform fees', text: 'We avoid inflated delivery fees and markups that platforms add.' },
    { title: 'Direct ordering', text: 'We route to optimal channels and share the savings with you.' },
    { title: 'MoR & tax', text: 'We act as authorized agent and Merchant of Record for clear pricing.' },
  ]
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold" style={{ color: '#0d0f12' }}>Why this works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {bullets.map((b) => (
            <div key={b.title} className="rounded-2xl border border-gray-200 p-6 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 md:p-12 text-center text-white shadow-lg" style={{ background: 'linear-gradient(90deg, #49cc2b, #37a31f)' }}>
          <h3 className="text-2xl font-bold">Ready to save on your next order?</h3>
          <p className="mt-2 text-white/90">Paste your cart and we’ll show an estimated LiteBites price.</p>
          <div className="mt-6">
            <a href="/order" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold" style={{ color: '#0d0f12' }}>
              Paste Your Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md" style={{ backgroundColor: '#49cc2b' }} />
            <span className="text-lg font-extrabold" style={{ color: '#0d0f12' }}>LiteBites</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">Save on the same food you love. Authorized agent. Secure checkout.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
            <li><a href="#refunds" className="hover:text-gray-900">Refunds</a></li>
            <li><a href="#hours" className="hover:text-gray-900">Hours</a></li>
            <li><a href="#security" className="hover:text-gray-900">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#terms" className="hover:text-gray-900">Terms</a></li>
            <li><a href="#privacy" className="hover:text-gray-900">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>support@litebites.io</li>
            <li>Discord</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} LiteBites. All rights reserved. Prices vary by market.
      </div>
    </footer>
  )
}
