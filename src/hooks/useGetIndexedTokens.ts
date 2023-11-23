import { useEffect, useState } from "react"
import { IndexedToken } from "../types"
import { apiClient } from "../utils/client";
import { tokensData } from "../tokens";

export const useGetIndexedTokens = (address: string) => {
    const [tokens, setTokens] = useState<IndexedToken[]>([]);

    useEffect(() => {
        if (tokens.length === 0) {
            apiClient.get<{address: string, tvl: number, share: number}[]>(`/index/token?address=${address}`)
            .then((data) => {
                const tokens: IndexedToken[] = [];
                for (const token of data.data) {
                    const tokenData = tokensData[token.address];
                    tokens.push({
                        address: tokenData.address,
                        name: tokenData.name,
                        symbol: tokenData.symbol,
                        tvl: token.tvl,
                        share: token.share,
                        url: tokenData.url
                    })
                }
                setTokens([...tokens]);
            })

        }
    }, [tokens, address]);
    return tokens
}