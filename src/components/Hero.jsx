import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            Authorized Agent • Secure Payments • Refunds if not delivered
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
          <div className="mt-6 text-sm text-gray-600">
            2,000+ 5-star savings • Apple Pay / Visa • Authorize.net
          </div>
        </div>
        <div className="relative h-[420px] w-full rounded-2xl">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{
            background: 'radial-gradient(60% 60% at 50% 40%, rgba(73,204,43,0.08) 0%, rgba(73,204,43,0) 60%)'
          }} />
          <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow">
            Platform Total $33.97 vs LiteBites Price $19.88
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm text-gray-600">
          <div>Authorized Agent</div>
          <div>Secure Payments</div>
          <div>2,000+ 5-star savings</div>
          <div>Refunds if not delivered</div>
        </div>
      </div>
    </section>
  )
}
