import { useState } from 'react'

export const useRegisterViewModel = () => {
    const [userDate, setUserDate] = useState({
        name: 'Erika'
    })

    return {
        userDate,
        setUserDate,
    }
}