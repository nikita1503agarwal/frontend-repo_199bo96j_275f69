import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LandingSections, { Footer } from './components/Sections'

function isOpenNowET(date = new Date()) {
  // Convert to ET (assumes user env in UTC offset handling via toLocaleString)
  const etString = date.toLocaleString('en-US', { timeZone: 'America/New_York' })
  const et = new Date(etString)
  const day = et.getDay() // 0 Sun ... 6 Sat
  const hour = et.getHours()
  const mins = et.getMinutes()

  const isOpenDay = day >= 1 && day <= 6 // Mon-Sat
  const open = 12
  const close = 23
  const current = hour + mins / 60
  return isOpenDay && current >= open && current < close
}

function App() {
  const open = isOpenNowET()

  return (
    <div className="font-inter bg-white text-gray-900">
      <Navbar />

      {/* Floating status badge */}
      <div className="fixed right-4 top-20 z-40">
        <div
          className={`${open ? 'bg-emerald-100 text-emerald-800 ring-emerald-200' : 'bg-amber-100 text-amber-800 ring-amber-200'} shadow-sm ring-1 rounded-full px-3 py-1 text-xs font-semibold`}
        >
          {open ? '✅ Open Now' : '⏸ Paused'}
        </div>
      </div>

      <main>
        <Hero />
        <LandingSections />
      </main>
      <Footer />
    </div>
  )
}

export default App
