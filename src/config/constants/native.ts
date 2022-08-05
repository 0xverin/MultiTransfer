import { ChainId } from "@/config/constants/chainId";
import { Token } from "@/config/constants/types";
type NativeMap = { [chainId: number]: Token };
export const NATIVE: NativeMap = {
    // [ChainId.BSC]: {
    //     name: "BNB Token",
    //     symbol: "BNB",
    //     address: "",
    //     chainId: ChainId.BSC,
    //     decimals: 18,
    //     logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png",
    // },
    [ChainId.RINKEBY]: {
        name: "ETH Token",
        symbol: "ETH",
        address: "",
        chainId: ChainId.RINKEBY,
        decimals: 18,
        logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png",
    },
    // [ChainId.Kovan]: {
    //     name: "ETH Token",
    //     symbol: "ETH",
    //     address: "",
    //     chainId: ChainId.Kovan,
    //     decimals: 18,
    //     logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png",
    // },
    // [ChainId.Mainnet]: {
    //     name: "ETH Token",
    //     symbol: "ETH",
    //     address: "",
    //     chainId: ChainId.Mainnet,
    //     decimals: 18,
    //     logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png",
    // },
    // [ChainId.BSCTestnet]: {
    //     name: "BNB Token",
    //     symbol: "BNB",
    //     address: "",
    //     chainId: ChainId.BSCTestnet,
    //     decimals: 18,
    //     logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png",
    // },
};

export const getNative = (chainId: number) => {
    return NATIVE[chainId] ? NATIVE[chainId] : NATIVE[ChainId.RINKEBY];
};
