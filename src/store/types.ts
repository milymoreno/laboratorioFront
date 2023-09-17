import { type ICreateNewPatient } from '../pages/patient/create/initValueForm'

export interface IGetAllPatients {
  message?: string
  success?: boolean
  data?: ICreateNewPatient[]
}

export interface IResponseGetAllPatients {
  data: IGetAllPatients
}
