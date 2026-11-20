
import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// @ts-expect-error Global CSS is loaded for its side effects by the app bundler.
import '../styles/global.css'

const queryClient  =  new QueryClient()

export default function RootLayout() { 
    return (
        <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='login' />
                <Stack.Screen name='register' />
            </Stack>
        </QueryClientProvider>
    )
}