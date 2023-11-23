import { useEffect, useState } from "react"
import { apiClient } from "../utils/client";

export const useGetIndexTokenData = (address: string) => {
    const [price, setPrice] = useState(0);
    const [tvl, setTVL] = useState(0);
    useEffect(() => {
        if (price === 0) {
            apiClient.get<number>(`/index/indexPrice?address=${address}`).then((data) => {
                setPrice(data.data)
            })
        }
        if (tvl === 0) {
            apiClient.get<number>(`/index/totalSupply?address=${address}`).then((data) => {
                setTVL(data.data * price)
            })
        }
    }, [price, tvl, address])
    return [price, tvl];
}