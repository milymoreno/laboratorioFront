// sum.test.js
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import PatientListPage from '../pages/patient/list/Index'

describe('PatientListPage', () => {
  test('render list patient', () => {
    render(<PatientListPage />)
    expect(screen.getByText('Lista de pacientes')).toBeDefined()
  })
})
