import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { columnsPatient } from './columns'
import { usePatientStore } from '../../../store/patients/store'
import { LabelForm, MainTitle } from '../../../components/ui/text/styles'
import { type ICreateNewPatient } from '../create/initValueForm'
import { CustomInput, FormGroup } from '../../../components/ui/containers/styles'

const PatientListPage = () => {
  const patientState = usePatientStore(state => state.patients)
  const [filterText, setFilterText] = useState('') // Estado para el término de búsqueda

  const paginationPerPage = 10
  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  }

  const handleRowClicked = (row: ICreateNewPatient) => {
    console.log('Fila clickeada:', row)
  }

  const filteredData = patientState.filter((patient: ICreateNewPatient) => {
    // Filtrar por el nombre y otros campos que desees aquí
    return patient.firstName.toLowerCase().includes(filterText.toLowerCase())
  })

  return (
    <div className="flex flex-col gap-3 items-center pt-20">
      <MainTitle>Lista de pacientes</MainTitle>
      <div className="w-[80%] mx-auto shadow-md flex flex-col gap-2">
        <FormGroup>
          <LabelForm>Filtrar por nombre</LabelForm>
          <CustomInput
            type="text"
            placeholder="Buscar por nombre..."
            value={filterText}
            onChange={e => {
              setFilterText(e.target.value)
            }}
            className="w-full md:w-96"
          />
        </FormGroup>
        <DataTable
          columns={columnsPatient}
          data={filteredData}
          paginationPerPage={paginationPerPage}
          paginationComponentOptions={paginationComponentOptions}
          onRowClicked={handleRowClicked}
          pagination
        />
      </div>
    </div>
  )
}

export default PatientListPage
