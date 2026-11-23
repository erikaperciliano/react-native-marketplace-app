import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema, RegisterFormData } from './register.schema'
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation'
import { useUserStore } from '../../shared/store/user-store';

export const useRegisterViewModel = () => {
    const userRegisterMutation = useRegisterMutation()
    const { setSession, user } = useUserStore()

    const { control, handleSubmit, formState: { errors }, } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            phone: '22222222222',
            confirmPassword: '12345678',
            email: 'teste3teste@gmail.com',
            name: 'teste3',
            password: '12345678',
        }
    })

    const onSubmit = handleSubmit(async(userData) => {
        const { confirmPassword, ...registerData } = userData
        const mutationResponse = await userRegisterMutation.mutateAsync(registerData)

        
        setSession({
            refreshToken: mutationResponse.refreshToken,
            token: mutationResponse.token,
            user: mutationResponse.user,
        })
    })

    console.log('estado atual na store:', useUserStore.getState().user)


    return {
        control,
        errors,
        onSubmit,
    }
}