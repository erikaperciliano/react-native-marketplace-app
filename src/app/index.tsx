import { Redirect } from 'expo-router';

export default function App() { 
    const userData = {
        token: 'sdfsfsdfsdfs',
        name: 'User teste',
    }

    if(userData) {
        return <Redirect href={'/(private)/home'}/>
    }

    return <Redirect href={'/login'}/>
}