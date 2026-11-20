import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema, RegisterFormData } from './register.schema'
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation'
import axios from 'axios';

export const useRegisterViewModel = () => {
    const userRegisterMutation = useRegisterMutation()

    const { control, handleSubmit, formState: { errors }, } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            phone: '11111111111',
            confirmPassword: '1231231234',
            email: 'teste2@gmail.com',
            name: 'teste2',
            password: '1231231234',
        }
    })

    const onSubmit = handleSubmit(async(userData) => {
        const { confirmPassword, ...registerData } = userData
        await userRegisterMutation.mutateAsync(registerData)
    })

    return {
        control,
        errors,
        onSubmit,
    }
}