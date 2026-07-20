import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './sections/Hero'
import Nosotros from './sections/Nosotros'
import Productos from './sections/Productos'
import Clientes from './sections/Clientes'
import Tecnologias from './sections/Tecnologias'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

function HomePage() {
  useEffect(() => {
    const sectionId = window.location.hash.slice(1)
    if (sectionId) document.getElementById(sectionId)?.scrollIntoView()
  }, [])

  return (
    <div className="app">
      <Header />
      <main className="home-main">
        <Hero />
        <Nosotros />
        <Productos />
        <Clientes />
        <Tecnologias />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

function LegalPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacidaddatos" element={<LegalPage><PrivacyPolicy /></LegalPage>} />
      <Route path="/terminoscondiciones" element={<LegalPage><TermsAndConditions /></LegalPage>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
