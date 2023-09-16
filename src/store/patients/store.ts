import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { type IPatientStore } from './types'

const initialData: IPatientStore = {
  patients: [],
}

export const createPatientSlice = () => ({
  ...initialData,
})

// Si quieres persistir el dato utiliza
const storeWithPersist = persist(createPatientSlice, { name: 'patient' }) 
// const store = create(devtools(storeWithPersist))

export const usePatientStore = create(devtools(storeWithPersist, { name: 'patient-store', enabled: true }))
