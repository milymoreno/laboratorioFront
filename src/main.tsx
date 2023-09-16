import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Como estamos usando client-side-rendering es posible que el elemento root no esté disponible por alguna situación, creamos esta validacion para saber en caso de que suceda.
const renderApp = (rootElement: HTMLElement | null) => {
  if (rootElement === null) {
    console.error("El elemento con ID 'root' no se encontró en el documento.")
    return
  }

  const mainApp = (
    <React.Suspense>
      <App />
    </React.Suspense>
  )

  const rootInstance = ReactDOM.createRoot(rootElement)
  rootInstance.render(mainApp)
}

const root = document.getElementById('root')
renderApp(root)
