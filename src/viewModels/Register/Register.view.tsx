import { FC, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useRegisterViewModel } from './useRegister.viewModel'
import { AppInput } from '../../shared/components/AppInput';

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({ onSubmit }) => {
    const [email, setEmail] = useState('')

    return (
        <View className='flex-1 items-center justify-center'>
            <AppInput
                label='E-mail'
                value={email}
                leftIcon='mail-outline'
                onChangeText={setEmail}
                error='E-mail inválido'
            />
            <AppInput label='Senha' leftIcon='lock-closed-outline' />
            <TouchableOpacity  onPress={() => onSubmit()}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}