/**
 * El tipo de ruta describe la forma de la matriz de rutas utilizada.
 * para definir el enrutamiento de la aplicación. Nota: admite rutas anidadas
 * pero no se utilizan en este caso.
 */

export interface SingleRouter {
  path: string
  element: JSX.Element
}

// Path: Ruta de la aplicación
// Componente: Pages de React

export type TRoutes = SingleRouter[]
