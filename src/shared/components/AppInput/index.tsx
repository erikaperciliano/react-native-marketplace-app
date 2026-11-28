
import {  FC } from 'react'
import {
    Pressable,
    TextInput,
    Text,
    TouchableOpacity,
    View,
    TextInputProps,
} from 'react-native'
import { appInputVariants, AppInputVariantsProps } from './input.variants'
import { Ionicons } from '@expo/vector-icons'
import { useAppInputViewModel } from '../useAppInputViewModel';

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
    label?: string
    leftIcon?: keyof typeof Ionicons.glyphMap
    rightIcon?: keyof typeof Ionicons.glyphMap
    containerClassName?: string
    mask?: (value: string) => void | string
    onChangeText?: (value: string) => void | string
    error?: string
}

export const AppInput: FC<AppInputProps> = ({
    label,
    leftIcon,
    rightIcon,
    containerClassName,
    className,
    mask,
    value,
    isError,
    secureTextEntry = false,
    onBlur,
    onFocus,
    onChangeText,
    error,
    isDisabled,
    ...textInputProps
}) => {
    const { } = useAppInputViewModel({
        error,
        onBlur,
        onFocus,
        isError: !!error,
        mask,
        onChangeText,
        isDisabled: !!isDisabled,
        secureTextEntry,
        value,
    })

    const styles = appInputVariants()

    return (
        <View className={styles.container({ className: containerClassName })}>
            <Text className={styles.label()}>Label</Text>
            <Pressable className={styles.wrapper()}>
                <Ionicons size={22} name='person' />

                <TextInput className={styles.input()}  {...textInputProps} />

                <TouchableOpacity>
                    <Ionicons  size={22} name='eye-off-outline' />
                </TouchableOpacity>
            </Pressable>

        </View>
    )
}