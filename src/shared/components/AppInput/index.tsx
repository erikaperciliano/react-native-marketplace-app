
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
    const { 
        getIconColor,
        handleBlur,
        handleFocus,
        handlePasswordToggle,
        handleWrapperPress,
        showPassword,
        handleTextChange,
        isFocused,
    } = useAppInputViewModel({
        onBlur,
        onFocus,
        isError: !!error,
        mask,
        onChangeText,
        isDisabled: !!isDisabled,
        secureTextEntry,
        value,
    })

    const styles = appInputVariants({
        isFocused,
        isDisabled,
        isError: !!error,
    })

    return (
        <View className={styles.container({ className: containerClassName })}>
            <Text className={styles.label()}>{label}</Text>
            <Pressable className={styles.wrapper()}>
                { 
                    leftIcon && (
                        <Ionicons
                            color={getIconColor()}
                            className='mr-3'
                            size={22}
                            name={leftIcon}
                        />
                    )
                }

                <TextInput
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onChangeText={handleTextChange}
                    className={styles.input()}
                    value={value}
                    secureTextEntry={showPassword}
                    {...textInputProps}
                />

                { 
                    secureTextEntry && (
                         <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordToggle}>
                            <Ionicons size={22} name={showPassword ? 'eye-outline' : 'eye-off-outline'} />
                        </TouchableOpacity>
                    )
                }

            </Pressable>

            {
                error && (
                    <Text className={styles.error()}>
                        <Ionicons name='alert-circle-outline' /> {error}
                    </Text>
                )
            }

        </View>
    )
}