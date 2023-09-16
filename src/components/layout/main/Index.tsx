import { ToastContainer } from 'react-toastify'
import { type IMainLayoutProps } from './types'

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  )
}

export default MainLayout
