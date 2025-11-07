import Spline from '@splinetool/react-spline'
import { ShieldCheck, Clock, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          {/* Badge row */}
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            <span>Authorized Agent</span>
            <span>•</span>
            <span>Secure Payments</span>
            <span>•</span>
            <span>Refunds if not delivered</span>
            <span>•</span>
            <span>Avg 12–18 min processing</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight" style={{ color: '#0d0f12' }}>
            Save up to <span style={{ color: '#49cc2b' }}>60%</span> on food delivery
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Paste your UberEats or DoorDash cart. We place the order as your authorized purchasing agent and pass the savings back to you.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/order"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md"
              style={{ backgroundColor: '#49cc2b' }}
            >
              Paste Your Cart → Get Price
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-gray-900 bg-white border border-gray-200">
              See How It Works
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-6 text-sm text-gray-600">
            10,000+ orders processed • Apple Pay • Visa • Secure Checkout
          </div>
        </div>

        {/* Right: animated split receipt mock with Spline background */}
        <div className="relative h-[440px] w-full rounded-2xl">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Soft lighting + brand glow that doesn't block Spline interactions */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{
            background: 'radial-gradient(60% 60% at 50% 40%, rgba(73,204,43,0.10) 0%, rgba(73,204,43,0) 65%)'
          }} />

          {/* Split receipt card */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-4 bg-white/80 backdrop-blur rounded-xl p-4 ring-1 ring-black/5 shadow-xl">
            <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
              <div className="text-xs uppercase tracking-wide text-gray-500">Platform Total</div>
              <div className="mt-1 text-2xl font-bold text-gray-900">$33.97</div>
            </div>
            <div className="rounded-lg p-4 ring-1 ring-emerald-200" style={{ backgroundColor: '#e9f9e5' }}>
              <div className="text-xs uppercase tracking-wide" style={{ color: '#2b7a1a' }}>LiteBites Price</div>
              <div className="mt-1 text-2xl font-extrabold" style={{ color: '#2b7a1a' }}>$19.88</div>
              <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                <CheckCircle2 className="h-3 w-3" /> You save 41%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Under-hero trust row */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm text-gray-600">
          <div>Authorized Agent</div>
          <div>Secure Payments</div>
          <div>Refunds if not delivered</div>
          <div>Avg 12–18 min processing</div>
        </div>
      </div>
    </section>
  )
}
