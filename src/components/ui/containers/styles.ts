import tw from 'twin.macro'

export const MainCenterLayout = tw.div`
w-full
min-h-screen
flex
flex-col
items-center
justify-center
gap-3
`

export const ContainerInputForm = tw.div`
bg-white shadow-md w-[100%] md:w-[35rem] flex flex-col gap-4 p-10
`

export const FormGroup = tw.div`
flex flex-col gap-1
`

export const CustomInput = tw.input`
border border-gray-300 focus:outline-none p-1 shadow-sm
`
export const CustomSelect = tw.select`
border border-gray-300 focus:outline-none p-1 shadow-sm bg-white p-2
`