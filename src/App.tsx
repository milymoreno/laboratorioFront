import tw from 'twin.macro'
import 'react-toastify/dist/ReactToastify.css'

import Navigation from './navigation/Index'
import { Link, useLocation } from 'react-router-dom'

// Style components
const Section = tw.div`w-full min-h-screen bg-gray-100 text-gray-700 font-roboto`

const App = () => {
  const location = useLocation()
  const isSelectCreate = location.pathname === '/create'
  const isSelectList = location.pathname === '/'
  return (
    <main>
      <div className="bg-gray-800 p-3 shadow-md w-full text-white fond-bold text-sm flex">
        <div className="ml-auto flex gap-4">
          <Link to={'/'} className={`hover:text-red-500 ${isSelectList && 'text-red-500'} `}>
            Lista de Pacientes
          </Link>
          <Link to={'/create'} className={`hover:text-red-500 ${isSelectCreate && 'text-red-500'} `}>
            Registrar nuevo paciente
          </Link>
        </div>
      </div>
      <Section>
        <Navigation />
      </Section>
    </main>
  )
}

export default App
