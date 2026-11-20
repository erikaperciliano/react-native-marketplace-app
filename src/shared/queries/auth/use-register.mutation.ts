import { useMutation } from '@tanstack/react-query';
import { RegisterHttpParams } from '../../interfaces/http/register'
import * as authService from '../../services/auth.service'

export const useRegisterMutation = () => {
    const mutation = useMutation({
        mutationFn: (userDate: RegisterHttpParams) => authService.register(userDate),
        onSuccess: (response) => {
            console.log(response)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return mutation
}