/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPublicClient, createWalletClient, custom, http } from 'viem'
import { polygonMumbai } from 'viem/chains';
import { createContext } from 'react';

export const client = createWalletClient({
    chain: polygonMumbai,
    transport: custom(window.ethereum as any)
});

export const viemPublicClient = createPublicClient({
    chain: polygonMumbai,
    transport: http(import.meta.env.VITE_QUICKNODE_API)
})


export const ViemContext = createContext(client);