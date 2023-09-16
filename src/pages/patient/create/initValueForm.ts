export interface ICreateNewPatient {
  documentType: string
  documentId: string
  firstName: string
  secondName: string
  fatAverage: string | number
  suggarAverage: string | number
  oxygenAverage: string | number

}
export const initPatientValueForm: ICreateNewPatient = {
  documentType: '',
  documentId: '',
  firstName: '',
  secondName: '',
  fatAverage: '',
  suggarAverage: '',
  oxygenAverage: '',
}

export const LABEL_INPUT_FORM: ICreateNewPatient = {
  documentType: 'Tipo de documento',
  documentId: 'Numero de documento',
  firstName: 'Nombre',
  secondName: 'Apellido',
  fatAverage: 'Porcentaje de grasa',
  suggarAverage: 'Porcentaje de azucar',
  oxygenAverage: 'Porcentaje de oxigeno',
}
