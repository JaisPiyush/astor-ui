import { Token } from "./types";

export const tokens: Token[] = [
    {
        name: 'Mixed Four',
        symbol: 'MIX4',
        address: '0xD38ac076C909C8fF8D9f617422dfd51ec256AbaC',
        url: 'https://i.pinimg.com/736x/ae/63/70/ae6370269e0421920a5b4ab34ebe7387.jpg'
    }
]

export const indexTokens = [tokens[0]];

export const tokensData: Record<string, Token> = {
    '0xaec8eE023A1b944f65aaAd7Ce4dB400065041d12': {
        address: '0xaec8eE023A1b944f65aaAd7Ce4dB400065041d12',
        name: 'Bitcoin',
        symbol: 'BTC',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
    },
    '0xd2FaAf51d5657a11619f2f30585435337c2DA1Bb': {
        address: '0xd2FaAf51d5657a11619f2f30585435337c2DA1Bb',
        name: 'Chainlink',
        symbol: 'LINK',
        url: 'https://cryptologos.cc/logos/chainlink-link-logo.png'
    },
    '0xbA255629B402cbB9B8bD53ACF905e6255aebc296': {
        address: '0xbA255629B402cbB9B8bD53ACF905e6255aebc296',
        name: 'Binance',
        symbol: 'BNB',
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png'
    },
    '0xdF5CC6883fefe255E50d1A0ceA6DB5c0Df87CaFB': {
        address: '0xdF5CC6883fefe255E50d1A0ceA6DB5c0Df87CaFB',
        name: 'Polygon',
        symbol: 'MATIC',
        url: 'https://cryptologos.cc/logos/polygon-matic-logo.png'
    },
    '0x557838aB4b0e37B20741827fe27B38DDfa68CE9A': {
        address: '0x557838aB4b0e37B20741827fe27B38DDfa68CE9A',
        name: 'USDT',
        symbol: 'USDT',
        url: 'https://w7.pngwing.com/pngs/840/253/png-transparent-usdt-cryptocurrencies-icon-thumbnail.png'
    },
    '0xD38ac076C909C8fF8D9f617422dfd51ec256AbaC': {
        name: 'Mixed Four',
        symbol: 'MIX4',
        address: '0xD38ac076C909C8fF8D9f617422dfd51ec256AbaC',
        url: 'https://i.pinimg.com/736x/ae/63/70/ae6370269e0421920a5b4ab34ebe7387.jpg'
    }
}

export const cashPools: Record<string, string> = {
    '0xD38ac076C909C8fF8D9f617422dfd51ec256AbaC': '0x0B05d210d8eC00f640Fd147cC4831D438A054fF7'
}

export const USDT = '0x557838aB4b0e37B20741827fe27B38DDfa68CE9A'