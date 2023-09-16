import tw from 'twin.macro'
import 'react-toastify/dist/ReactToastify.css'

import Navigation from './navigation/Index'

// Style components
const Section = tw.div`w-full min-h-screen bg-gray-100 font-roboto`

const App = () => {
  return (
    <main>
      <Section>
        <Navigation />
      </Section>
    </main>
  )
}

export default App
