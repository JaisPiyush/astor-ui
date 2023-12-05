import { Token } from "./types";

export const tokens: Token[] = [
    {
        name: 'Mixed Four',
        symbol: 'MIX4',
        address: '0x2132A0A7f298bB2a55D035dfe568E191d6b4b1Ae',
        url: 'https://i.pinimg.com/736x/ae/63/70/ae6370269e0421920a5b4ab34ebe7387.jpg'
    }
]

export const indexTokens = [tokens[0]];

export const tokensData: Record<string, Token> = {
    '0x1ed1029d010934d0E114e2153ab1053919169b29': {
        address: '0x1ed1029d010934d0E114e2153ab1053919169b29',
        name: 'Bitcoin',
        symbol: 'BTC',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
    },
    '0x8735D105C73291F59E4791Acd0A5978BCCace42D': {
        address: '0x8735D105C73291F59E4791Acd0A5978BCCace42D',
        name: 'Chainlink',
        symbol: 'LINK',
        url: 'https://cryptologos.cc/logos/chainlink-link-logo.png'
    },
    '0xAe8beF3454E440fC6a8EA4960400693449973298': {
        address: '0xAe8beF3454E440fC6a8EA4960400693449973298',
        name: 'Binance',
        symbol: 'BNB',
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png'
    },
    '0x14281ff9a6EcC889cFb0c94c327262569f9F661F': {
        address: '0x14281ff9a6EcC889cFb0c94c327262569f9F661F',
        name: 'Polygon',
        symbol: 'MATIC',
        url: 'https://cryptologos.cc/logos/polygon-matic-logo.png'
    },
    '0x2e961FdC50C4e0fdFb06ebce49Be6E857E03FbD9': {
        address: '0x2e961FdC50C4e0fdFb06ebce49Be6E857E03FbD9',
        name: 'USDT',
        symbol: 'USDT',
        url: 'https://w7.pngwing.com/pngs/840/253/png-transparent-usdt-cryptocurrencies-icon-thumbnail.png'
    },
    '0x2132A0A7f298bB2a55D035dfe568E191d6b4b1Ae': {
        name: 'Mixed Four',
        symbol: 'MIX4',
        address: '0x2132A0A7f298bB2a55D035dfe568E191d6b4b1Ae',
        url: 'https://i.pinimg.com/736x/ae/63/70/ae6370269e0421920a5b4ab34ebe7387.jpg'
    }
}

export const cashPools: Record<string, string> = {
    '0x2132A0A7f298bB2a55D035dfe568E191d6b4b1Ae': '0xC4F10f35326f648954b9264cD1771b0dFf977016'
}

export const USDT = '0x2e961FdC50C4e0fdFb06ebce49Be6E857E03FbD9'