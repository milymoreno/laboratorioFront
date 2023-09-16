import React from 'react'
import {
  ContainerInputForm,
  CustomInput,
  CustomSelect,
  FormGroup,
  MainCenterLayout,
} from '../../../components/ui/containers/styles'
import { LabelForm, MainTitle } from '../../../components/ui/text/styles'
import { type ICreateNewPatient, initPatientValueForm, LABEL_INPUT_FORM } from './initValueForm'
import { NOTIFY } from '../../../utils/notify/Index'
import { CustomButton } from '../../../components/ui/buttons/styled'

const PatientCreatePage = () => {
  const [patientState, setPatientState] = React.useState(initPatientValueForm)

  const fieldsToValidateAverage = ['fatAverage', 'suggarAverage', 'oxygenAverage']

  const allFieldsRequired = [
    'documentType',
    'documentId',
    'firstName',
    'secondName',
    'fatAverage',
    'suggarAverage',
    'oxygenAverage',
  ]

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    let { name, value } = e.target

    // Resetear valores de porcentajes
    if (fieldsToValidateAverage.includes(name)) {
      const valueAverage = parseFloat(value)
      if (valueAverage > 100) {
        value = '100'
      }
    }

    if (fieldsToValidateAverage.includes(name)) {
      const valueAverage = parseFloat(value)
      if (valueAverage < 0) {
        value = '0'
      }
    }

    setPatientState({
      ...patientState,
      [name]: value,
    })
  }

  const handleSubmitForm = () => {
    let isValid = true
    // Crea una lista con todos los campos del formulario
    const keyValueList: Array<{ name: string; value: string }> = Object.entries(patientState).map(
      ([name, value]) => ({ name, value }),
    )

    // Recorre todos estos para verificar si estan vacios
    keyValueList.forEach(object => {
      const key = object.name
      const valueField = patientState[key as keyof ICreateNewPatient].toString().trim()

      if (allFieldsRequired.includes(object.name) && !valueField) {
        NOTIFY.ERROR(`${LABEL_INPUT_FORM[object.name as keyof ICreateNewPatient]} es requerido`)
        isValid = false
      }
    })

    if (isValid) {
      console.log('TODO CORRECTO')
    }
  }

  return (
    <MainCenterLayout>
      <MainTitle>Registrar un nuevo paciente</MainTitle>
      <ContainerInputForm>
        <FormGroup>
          <LabelForm>Tipo de Documento</LabelForm>
          <CustomSelect name="documentType" value={patientState.documentType} onChange={handleChangeInput}>
            <option value="">Selecciona un tipo de documento</option>
            <option value="CC">Cédula</option>
            <option value="CP">Pasaporte</option>
            <option value="CE">Extranjero</option>
          </CustomSelect>
        </FormGroup>
        <FormGroup>
          <LabelForm>Número de documento</LabelForm>
          <CustomInput
            name="documentId"
            value={patientState.documentId}
            autoComplete="false"
            className="border border-gray-300 focus:outline-none p-1 shadow-sm"
            type="number"
            onChange={handleChangeInput}
          />
        </FormGroup>
        <FormGroup>
          <LabelForm>Nombre</LabelForm>
          <CustomInput
            name="firstName"
            value={patientState.firstName}
            autoComplete="false"
            className="border border-gray-300 focus:outline-none p-1 shadow-sm"
            type="text"
            onChange={handleChangeInput}
          />
        </FormGroup>
        <FormGroup>
          <LabelForm>Apellido</LabelForm>
          <CustomInput
            name="secondName"
            value={patientState.secondName}
            autoComplete="false"
            className="border border-gray-300 focus:outline-none p-1 shadow-sm"
            type="text"
            onChange={handleChangeInput}
          />
        </FormGroup>
        <FormGroup>
          <LabelForm>Porcetaje de grasa</LabelForm>
          <CustomInput
            name="fatAverage"
            value={patientState.fatAverage}
            autoComplete="false"
            className="border border-gray-300 focus:outline-none p-1 shadow-sm"
            type="number"
            onChange={handleChangeInput}
          />
        </FormGroup>
        <FormGroup>
          <LabelForm>Porcentaje de Azucar</LabelForm>
          <CustomInput
            name="suggarAverage"
            value={patientState.suggarAverage}
            autoComplete="false"
            className="border border-gray-300 focus:outline-none p-1 shadow-sm"
            type="number"
            onChange={handleChangeInput}
          />
        </FormGroup>
        <FormGroup>
          <LabelForm>Porcentaje de Oxigeno</LabelForm>
          <CustomInput
            name="oxygenAverage"
            value={patientState.oxygenAverage}
            autoComplete="false"
            className="border border-gray-300 focus:outline-none p-1 shadow-sm"
            type="number"
            onChange={handleChangeInput}
          />
        </FormGroup>
        <CustomButton onClick={handleSubmitForm}>Registrar</CustomButton>
      </ContainerInputForm>
    </MainCenterLayout>
  )
}

export default PatientCreatePage
