// Para definir ruta, crea un enum con sus respectivos path, luego concatena ese enum con Eroutes para tener
// Todas las rutas en una constante y acceder mas rapido a estas. La razón por la cual creamos estas rutas en un enum
// Y luego las concatenamos es para tener un orden en cada una de estas rutas y ubicarlas de manera mas comoda.

export enum EPatientRoutes {
    'patientCreate' = 'create/',
    'patientDetail' = 'patient/:id',
  }
  
  export const ERoutes = {
    ...EPatientRoutes,
    home: '',
    notFound: '*',
  }
  