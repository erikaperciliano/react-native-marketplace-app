import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema, RegisterFormData } from './register.schema'

export const useRegisterViewModel = () => {
    const { constrol, handleSubmit, formState: { errors }, } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            phone: '',
            confirmPassword: '',
            email: '',
            name: '',
            password: '',
        }
    })

    const onSubmit = handleSubmi(({}) => {})

    return {
        control,
        erros,
        onSubmit,
    }
}