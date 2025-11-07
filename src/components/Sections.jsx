import { Shield, Timer, CreditCard, MapPin, ArrowRight, Sparkles, CheckCircle, Building2, Lock, Star, Play, Filter, Globe2 } from 'lucide-react'
import { useMemo } from 'react'

// Wrapper component to keep App lean while still exporting Footer
export default function LandingSections() {
  return (
    <>
      <HowItWorks />
      <WhyThisWorks />
      <RealProof />
      <RefundsSecurity />
      <HoursCoverage />
      <CTASection />
      <CampusAmbassador />
    </>
  )
}

export function HowItWorks() {
  const steps = [
    { icon: CreditCard, title: 'Build Cart', text: 'Add items on UberEats or DoorDash like normal.' },
    { icon: ArrowRight, title: 'Paste Link', text: 'Drop your cart URL and delivery address.' },
    { icon: Shield, title: 'We Order as Agent', text: 'We place the order on your behalf and pass back savings.' },
    { icon: Timer, title: 'Track & Receive', text: 'Typical processing 12–18 minutes.' },
  ]
  return (
    <section id="how" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold" style={{ color: '#0d0f12' }}>How It Works</h2>
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

        {/* Mini demo preview */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-4 md:p-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Play className="h-4 w-4" /> See it in action
          </div>
          <div className="mt-3 aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
            <img src="https://images.unsplash.com/photo-1701099153776-d67d645ae43b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMaXRlQml0ZXMlMjBkZW1vfGVufDB8MHx8fDE3NjI1NTI3NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="LiteBites demo" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhyThisWorks() {
  const bullets = [
    { title: 'Platform Fees', text: 'We bypass inflated delivery markups.' },
    { title: 'Direct Ordering', text: 'We route orders directly where possible.' },
    { title: 'MoR & Tax', text: 'We act as your Merchant of Record for clear pricing.' },
    { title: 'Price Guard', text: 'If savings fall below 20%, you can cancel or we refund the difference.' },
  ]
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold" style={{ color: '#0d0f12' }}>Why This Works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {bullets.map((b) => (
            <div key={b.title} className="rounded-2xl border border-gray-200 p-6 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Testimonial slider (simple auto grid for now) */}
        <div className="mt-12 rounded-3xl bg-gray-50 p-6">
          <h3 className="text-xl font-semibold text-gray-900">What customers say</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Saved 42% on my sushi order in NYC. Seamless. – Andrea',
              'Popeyes in Boston, 15 minutes from paste to courier. – Malik',
              'They actually refunded when it was delayed. Respect. – Priya',
            ].map((t) => (
              <div key={t} className="rounded-2xl bg-white p-5 ring-1 ring-gray-200 shadow-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-700">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function RealProof() {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    src: `https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=900&auto=format&fit=crop`,
  }))
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold" style={{ color: '#0d0f12' }}>Real orders. Real savings.</h2>
        <p className="mt-2 text-gray-600">See how users save 20–60% every day.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.id} className="overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-white">
              <img src={it.src} alt="Receipt savings" className="h-56 w-full object-cover" />
              <div className="p-4 text-sm text-gray-700 flex items-center justify-between">
                <span>Platform $32.70</span>
                <span className="font-semibold" style={{ color: '#2b7a1a' }}>LiteBites $19.40</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a href="#reviews" className="inline-flex items-center justify-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900">
            View More Savings
          </a>
        </div>
      </div>
    </section>
  )
}

export function RefundsSecurity() {
  return (
    <section id="security" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold" style={{ color: '#0d0f12' }}>Refunds & Protection</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Full refund guarantee</h3>
            <p className="mt-2 text-sm text-gray-600">Full refund for undelivered or canceled orders.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Price Guard</h3>
            <p className="mt-2 text-sm text-gray-600">If savings fall below 20%, you can cancel or we refund the difference.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Secure processing</h3>
            <p className="mt-2 text-sm text-gray-600">PCI-level encryption and trusted processors.</p>
            <div className="mt-4 flex items-center gap-3 text-xs text-gray-600">
              <img className="h-6" src="https://images.unsplash.com/photo-1615130104765-c140bd3c2c45?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXRob3JpemUubmV0fGVufDB8MHx8fDE3NjI1NTI3NzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Authorize.net" />
              <img className="h-6" src="https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJpcGV8ZW58MHwwfHx8MTc2MjU1Mjc3NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Stripe" />
              <img className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/256px-Apple_Pay_logo.svg.png" alt="Apple Pay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HoursCoverage() {
  return (
    <section id="hours" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-700">
            <span className="mr-2 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">Open Now</span>
            Mon–Sat 12 PM – 11 PM ET • Typical Processing 12–18 min
          </div>
          <a href="#coverage" className="inline-flex items-center justify-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900">View coverage map and live status</a>
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

export function CampusAmbassador() {
  return (
    <section id="campus" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: '#0d0f12' }}>Bring LiteBites to your campus. Get perks.</h2>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              <li>• Share a referral link</li>
              <li>• Earn bonus credits</li>
              <li>• Compete on a leaderboard</li>
            </ul>
            <a href="#apply" className="mt-6 inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900">Apply Now</a>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
            <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop" alt="Campus" className="rounded-xl object-cover w-full h-64" />
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
            <li><a href="#" className="hover:text-gray-900">Discord</a></li>
            <li className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.953 14.01-14.01 14.01-2.785 0-5.374-.816-7.554-2.223.387.045.759.06 1.161.06a9.91 9.91 0 006.144-2.115 4.955 4.955 0 01-4.625-3.435c.302.045.604.075.92.075.438 0 .876-.06 1.285-.166a4.948 4.948 0 01-3.964-4.855v-.06c.662.363 1.43.589 2.242.62a4.94 4.94 0 01-2.204-4.115c0-.92.24-1.77.666-2.506a14.06 14.06 0 0010.23 5.196 5.585 5.585 0 01-.121-1.134 4.945 4.945 0 018.554-3.383 9.72 9.72 0 003.137-1.2 4.94 4.94 0 01-2.173 2.727 9.887 9.887 0 002.848-.757 10.63 10.63 0 01-2.471 2.543z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-900">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.5 5.5 0 0012 7.5zm0 2A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 9.5zm6.75-3.75a1 1 0 11-1 1 1 1 0 011-1z"/></svg>
              </a>
              <a href="#" aria-label="TikTok" className="text-gray-500 hover:text-gray-900">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12.5 3a7.5 7.5 0 005.5 2.4V9a11 11 0 01-5.5-1.5V15a5 5 0 11-5-5 5.1 5.1 0 011.5.23V12a3 3 0 103 3V3z"/></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} LiteBites. Prices vary by market.
      </div>
    </footer>
  )
}
