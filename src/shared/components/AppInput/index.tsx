
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

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
    label?: string
    leftIcon?: keyof typeof Ionicons.glyphMap
    rightIcon?: keyof typeof Ionicons.glyphMap
    containerClassName?: string
    mask?: (value: string) => void | string
}

export const AppInput: FC<AppInputProps> = ({  label, leftIcon, rightIcon, containerClassName, className, mask, ...textInputProps }) => {
    const styles = appInputVariants({

    })

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