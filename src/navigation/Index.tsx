import { Route, Routes } from 'react-router-dom'
import { type TRoutes as RoutesDefinition } from './types'
import { routes as appRoutes } from './Routes'
import MainLayout from '../components/layout/main/Index'

const generateRouter = (theRoutes: RoutesDefinition, parentPath = '') =>
  theRoutes.map(({ path, element }) => (
    <Route
      key={`${parentPath}${path}`}
      path={path}
      element={<MainLayout parentPath={parentPath}>{element}</MainLayout>}
    />
  ))

const Navigation = () => <Routes>{generateRouter(appRoutes)}</Routes>

export default Navigation
