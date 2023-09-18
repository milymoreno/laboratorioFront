import { produce } from 'immer'
import { usePatientStore } from './store'
import { type ICreateNewPatient } from '../../pages/patient/create/initValueForm'
import { type IPatientStore } from './types'
import axios from 'axios'
import { type IResponseGetAllPatients } from '../types'

const apiURL = 'https://laboratorio-back.onrender.com'

// Actions
const { setState } = usePatientStore

const getAllPatient = async () => {
  try {
    const response: IResponseGetAllPatients = await axios.get(`${apiURL}/patients`)
    setState(
      produce((state: IPatientStore) => {
        state.patients = response.data?.data ?? []
      }),
      false,
      'GET_ALL_PATIENTS',
    )
  } catch (error) {
    console.error('Error al obtener pacientes:', error)
    throw error // Maneja cualquier error que ocurra durante la solicitud
  }
}

const createNewPatient = async (patient: ICreateNewPatient) => {
  try {
    const response:IResponseGetAllPatients = await axios.post(`${apiURL}/patients`, patient)
    return response.data
  } catch (error) {
    console.error('Error al crear un nuevo paciente:', error)
    throw error // Maneja cualquier error que ocurra durante la solicitud
  }
}
export const patientActionStore = {
  getAllPatient,
  createNewPatient,
}
