/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IndexedToken } from "../types";
import { apiClient } from "../utils/client";
import { tokensData } from "../tokens";
import { globalActions } from "./globalSlice";
import { viemPublicClient } from "../context/ViemContext";
import { CashPoolAbi } from "../abi/CashPoolAbi";
import { DECIMAL_PLACES } from "../constant";


interface IndexedTokenState {
    tokens: IndexedToken[];
    indexPrice: number;
    indexedTokenUserData: GetUserRelatedDataOfIndexToken;
    currentUserCashPoolBalance: number;
}

const initialState: IndexedTokenState = {
    tokens: [],
    indexPrice: 0,
    indexedTokenUserData: {
        indexedTokenBalance: 0,
        collectableIndexToken: 0
    },
    currentUserCashPoolBalance: 0
}

export const fetchIndexedTokenData = createAsyncThunk(
    'indexedToken/fetchIndexedTokenData',
    async (address: string, thunkAPI): Promise<[IndexedToken[], number]> => {
        try {
            const data = await apiClient.get<{indexPrice: number, tokens: {address: string, tvl: number, share: number}[]}>(`/index/token?address=${address}`)
            const tokens: IndexedToken[] = [];
            for (const token of data.data.tokens) {
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
            return [tokens, data.data.indexPrice];
        } catch (e) {
            thunkAPI.dispatch(globalActions.setAlert({
                alert: 'unknow error',
                type: 'error'
            }));
        }
        return [[], 0]
    }
)

export const fetchCurrentUserCashPoolBalance = createAsyncThunk(
    'indexedToken/fetchCurrentUserCashPoolBalance',
    async (args: {cashpool: string, user: string}, thunkAPI) => {
        try {
           const data = await viemPublicClient.readContract({
                address: args.cashpool as any,
                abi: CashPoolAbi,
                functionName: 'getUserBalanceInCurrentNonce',
                args: [args.user]
           }) as bigint
           return Number(data) / DECIMAL_PLACES;
        } catch (e) {
            thunkAPI.dispatch(globalActions.setAlert({
                alert: 'unknow error',
                type: 'error'
            }));
        }
        return 0
    }
)

interface GetUserRelatedDataOfIndexToken {
    indexedTokenBalance: number;
    collectableIndexToken: number
}

export const fetchIndexedTokenUserData = createAsyncThunk(
    'indexedToken/fetchIndexedTokenUserBalance',
    async (args: {token: string, account: string}, thunkAPI): Promise<GetUserRelatedDataOfIndexToken> => {
        try {
            const data = await apiClient.get<GetUserRelatedDataOfIndexToken>(`/index/user?token=${args.token}&user=${args.account}`);
            return {
                ...initialState.indexedTokenUserData,
                ...data.data
            }
        } catch (e) {
            thunkAPI.dispatch(globalActions.setAlert({
                alert: 'unknow error',
                type: 'error'
            }));
        }
        return  initialState.indexedTokenUserData;
    }
)

export const indexedTokenSlice = createSlice({
    name: 'indexedToken',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchIndexedTokenData.fulfilled, (state, action) => {
            state.tokens = [...action.payload[0]];
            state.indexPrice = action.payload[1];
        })
        .addCase(fetchIndexedTokenUserData.fulfilled, (state, action) => {
            state.indexedTokenUserData = {...action.payload};

        })
        .addCase(fetchCurrentUserCashPoolBalance.fulfilled, (state, action) => {
            state.currentUserCashPoolBalance = action.payload;
        })
    }
})

export const indexedTokenActions = indexedTokenSlice.actions;
export default indexedTokenSlice.reducer;