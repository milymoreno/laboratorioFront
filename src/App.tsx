import tw from 'twin.macro'

const Title = tw.p`text-red-500`
const App = () => {
  return <div>
    <p className="bg-blue-500">Hola mundo</p>
    <Title>Testeando Twin Macro</Title>
  </div>
}

export default App
