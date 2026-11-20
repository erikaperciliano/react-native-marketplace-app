import { FC } from 'react';
import { View, Text } from 'react-native'
import { useRegisterViewModel } from './useRegister.viewModel'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({  userDate }) => {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text>{userDate.name}</Text>
        </View>
    )
}