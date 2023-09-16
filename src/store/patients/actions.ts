import { produce } from 'immer'
import { usePatientStore } from './store'
import { type ICreateNewPatient } from '../../pages/patient/create/initValueForm'
import { type IPatientStore } from './types'

// Actions
const { setState } = usePatientStore

const registerNewPatient = (patient: ICreateNewPatient) => {
  setState(
    produce((state: IPatientStore) => {
      state.patients.push(patient)
    }),
    false,
    'REGISTER_NEW_PATIENT',
  )
}

export const patientActionStore = {
  registerNewPatient,
}
