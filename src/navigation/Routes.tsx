import NotFoundPage from '../pages/notFound/Index'
import PatientCreatePage from '../pages/patient/create/Index'
import PatientListPage from '../pages/patient/list/Index'
import { ERoutes } from './navigationRoutes'
import { type TRoutes } from './types'

// Patient Routes
const patientRoutes: TRoutes = [
  {
    path: ERoutes.patientCreate,
    element: <PatientCreatePage />,
  },
]

const defaultRoutes: TRoutes = [
  {
    path: ERoutes.home,
    element: <PatientListPage />,
  },

  {
    path: ERoutes.notFound,
    element: <NotFoundPage />,
  },
]
export const routes: TRoutes = [...patientRoutes, ...defaultRoutes]
