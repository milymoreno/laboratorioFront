import { type ICreateNewPatient } from '../create/initValueForm'

export const columnsPatient = [
  {
    name: 'Tipo de documento',
    selector: (row: ICreateNewPatient) => row.document_type,
  },
  {
    name: 'Numero de documento',
    selector: (row: ICreateNewPatient) => row.document_id,
  },
  {
    name: 'Nombre',
    selector: (row: ICreateNewPatient) => row.first_name,
  },
  {
    name: 'Apellido',
    selector: (row: ICreateNewPatient) => row.second_name,
  },
  {
    name: '% Grasa',
    selector: (row: ICreateNewPatient) => row.fat_average,
  },
  {
    name: '% Azucar',
    selector: (row: ICreateNewPatient) => row.suggar_average,
  },
  {
    name: '% Oxigeno',
    selector: (row: ICreateNewPatient) => row.oxygen_average,
  },
  {
    name: 'Nivel de Riesgo',
    selector: (row: ICreateNewPatient) => row.risk,
  },
]
