import './index.css'
import Header from './components/Header'
import WhatsAppBtn from './components/WhatsAppBtn'
import Hero from './sections/Hero'
import Nosotros from './sections/Nosotros'
import Productos from './sections/Productos'
import Clientes from './sections/Clientes'
import Tecnologias from './sections/Tecnologias'
import Demos from './sections/Demos'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <WhatsAppBtn />
      <main>
        <Hero />
        <Nosotros />
        <Productos />
        <Clientes />
        <Tecnologias />
        <Demos />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App