/* eslint-disable @typescript-eslint/no-explicit-any */
import { createWalletClient, custom } from 'viem'
import { polygonMumbai } from 'viem/chains';
import { createContext } from 'react';

export const client = createWalletClient({
    chain: polygonMumbai,
    transport: custom(window.ethereum as any)
});


export const ViemContext = createContext(client);