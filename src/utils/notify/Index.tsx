import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const errorNotify = (msg: string) => {
  toast.error(msg, {
    position: 'top-center',
    autoClose: 3000,
    toastId: 'error',
  })
}

const successNotify = (msg: string) => {
  toast.success(msg, {
    position: 'top-center',
    autoClose: 3000,
    toastId: 'success',
  })
}

const promiseNotify = async (
  promiseFunction: Promise<void>,
  deactivateElement?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  deactivateElement && deactivateElement(true)
  await toast
    .promise(promiseFunction, {
      pending: 'Loading',
    })
    .finally(() => {
      deactivateElement && deactivateElement(false)
    })
}

export const NOTIFY = {
  ERROR: errorNotify,
  SUCCESS: successNotify,
  PROMISE: promiseNotify,
}
