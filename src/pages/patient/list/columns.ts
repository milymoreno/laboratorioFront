import { type ICreateNewPatient } from '../create/initValueForm'

export const columnsPatient = [
  {
    name: 'Tipo de documento',
    selector: (row: ICreateNewPatient) => row.documentType,
  },
  {
    name: 'Numero de documento',
    selector: (row: ICreateNewPatient) => row.documentId,
  },
  {
    name: 'Nombre',
    selector: (row: ICreateNewPatient) => row.firstName,
  },
  {
    name: 'Apellido',
    selector: (row: ICreateNewPatient) => row.secondName,
  },
  {
    name: '% Grasa',
    selector: (row: ICreateNewPatient) => row.fatAverage,
  },
  {
    name: '% Azucar',
    selector: (row: ICreateNewPatient) => row.suggarAverage,
  },
  {
    name: '% Oxigeno',
    selector: (row: ICreateNewPatient) => row.oxygenAverage,
  },
]
