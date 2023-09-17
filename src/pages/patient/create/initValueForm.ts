export interface ICreateNewPatient {
  document_type: string
  document_id: string
  first_name: string
  second_name: string
  fat_average: string | number
  suggar_average: string | number
  oxygen_average: string | number

}
export const initPatientValueForm: ICreateNewPatient = {
  document_type: '',
  document_id: '',
  first_name: '',
  second_name: '',
  fat_average: '',
  suggar_average: '',
  oxygen_average: '',
}

export const LABEL_INPUT_FORM: ICreateNewPatient = {
  document_type: 'Tipo de documento',
  document_id: 'Numero de documento',
  first_name: 'Nombre',
  second_name: 'Apellido',
  fat_average: 'Porcentaje de grasa',
  suggar_average: 'Porcentaje de azucar',
  oxygen_average: 'Porcentaje de oxigeno',
}
