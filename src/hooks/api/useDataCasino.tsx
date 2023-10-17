import { useQuery } from "@tanstack/react-query"
import { casinoApi } from "../../api/casinoApi"
import { ResponseCasino } from "../../interface/casino"




const getDataCasino= async(): Promise<ResponseCasino> => {
    const {data} = await casinoApi.get<ResponseCasino>(`/casino/1`)
    return data
}

export const useDataCasino =() => {
  
    const dataCasinoQuery= useQuery(
        ['casinoData'],
        getDataCasino,
        {
            staleTime:Infinity
        }
    )



    return dataCasinoQuery

}