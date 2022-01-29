import customAxios from "./CustomAxios"

export const baseUrl = "https://swift-trade-v1.herokuapp.com/api/v1/"

export const sendCustomAxios = async (method: any, path: any, data?: any, tempData?: any) => {
    // const token = await getToken()
    const {response, error} = await customAxios({
        method, url: baseUrl + path ,
        // headers: {'Authorization': `Bearer ${token}`},
        data
    })
    return {response, error}
}