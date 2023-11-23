export interface Token {
    name: string;
    address: string;
    symbol: string;
    url: string;
}

export interface IndexedToken extends Token {
    tvl: number;
    share: number;
}