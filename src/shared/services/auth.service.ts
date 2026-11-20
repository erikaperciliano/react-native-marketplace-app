import { marketPlaceApiClient } from "../api/market-place";
import { RegisterHttpParams, RegisterHttpResponse } from "../interfaces/http/register";

export const register = async(userDate: RegisterHttpParams) => {
    const { data } = await marketPlaceApiClient.post<RegisterHttpResponse>(
        '/auth/register',
        userDate,
    )

    return data
}